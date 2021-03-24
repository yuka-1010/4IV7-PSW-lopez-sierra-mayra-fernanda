/*

Vamos a crear una funcion que se encargue de 
validar que el usuario deba de escribir mas de 5 caracteres
en el campo de nombre 
*/

function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe más de 5 carácteres en el campo nombre");
        formulario.Nombre.focus();
    return false;
    }

    /*
    Vamos a crear una opción para que solo se pueda ingresar
    letras dentro del campo nombre*/
    
    var checkOK = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    + "abcdefghijklmnñopqrstuvwxyz";

    var checkStr = formulario.Nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras en el campo de nombre");
        formulario.Nombre.focus();
        return false;
    }

    /* Vamos a validar la entrada de numeros */
    var checkOK = "1234567890";

    var checkStr = formulario.Edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo números en el campo de edad");
        formulario.Edad.focus();
        return false;
    }

    /* Validar la entrada de un correo electronico 
    algo@algo.algo
    algo.algo@algo.algo.algo
    algo_algo@algo.algo.algo
    Se hace uso de expresiones regulares*/   

    var txt = formulario.Email.value;

    //patron
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)?"":" no ") + "válido");
    return b.test(txt);
}