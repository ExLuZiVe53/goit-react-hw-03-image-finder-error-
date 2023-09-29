import axios from 'axios';

export const fetchPictures = async (page = 1) => {
  const KEY_API = '38871249-2eed7f344cf93ec506352b726';
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${KEY_API}&q=1&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
  );
  return data;
};
