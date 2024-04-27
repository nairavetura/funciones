function calcularAnioBisiesto(anio) {
    if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  const anio = 2013;
  if (calcularAnioBisiesto(anio)) {
    console.log(`${anio} es un año bisiesto.`);
  } else {
    console.log(`${anio} no es un año bisiesto.`);
  }
  