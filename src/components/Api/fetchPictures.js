import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export  async function fetchPictures( namePic, abortCtrl, page = 1 ) {
  const response = await axios.get('api/', {
    signal: abortCtrl.signal,
    params: {
      key: '35864662-5c3b2f3ed57b7580b501bec47',
      q: namePic,
      orientation: 'horizontal',
      safesearch: true,
      image_type: 'photo',
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};
