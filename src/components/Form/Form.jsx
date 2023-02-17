import Styles from "./Form.module.css"
import { useState, useEffect } from "react"
import {validate} from "./validation"

export default function Form(){
const [userData,setUserData] = useState({
    username:"",
    password:"",
});
const [errors,setErrors] = useState({});

useEffect(() => {
    const newErrors = validate(userData);
    setErrors(newErrors);
  }, [userData]);

const handleInputChange = (e) => {
    const newUserData = { ...userData, [e.target.name]: e.target.value };
    setUserData(newUserData);
}

    return(
        <div className={Styles.div}>
            <form className={Styles.form}>
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
                <button className={Styles.button}>Enviar</button>
            </form>
        </div>
    )
}