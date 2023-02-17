
let regexpassw = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/;
let regexemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


export function validate(objuser){
    const errors= {};
    console.log(objuser.password)
    if(!regexemail.test(objuser.username)){
        
        errors.username ="El usuario debe ser un email"
    }else if(!objuser.username){
        errors.username = "El nombre de usuario no puede estar vacio"
    }else if(objuser.username.length > 35){
        errors.username ="El nombre de usuario no puede tener mas de 35 caracteres";
    }

    if(!regexpassw.test(objuser.password)){
        console.log(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,10}$/.test(objuser.password))
        errors.password ="La contraseña debe tener al menos un numero"
    }else if(objuser.password.length < 6 || objuser.password.length > 10){
        errors.password="La contraseña debe tener una longitud entre 6 y 10 caracteres"
    }
    return errors
}