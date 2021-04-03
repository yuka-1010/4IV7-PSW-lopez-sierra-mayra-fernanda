function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calif() {

    var califi = document.calificacion.parciales.value;
    var califexam = document.calificacion.examen.value;
    var califtrab = document.calificacion.trabajo.value;
    var puntosparciales = (califi * 55) / 10;
    var puntosexam = (califexam * 30) / 10;
    var puntostrab = (califtrab * 15) / 10;
    var final = puntosparciales + puntosexam + puntostrab;

    document.calificacion.calificacionfinal.value=final+"%";
}

function borrar(){

    document.calificacion.parciales.value="";
    document.calificacion.examen.value="";
    document.calificacion.trabajo.value="";
    document.calificacion.calificacionfinal.value="";
}