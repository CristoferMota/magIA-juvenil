// 

var concatenaN1 = [ "Hola", "Buenas", "Tardes" ];
var concatenaN2 = [ "Adios", "Buenas", "Noches" ];
console.log( concatenaN2.concat( concatenaN1 ) );

//PARA ORDENAR LOS ELEMENTOS DE UN ARREGLO Y DEVOLVERLOS ORDENADOS .sort()
var frutasN1 = [ "Mandarina", "Piña", "Sandia", "Durazno"];
var frutasN2 = [ "Mandarina", "Piña", "Pera", "Durazno" ];
var arregloNumeros = [ 5000, 10, 200, 1000, 400 ]
frutasN1.sort();
console.log( frutasN1 );
frutasN2.sort();
console.log( frutasN2 );
//arregloNumeros.sort();
console.log( arregloNumeros );


//CICLOS - for
console.log( "Hola - forma manual" );
console.log( "Hola - forma manual" );
console.log( "Hola - forma manual" );

for( var i = 4; i >= 2; i-- ){
    console.log( "Hola - forma automatica, " + "i: " + i );
}

//[ 5000, 10, 200, 1000, 400 ] - Original
//[ 10, 1000, 200, 400, 5000 ] - Ordenada
//console.log( arregloNumeros[4] );
for( var j = 0; j < arregloNumeros.length; j ++ ){
    console.log( "El valor del arreglo en la posición: " + 
    j + " es: " + arregloNumeros[j] ); 
}

