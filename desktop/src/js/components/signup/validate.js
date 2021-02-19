/**En este archivo se crean las
 * validaciones de los input del hook useForm
 */
export default function validate(user) {
    let errors = {
    }

    if(!user.firstName){
        errors.firstName = "Este campo es requerido*"
    }
    if(!user.secondName){
        errors.secondName = "Este campo es requerido*"
    }
    /*if(!user.profile){
        errors.profile = "Este campo es requerido*"
    }*/
    if(!user.email){
        errors.email = "El correo electronico es requerido"
    } else if(!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Correo invalido, Por favor digite uno valido* "
    }
    if(!user.password){
        errors.password = "La contraseña es requerida"
    }else if(user.password.length < 5){
        errors.password = "La contraseña es muy corta"
    }

    

    return errors;
}
 ///Email validate 
 //String to be more than 0 chars
 //need the string to be email


 //