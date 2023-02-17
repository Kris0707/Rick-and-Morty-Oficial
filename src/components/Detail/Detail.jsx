import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

export default function Detail (){
const [infoDetail, setInfo] = useState({})
const {id} = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                setInfo(char);
                console.log(char)
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((error) => {
            window.alert("No hay personajes con ese ID");
          });
        return () => setInfo({})
}, [id])

    return (
    <div>{
    infoDetail.id ? <div>
        <h2>Nombre: {infoDetail.name}</h2>
        <h5>Estatus: {infoDetail.status}</h5>
        <h5>Especie: {infoDetail.species}</h5>
        <h5>Genero: {infoDetail.gender}</h5>
        <h5>Origen: {infoDetail.origin?.name}</h5>
        <div>
            <img src={infoDetail.image} alt={infoDetail.name}/>
        </div>
    </div> : <h1>No existe personaje</h1>
    } 
    </div>
    ) 
}
