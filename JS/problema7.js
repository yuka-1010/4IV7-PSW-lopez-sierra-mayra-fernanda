function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function comparacion(){

    var no1 = document.numeros.num1.value;
    var no2 = document.numeros.num2.value;

    if(no1 == no2){
        var multi = (Number(no1) * (Number(no2)));

        document.numeros.numtotal.value=multi;
    }

    if(no1 > no2){
        var resta = (Number(no1) - (Number(no2)));

        document.numeros.numtotal.value=resta;
    }

    else{
        var suma = (Number(no1) + (Number(no2)));

        document.numeros.numtotal.value=suma;
    }
}

function borrar(){

    document.numeros.num1.value="";
    document.numeros.num2.value="";
    document.numeros.numtotal.value="";
}