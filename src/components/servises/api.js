import axios from 'axios';

export const fetchPictures = async (page = 1) => {
  const KEY_API = '38871249-2eed7f344cf93ec506352b726';
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=cat&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export const findPictureSearch = async (query, page = 1) => {
  const KEY_API = '38871249-2eed7f344cf93ec506352b726';
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${KEY_API}&q=${query}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${page}`
  );
  return data.hits;
};
