//Ejercicio de repaso Semana 1
//Para calcular el promedio de prácticas de un curso
//se tomará la calificacion de las 4 prácticas que se
//hicieron, de estas 4 se va a eliminar la práctica con
//menor calificacion y se obtendrá el promedio de las 3
// prácticas restantes.

//VALOR DE LAS PRACTICAS
const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
var califMenor = practicaN1;
var resultado = 0;

//IF PARA DETERMINAR CUAL ES LA MENOR CALIFICACION
if(practicaN2 < practicaN1){
    califMenor = practicaN2;
}
else if(practicaN3 < califMenor){
    califMenor = practicaN3;
}
else if (practicaN4 < califMenor){
    califMenor = practicaN4;
}

resultado = (practicaN1 + practicaN2 + practicaN3 + practicaN4) - califMenor;
resultado /= 3;

console.log( resultado );

