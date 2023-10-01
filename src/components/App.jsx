import { Component } from 'react';
import { fetchPictures, findPictureSearch } from './servises/api';
import { Dna } from 'react-loader-spinner';
import Modal from './Modal/Modal';
import css from './styles.module.css';

export class App extends Component {
  // write to state i default
  state = {
    images: null,
    isLoading: false,
    error: null,
    searchImagesQ: null,
    // modal: { isOpen, data },
  };

  // fetch default allPictures
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

  // fetch search by query images
  fetchImageByQuery = async () => {
    try {
      this.setState({ isLoading: true });
      const image = await findPictureSearch(this.state.searchImagesQ);
      this.setState({ images: [...image] });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  // mount loading default render page

  // componentDidMount() {
  //   this.fetchAllPictures();
  // }

  // write method componentDidUpdate and compare prevState vs here state
  componentDidUpdate(_, prevState) {
    if (prevState.searchImagesQ !== this.state.searchImagesQ) {
      this.fetchImageByQuery();
    }
  }

  // method with submit form
  handleSearchSubmit = event => {
    event.preventDefault();

    const searchImagesQ = event.currentTarget.elements.searchQ.value;
    this.setState({ searchImagesQ: searchImagesQ });
    event.currentTarget.reset();
  };

  render() {
    // compare here object in object length
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <div className="App">
        {/* render component searchbar(form) */}
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
        {/* compare isLoading vs library react-loader-spiner */}
        {this.state.isLoading && (
          <div>
            {/* settings library react-loader-spiner */}
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            {/* <p className="loading">Loading...</p> */}
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
                    <img src={webformatURL} width={400} alt={tags} />
                  </li>
                );
              }
            )}
        </ul>
        <button onClick={() => this.fetchImageByQuery}>Load more</button>

        {/* modal window */}
        {showImages &&
          this.state.images.map(({ largeImageURL, tags, id }) => (
            <div key={id} className={css.Overlay}>
              <div className={css.Modal}>
                <button className={css.ModalBtn} type="button">
                  &times;
                </button>
                <img className={css.ImgModal} src={largeImageURL} alt={tags} />
              </div>
            </div>
          ))}

        {/* {this.state.modal.isOpen && <Modal />} */}

        {/* <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal /> */}
      </div>
    );
  }
}
