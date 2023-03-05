const axios = require('axios');

const URL =  "https://rickandmortyapi.com/api/character/";


const getCharDetail = (req, res) => {
  const {detailId} = req.params;
  axios(URL + detailId).then(response=>{
    const character = {
      image:response.data.image,
      name:response.data.name,
      gender:response.data.gender,
      species:response.data.species,
      status:response.data.status,
      origin:response.data.origin,
      id:response.data.id
    };
    return res.status(200).json(character);
  })
  .catch((error) => {
    res.status(500).send(error.message)
  })
};

module.exports = {getCharDetail};