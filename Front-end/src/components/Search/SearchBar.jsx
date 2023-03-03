
import {useState} from "react";
export default function SearchBar(props) {


const [search, setSearch] = useState("");

const handleChange = (event) => {
   setSearch(event.target.value)
}

const handleClick = async () => {
  try {
   await props.onSearch(search);
   setSearch("");
  } catch (error){
   console.error(error)
  }
 };

   return (
      <div>
      <input type='search' value={search} onChange ={handleChange}/>
      <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
