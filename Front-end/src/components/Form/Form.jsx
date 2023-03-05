import Styles from "./Form.module.css"
import { useState } from "react"
import {validate} from "./validation"

export default function Form({login}){
const [userData,setUserData] = useState({
    username:"",
    password:"",
});
const [errors,setErrors] = useState({});



const handleInputChange = (e) => {
   setErrors(validate({...userData, [e.target.name]:e.target.value}));
   setUserData({...userData,[e.target.name]: e.target.value });
}

const submitHandler = (event) => {
    event.preventDefault();
login(userData)
};

    return(
        <div className={Styles.div}>
            <form onSubmit={submitHandler} className={Styles.form}>
                <label className={Styles.label} htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                value={userData.username}
                onChange={handleInputChange}
                className={Styles.input}
                />
                <p>{errors.username}</p>
                <label className={Styles.label} htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                value={userData.password}
                onChange={handleInputChange}
                className={Styles.input} 
                />
                <p>{errors.password}</p>
                <button type="submit" className={Styles.button}>Login</button>
            </form>
        </div>
    )
}