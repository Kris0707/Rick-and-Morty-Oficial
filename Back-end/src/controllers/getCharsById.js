const axios = require("axios")


const URL = "https://rickandmortyapi.com/api/character/"



const getCharById = (req,res) => {
const {id} = req.params
axios(URL + id).then(response =>{
    const character ={
        id:response.data.id,
        name:response.data.name,
        species:response.data.species,
        image:response.data.image,
        gender:response.data.gender
    }
    res.status(200).json(character)
    },
    (err) => {
    res.status(500).send(err.message)
    }
)
}



module.exports = {getCharById};