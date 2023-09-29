import { Component } from 'react';
import { fetchPictures } from './servises/api';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  fetchAllPictures = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchPictures();
      this.setState({ images: images });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchAllPictures();
  }

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        {this.state.isLoading && (
          <div>
            <p className="loading">Loading...</p>
          </div>
        )}
        <ul className="imageList">
          {showImages &&
            this.state.images.map(
              ({ tags, webformatURL, largeImageURL, id }) => {
                return (
                  <li
                    // webformatURL={webformatURL}
                    // largeImageURL={largeImageURL}
                    key={id}
                    id={id}
                    // onClick={this.setActiveImg}
                  >
                    <h3>{tags}</h3>
                    <p>id:{id}</p>
                    <img src={webformatURL} width={400} alt={tags} />

                    {/* <img src={largeImageURL}></img> */}
                  </li>
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
