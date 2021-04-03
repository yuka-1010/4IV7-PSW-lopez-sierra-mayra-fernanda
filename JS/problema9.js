function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function total(){
    var horas = document.empresa.normal.value;
    var dinero = document.empresa.sueldo.value;
    var doble = (((Number(horas)) - 40) * 2) * (Number(dinero));
    var triple = (((Number(horas)) - 48) * 3) * (Number(dinero));

    if(horas <= 40){
        var x1 = (Number(horas)) * (Number(dinero));

        document.empresa.pago.value=x1;
    }

    if(horas > 40 && horas <= 48){
        var x2 = (Number(doble)) + (Number(horas));

        document.empresa.pago.value=x2;
    }

    else{
        var x3 = (Number(triple)) + (Number(horas));

        document.empresa.pago.value=x3;
    }
}

function borrar(){

    document.empresa.normal.value="";
    document.empresa.sueldo.value="";
    document.empresa.pago.value="";
}