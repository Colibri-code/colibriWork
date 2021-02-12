import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

/*Hook utilizado en los estilos del formulario */

const useStyles = makeStyles((theme) => ({
  root: {
      height: '100vh',
  },
  image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'white',
      height: '30%',
      width: '30%',
      borderRadius: '10px'
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));

const User_login_state = {

  email: "",
  password: "",

};




const useLogin = (callback, Validate) => {

  const [user, setUser] = useState(User_login_state);

  const [error, setErrors] = useState({});

  const [isSubmit, setSubmit] = useState(false);


  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
    return { handleChange, user }
  };


  function handleSubmit(e) {
    e.preventDefault()
    //headlinerrors
    setErrors(Validate(user));
    
    setSubmit(true);

  };


    useEffect(() => {

    /*Comprueba que no haya ningun error en los inputs para ejecutar la funcion
    (Submit) en la vista del register, con la funcion callback
    */
    if (Object.keys(error).length === 0 && isSubmit) {
      callback();
    }
  }, [error, isSubmit]);

return {
    handleSubmit,
    handleChange,
    user,
    error,
    useStyles
  };
}
export default useLogin;


