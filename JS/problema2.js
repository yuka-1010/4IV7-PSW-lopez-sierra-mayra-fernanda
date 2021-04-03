
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function com(){

    var valor1 = document.vendedor.sueldo1.value;
    var valor2 = document.vendedor.sueldo2.value;
    var valor3 = document.vendedor.sueldo3.value;
    var resultado = (Number(valor1) + (Number(valor2) + (Number(valor3))))
    var comision = resultado * 0.1;
    var total = resultado + comision;

    document.vendedor.sueldomes.value="$"+total;
}

function borrar(){

    document.vendedor.sueldo1.value="";
    document.vendedor.sueldo2.value="";
    document.vendedor.sueldo3.value="";
    document.vendedor.sueldomes.value="";
}