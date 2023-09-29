import { Component } from 'react';

export class App extends Component {
  state = {
    isLoading: false,
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
      </>
    );
  }
}
