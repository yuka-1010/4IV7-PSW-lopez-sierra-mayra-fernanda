function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}


function cal(){
    var tempo = document.trabajador.viejo.value;
    var dinero = document.trabajador.salario.value;

    if(tempo < 1){
        var sal1 = ((Number(dinero)) * (Number(0.05))) * (Number(12));

        document.trabajador.utilidadfinal.value=sal1+"%";
    }

    if(tempo >= 1 && tempo < 2){
        var sal2 = ((Number(dinero)) * (Number(0.07))) * (Number(12));

        document.trabajador.utilidadfinal.value=sal2+"%";
    }

    if(tempo >= 2 && tempo < 5){
        var sal3 = ((Number(dinero)) * (Number(0.10))) * (Number(12));

        document.trabajador.utilidadfinal.value=sal3+"%";
    }

    if(tempo >= 5 && tempo < 10){
        var sal4 = ((Number(dinero)) * (Number(0.15))) * (Number(12));

        document.trabajador.utilidadfinal.value=sal4+"%";
    }

    else{
        var sal5 = ((Number(dinero)) * (Number(0.20))) * (Number(12));

        document.trabajador.utilidadfinal.value=sal5+"%";
    }
}

function borrar(){

    document.trabajador.viejo.value="";
    document.trabajador.salario.value="";
    document.trabajador.utilidadfinal.value="";
}