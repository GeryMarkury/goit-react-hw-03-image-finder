import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34958985-0b491356a8c8280d6665784cd';

export async function fetchImages (searchQuery) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: searchQuery,
        page: 1,
        per_page: 12,
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};