const axios = require("axios");
let URL = "https://rickandmortyapi.com/api/character";

async function getApiData() {
  // obtener los primeros 100 personajes
  // https://rickandmortyapi.com/api/character

  try {


    // intentar async
    let characters = [];
    // let URL = URL
    for (let i = 0; i < 100; i++) {
      const result = await axios(URL);
      const personajes = result.data.results;
      characters.push(...personajes);
      URL = result.data.info.next;
    }

    // console.log(characters);
    console.log("before format");
    const format = characters.map((pj) => {
      console.log(pj);
      return {
        id: pj.id,
        name: pj.name,
        species: pj.species,
        origin: pj.origin.name,
        gender: pj.gender,
        image: pj.image,
        status: pj.status,
      };
    });

    // console.log("format", format);
    return format

    // return format;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { getApiData };
