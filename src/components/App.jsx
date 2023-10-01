import { Component } from 'react';
import { fetchPictures, findPictureSearch } from './servises/api';
import { Dna } from 'react-loader-spinner';
import Modal from './Modal/Modal';
import css from './styles.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  // write to state i default
  state = {
    images: null,
    isLoading: false,
    error: null,
    searchImagesQ: null,
    modal: { isOpen: false, data: null },
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

  onOpenModal = modalData => {
    this.setState({
      modal: { isOpen: true, data: modalData },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: { isOpen: false, data: null },
    });
  };

  render() {
    // compare here object in object length
    const showImages =
      Array.isArray(this.state.images) && this.state.images.length;

    return (
      <div className="App">
        {/* render component searchbar(form) */}
        <Searchbar />
        {/* compare isLoading vs library react-loader-spiner */}
        {this.state.isLoading && <Loader />}
        {this.state.error && <p className="error">{this.state.error}</p>}

        <ul className="gallery">
          {showImages &&
            this.state.images.map(
              ({ tags, webformatURL, largeImageURL, id }) => {
                return (
                  // Набір <li> із зображеннями
                  <li key={id} className="gallery-item">
                    <img src={webformatURL} width={400} alt={tags} />
                  </li>
                );
              }
            )}
        </ul>
        <button>Load more</button>

        {/* modal window */}
        {/* <Modal /> */}

        {/* <div key={id} className={css.Overlay}>
          <div className={css.Modal}>
            <button className={css.ModalBtn} type="button">
              &times;
            </button>

           
          </div>
        </div> */}

        {/* {this.state.modal.isOpen && <Modal />} */}

        {/* 
        <ImageGallery />
        <ImageGalleryItem />
        
        <Button />
        <Modal /> */}
      </div>
    );
  }
}
