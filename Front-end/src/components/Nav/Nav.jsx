import React from "react";
import SearchBar from "../Search/SearchBar.jsx";
import Styles from "./Nav.module.css"
import { Link } from 'react-router-dom';


export default function Nav(props){
return(
<nav className={Styles.nav}>
    <SearchBar onSearch = {props.onSearch}className={Styles.search}/>
    <Link to="/home">
        <span>Home</span>
    </Link>
    <Link to="/favorites">
        <span>Favorites</span>
    </Link>
    <Link to="/about">
    <span>About</span>
    </Link>
    <button onClick={props.logout}>Logout</button>
</nav>

)
}