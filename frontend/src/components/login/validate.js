export default function validate(user) {
    let errors = {
    }
    
    if(!user.email){
        errors.email = "El correo electronico es requerido"
    } else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Correo invalido, Por favor digite uno valido* "
    }
    if(!user.password){
        errors.password = "Proporciona una contraseña"
    }
    return errors;
}