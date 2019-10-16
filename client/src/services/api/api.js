const API_PROD = 'https://cors-anywhere.herokuapp.com/https://latelier.co/data/cats.json';
const API_DEV = 'http://localhost:8000/cats';

const API_URL = process.env.NODE_ENV === 'production' ? API_PROD : API_DEV;

async function getCats() {
  const response = await fetch(API_URL);
  return response.json();
}

export default {
  getCats
};