
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
  try {

    //API data
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`)
    const origin = await fetchData(character.origin.url);

    // routes that we used
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);

  } catch (error) {
    console.error(error);
  }
}

console.log('Before');
anotherFunction(API);
console.log('After');