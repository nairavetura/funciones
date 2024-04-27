function doble(numero) {
    return numero * 2;
}

function siguiente(numero) {
    return numero + 1;
}

function imprimirDobleDelSiguiente(numero) {
    const valorSiguienteAlDoble = siguiente(doble(numero));
    console.log(`El valor siguiente al doble de ${numero} es: ${valorSiguienteAlDoble}`);
  }  

  imprimirDobleDelSiguiente(9);