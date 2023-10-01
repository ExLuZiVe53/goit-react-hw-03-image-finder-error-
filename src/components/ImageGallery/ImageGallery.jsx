
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { ImaGalleryUl } from './ImageGallery.styled.js';
import { Modal } from '../Modal/Modal.jsx';

export class ImageGallery extends Component {
  //стан
  state = {
    ImageData: {},
    isModal: false,
  };
  //знаходжу картинку по кліку по айді
  getImgById = id =>
    this.setState({
      ImageData: this.props.images.find(el => el.id === id),
      isModal: true,
    });
  //закриття модалки
  modalIsClose = () => {
    this.setState({ isModal: false });
  };

  render() {
    return (
      <ImaGalleryUl>
        {this.props.images.map(img => {
          return (
            <ImageGalleryItem
              key={img.id}
              isModal={this.state.isModal}
              getImgById={this.getImgById}
              picture={img}
            />
          );
        })}
        <Modal
          modalIsOpen={this.state.isModal}
          img={this.state.ImageData}
          closeModal={this.modalIsClose}
        ></Modal>
      </ImaGalleryUl>
    );
  }
}
