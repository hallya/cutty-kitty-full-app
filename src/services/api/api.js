const ORIGIN = 'https://latelier.co';

async function getCats() {
  const response = await fetch(ORIGIN + '/data/cats.json');
  return await response.json();
}

export default {
  ORIGIN,
  getCats
};