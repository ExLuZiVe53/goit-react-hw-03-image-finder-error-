import { GalerryLi, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ picture, getImgById }) => {
  const { id, webformatURL, tags } = picture;
  const handleClick = id => {
    getImgById(id);
  };
  return (
    <GalerryLi className="gallery-item" onClick={() => handleClick(id)}>
      <Img src={webformatURL} alt={tags} loading="lazy" />
    </GalerryLi>
  );
};
