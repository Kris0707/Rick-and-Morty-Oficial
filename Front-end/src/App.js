
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import { useState,useEffect } from 'react'
import Nav from "./components/Nav/Nav.jsx"
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import  Form  from './components/Form/Form.jsx'
import Favorites from './components/Favorite/Favorites.jsx'
import { useLocation,useNavigate } from 'react-router-dom'
import Styles from "./App.module.css"




function App () {

const location = useLocation()
const [characters,setCharacters] = useState([])
const navigate = useNavigate();
const [access,setAcess] = useState(false)
const username = 'francokris005@gmail.com';
const password = 'olivia123';


function login(userData){
  if(userData.password === password && userData.username === username){
    setAcess(true);
    navigate('/home')
  }
}

function logout(){
setAcess(false);
navigate('/');
}


useEffect(() => {
   !access && navigate('/');
}, [access]);






function onSearch(id) {
  fetch(` http://localhost:3001/rickandmorty/onsearch/${id}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
          console.log(data)
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
     {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path="/home" 
        element ={<Cards characters={characters} onClose ={onClose}/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
      
    </div>
  )
}

export default App
