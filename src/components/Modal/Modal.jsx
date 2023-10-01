import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import ReactModal from 'react-modal';
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 17, 17, 0.8)',
    zIndex: 1200,
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    padding: 10,
    border: 'none',
    position: 'static',
    borderRadius: 0,
    overflow: 'hidden',
  },
};
ReactModal.setAppElement('#root');
export const Modal = ({ img, closeModal, modalIsOpen }) => {


  return (
    <ReactModal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
      onRequestClose={() => closeModal()}
      style={customStyles}
      contentLabel="Example Modal"
    >
      
      <img src={img.largeImageURL} alt={img.tags} loading="lazy" />
      
    </ReactModal>
  );
};
