import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function fetchPictures(namePic, abortCtrl, page = 1) {
  const response = await axios.get('api/', {
    signal: abortCtrl.signal,
    params: {
      key: '38871249-2eed7f344cf93ec506352b726',
      q: namePic,
      orientation: 'horizontal',
      safesearch: true,
      image_type: 'photo',
      per_page: 12,
      page: page,
    },
  });

  return response.data;
}
