function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function porcentaje(){

    var cantidadf = document.maestro.mujeres.value;
    var cantidadm = document.maestro.hombres.value;
    var cantidadt = document.maestro.total.value;
    var pormuj = cantidadf / cantidadt
    var porhom = cantidadm / cantidadt

    document.maestro.m.value=pormuj+"%";
    document.maestro.h.value=porhom+"%";
}

function borrar(){

    document.maestro.total.value="";
    document.maestro.mujeres.value="";
    document.maestro.hombres.value="";
    document.maestro.m.value="";
    document.maestro.h.value="";
}