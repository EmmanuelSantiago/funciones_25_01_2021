//Algoritmo de sumar dos valores

//function sumar(a, b){
//    return (a + b);
//}
//let numero1 = prompt('Ingrese numero: ');
//let numero2 = prompt('Ingrese numero: ');
//let nuevoto = sumar(parseInt(numero1), parseInt(numero2)); 
//let total = sumar(10, 20);
//console.log('Total = ', total);

//Algoritmo que calcula la edad que tiene el usuario en 2021

function edad(fecha_nacimiento, fecha_actual){
    return fecha_actual - fecha_nacimiento;
}
let ao_nacimiento = prompt('Ingrese su año de nacimiento: ');
let aos_cumplidos = edad(parseInt(ao_nacimiento), 2021);
console.log('Su edad actual es: ', aos_cumplidos);