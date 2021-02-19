
/**se crea este archivo para separar la logica del Hook personalizado del formulario
 * del la vista principal del componente SignUp
 */

import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

/*Hook utilizado en los estilos del formulario */

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    //marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  headregister: {
    marginBottom: '10%',

  },
  colorbutton: {
    backgroundColor: '#0273ff',
    color: '#e0e7ff',
    marginTop: '10%'
  }

}));



const Userstate = {
  firstName: "",
  secondName: "",
  password: "",
  email: "",
  profile: ""
};

const useForm = (callback, Validate) => {

  const [user, setUser] = useState(Userstate);

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
export default useForm;


