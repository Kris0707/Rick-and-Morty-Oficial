
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import { useState } from 'react'
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import  Form  from './components/Form/Form.jsx'
import { useLocation } from 'react-router-dom'


function App () {
const location = useLocation()
const [characters,setCharacters] = useState([])
function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          const existingCharacter = characters.find(char => char.id === data.id);
          if(!existingCharacter){
           setCharacters((oldChars) => [...oldChars, data]);
           } else{
            window.alert("Este personaje ya ha sido agregado")
            }
        } else {
           window.alert('No hay personajes con ese ID');
        }
     },[]);
}


function onClose(id){
setCharacters(characters.filter(personaje => personaje.id !== id))
}


  return (
    <div>
     {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/home" 
        element ={<Cards characters={characters} onClose ={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      
    </div>
  )
}

export default App
