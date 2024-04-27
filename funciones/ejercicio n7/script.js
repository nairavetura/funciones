function siguiente(valor) {
    return valor + 1;
}
function doble(valor) {
    return valor * 2;
}
function cuadrado(valor) {
    return valor * valor;
}

function imprimirValores(valor) {
    const valorSiguiente = siguiente(valor);
    const valorDoble = doble(valor);
    const valorCuadrado = cuadrado(valor);
    
  console.log(`El valor siguiente es: ${valorSiguiente}`);
  console.log(`El doble del número es: ${valorDoble}`);
  console.log(`El cuadrado del número es: ${valorCuadrado}`);
}


imprimirValores(9);
