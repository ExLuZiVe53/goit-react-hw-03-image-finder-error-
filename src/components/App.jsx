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
      const images = await fetchPictures();
      this.setState({ images: images });
    } catch (error) {}
  };

  componentDidMount() {
    this.fetchAllPictures();
  }

  render() {
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <>
        <ul className="imageList">
          {showImages &&
            this.state.images.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <li key={index.id} className="imageListItem">
                  <span className="id">id: {id}</span>
                  <p className="p">webformatURL: {webformatURL}</p>
                  <p className="p">largeImageURL:{largeImageURL}</p>
                </li>
              );
            })}
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
