import {useState, useEffect} from 'react';

const userState = {
    password: "",
    email: ""
};

// funcion lógica del hook personalizado
const useForm = (callback, validate) => {
    const [user, setUser] = useState(userState);
    const [error, setErrors] = useState({}); // comprobar si hay errores
    const [isSubmit, setSubmit] = useState(false); // autorizar o no hacer submit

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
        return {
            handleChange, user
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validate(user))
        setSubmit(true)
    }
    
    useEffect(() => {
        /*Comprueba que no haya ningun error en los inputs para ejecutar la funcion
        (Submit) en la vista del register, con la funcion callback
        */
        if (Object.keys(error).length === 0 && isSubmit) {
          callback();
        }
      }, [error, isSubmit]);

    return {
        handleChange, handleSubmit, user, error
    }
}

export default useForm;
