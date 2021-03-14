
var arregloNombres = [ "Luis", "Diana", "Omar", "Paula" ];

console.log( arregloNombres[ 2 ] ) ;

//CAMBIANDO VALOR DE UNA POSICION EN UN ARREGLO
arregloNombres[ 2 ] = "Rosa";
console.log( arregloNombres[ 2 ] ) ;

//ELIMINANDO VALOR DE UNA POSICION EN UN ARREGLO delete
delete arregloNombres[ 2 ];
console.log( arregloNombres );

//PARA SABER A CANTIDAD DE ELEMENTOS EN UN ARREGLO .length
console.log( "La cantidad de elementos en el arreglo es: " + arregloNombres.length );

//PARA AGREGAR UN NUEVO ELEMENTO AL FINAL DE UN ARREGLO .push
arregloNombres.push( "Beatriz" );
console.log( arregloNombres );

//PARA BORRAR EL ULTIMO ELEMENTO DE UN ARREGLO .pop
arregloNombres.pop();
console.log( arregloNombres );

//PARA AGREGAR UN ELEMENTO AL ARREGLO EN UN INDICE EN ESPECIFICO .splice
arregloNombres.splice( 0, 0, "Beatriz" ); 
console.log( arregloNombres );

//PARA BORRAR ELEMENTOS AL ARREGLO EN UN INDICE EN ESPECIFICO .splice
arregloNombres.splice( 1, 2 );
console.log( arregloNombres );

//EJERCICIO
//Realizar un programa que lea por teclado 5 notas
//y muestre el promedio de estas.

const prompt = require('prompt-sync')();
var arregloCalif = [];
arregloCalif[0] = prompt( "Dame la primera calif: " );
//console.log ( arregloCalif[0] );
arregloCalif[1] = prompt( "Dame la segunda calif: " );
arregloCalif[2] = prompt( "Dame la tercera calif: " );
arregloCalif[3] = prompt( "Dame la cuarta calif: " );
arregloCalif[4] = prompt( "Dame la quinta calif: " );
console.log ( arregloCalif );

var calif1 = arregloCalif[0];
var calif2 = arregloCalif[1];
var calif3 = arregloCalif[2];
var calif4 = arregloCalif[3];
var calif5 = arregloCalif[4];

var promedioCalif = (parseInt(calif1) + parseInt(calif2) + 
                    parseInt(calif3) + parseInt(calif4) + 
                    parseInt(calif5)) / 5;

console.log( promedioCalif );

//PARA CONCATENAR EN UN NUEVO ARREGLO .concat
var concatenaN1 = [ "Hola", "Buenas", "Tardes" ];
var concatenaN2 = [ "Adios", "Buenas", "Noches" ];
console.log( concatenaN1.concat( concatenaN2 ) );
