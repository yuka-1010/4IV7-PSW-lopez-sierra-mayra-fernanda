function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if( teclado == 8 ) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function comparar(){
    var no1 = document.numeromayor.num1.value;
    var no2 = document.numeromayor.num2.value;
    var no3 = document.numeromayor.num3.value;

    if (no3 < no1 && no1 > no2){
        document.numeromayor.numeromay.value=no1;
    }

    if(no3 < no2 && no2 > no1){
        document.numeromayor.numeromay.value=no2;
    }

    else{
        document.numeromayor.numeromay.value=no3;
    }
}

function borrar(){

    document.numeromayor.num1.value="";
    document.numeromayor.num2.value="";
    document.numeromayor.num3.value="";
    document.numeromayor.numeromay.value="";
}