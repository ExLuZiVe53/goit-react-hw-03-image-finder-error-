import { Component } from 'react';
import { fetchPictures, findPictureSearch } from './servises/api';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    searchImagesQ: null,
  };

  fetchAllPictures = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchPictures();
      this.setState({ images: images });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  fetchImageByQuery = async () => {
    try {
      this.setState({ isLoading: true });
      const image = await findPictureSearch(this.state.searchImagesQ);
      this.setState({ images: [image] });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount() {
    this.fetchAllPictures();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchImagesQ !== this.state.searchImagesQ) {
      this.fetchImageByQuery();
    }
  }

  handleSearchSubmit = event => {
    event.preventDefault();

    const searchImagesQ = event.currentTarget.elements.searchQ.value;
    this.setState({ searchImagesQ: searchImagesQ });
    event.currentTarget.reset();
  };

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        <header className="searchbar">
          <form onSubmit={this.handleSearchSubmit} className="form">
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              name="searchQ"
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        {this.state.isLoading && (
          <div>
            <p className="loading">Loading...</p>
          </div>
        )}
        {this.state.error && <p className="error">{this.state.error}</p>}
        <ul className="gallery">
          {/* Набір <li> із зображеннями */}
          {showImages &&
            this.state.images.map(
              ({ tags, webformatURL, largeImageURL, id }) => {
                return (
                  <li key={id} className="gallery-item">
                    <p>id:{id}</p>
                    <h3>{tags}</h3>
                    <img src={webformatURL} width={400} alt={tags} />
                  </li>
                  // <li
                  //   // webformatURL={webformatURL}
                  //   // largeImageURL={largeImageURL}
                  //   key={id}
                  //   id={id}
                  //   // onClick={this.setActiveImg}
                  // >
                  //   <h3>{tags}</h3>
                  //   <p>id:{id}</p>
                  //   <img src={webformatURL} width={400} alt={tags} />

                  //   {/* <img src={largeImageURL}></img> */}
                  // </li>
                );
              }
            )}
        </ul>
        {/* <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal /> */}
      </>
    );
  }
}
