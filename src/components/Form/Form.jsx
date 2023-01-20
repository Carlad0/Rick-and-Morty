import { useState } from "react";

const regexUserName = /\S+@\S+\.\S+/;
const regexPassword = new RegExp('^(?=[A-Za-z]+[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$');

const validate = (userData) => {
    const errors = {};

    if (!userData.username) {
        errors.username='Por favor ingrese usuario'
    }
    if (userData.username.length > 35) {
        errors.username='Debe ser menor a 35 caracteres'
    }    
    if (!regexUserName.test(userData.username)) {
        errors.username='Debe ser una direccion valida'    
    }
    if (!regexPassword.test(userData.password)) {
        errors.password='Debe tener entre 6 y 10 caracteres y al menos un número'
    }
    return errors;
}


const Form = (props) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''        
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        props.login(userData);
    };


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' value={userData.username}
                onChange={handleInputChange} />
            <hr />
            {
                errors.username && <p>{errors.username}</p>
            }

            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={userData.password}
                onChange={handleInputChange} />
            <hr />
            {
                errors.password && <p>{errors.password}</p>
            }

            <button>LOGIN</button>
        </form>
    )
}

export default Form;


//REGEX 6-10 caracteres
//^(?=[A-Za-z]+[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$
//REGEX email
///\S+@\S+\.\S+/