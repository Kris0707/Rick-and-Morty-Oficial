const axios = require('axios');

const URL =  "https://rickandmortyapi.com/api/character/";


async function getCharDetail(req, res){
  const {id} = req.params;
  if(id){

  
  try {
    const response = await axios(URL + id)
    const character = {
      id:response.data.id,
      name:response.data.name,
      image:response.data.image,
      gender:response.data.gender,
      species:response.data.species,
      status:response.data.status,
      origin:response.data.origin, 
    };
    return res.status(200).json(character);
  } catch (error) {
    return res.status(500).send(error.message)
  }
  }else{
    return res.status(500).send("Debes proveer un id por parametro")
  }
};

module.exports = getCharDetail;