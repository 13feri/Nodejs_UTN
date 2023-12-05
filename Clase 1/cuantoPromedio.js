
function calcularPromedio(numeros){
    let suma =  0;

    for ( i = 0 ; i < numeros.length ; i++) {
        suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    return promedio
}

//numero = [5,4,8,10,3,2]
numero = [4,8,10,2]
let resultado = calcularPromedio(numero);
console.log(resultado)