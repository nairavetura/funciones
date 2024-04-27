function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return numero * 2;
  }
  
  function cuadrado(numero) {
    return numero * numero;
  }
  
 
  function imprimirEIDobleDelSiguienteAlCuadrado(numero) {
    const valorDoble = doble(numero);
    const valorCuadrado = cuadrado(numero);
    const valorSiguienteAlDoble = siguiente(valorDoble);
  
    console.log(`El valor siguiente al doble de ${numero} al cuadrado es: ${valorSiguienteAlDoble}`);
  }
  
  imprimirEIDobleDelSiguienteAlCuadrado(10);
  