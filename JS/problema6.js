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
    var mas = document.mascota.mascota.value;
    var vac = document.edades.vacaciones.value;
    var car = document.edades.caricaturas.value;
    var suma = (Number(pel)) + (Number(can)) + (Number(mas)) + (Number(vac)) + (Number(car));

    if(suma <= 5){
        var res1 = "niño";

        document.edades.edad.value=res1;
    }

    if(suma > 5 && suma <= 10){
        
        var res2 = "adolescente";

        document.edades.edad.value=res2;
    }

    else{
        var res3 = "adulto";

        document.edades.edad.value=res3;
    }
}

function borrar(){

    document.edades.pelicula.value="";
    document.edades.cancion.value="";
    document.edades.mascota.value="";
    document.edades.vacaciones.value="";
    document.edades.caricaturas.value="";
}