function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function descuentos(){

    var valor = document.tienda.compra.value;
    var resultado = parseInt(valor);
    var des = resultado*0.15;
    var total = resultado - des;

    document.tienda.pago.value="$"+total;
}

function borrar(){

    document.tienda.compra.value="";
    document.tienda.pago.value="";
}