function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    var pel = document.edades.pelicula.value;
    var can = document.edades.cancion.value;
    var mas = document.edades.mascota.value;
    var vac = document.edades.vacaciones.value;
    var car = document.edades.caricaturas.value;
    var suma = (Number(pel)) + (Number(can)) + (Number(mas)) + (Number(vac)) + (Number(car));

    if(suma < 6){
        document.edades.edad.value="niño";
    }

    if(suma > 6 && suma <= 11){
        document.edades.edad.value="adolescente";
    }

    if(suma > 11){
        document.edades.edad.value="adulto";
    }
}

function borrar(){

    document.edades.pelicula.value="";
    document.edades.cancion.value="";
    document.edades.mascota.value="";
    document.edades.vacaciones.value="";
    document.edades.caricaturas.value="";
    document.edades.edad.value="";
}