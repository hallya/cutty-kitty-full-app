const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const ORIGIN = 'https://latelier.co';

async function getCats() {
  const response = await fetch(proxyurl + ORIGIN + '/data/cats.json');
  return response.json();
}

export default {
  getCats
};