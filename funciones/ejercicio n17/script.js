function diaAnterior(dia, mes, anio) {
    if (dia > 1) {

      return { dia: dia - 1, mes, anio };
    } else {
   
      if (mes === 1) {
    
        return { dia: 31, mes: 12, anio: anio - 1 };
      } else {
       
        const diasDelMesAnterior = obtenerDiasDelMes(mes - 1, anio);
        return { dia: diasDelMesAnterior, mes: mes - 1, anio };
      }
    }
  }
  
  function obtenerDiasDelMes(mes, anio) {
    const diasPorMes = [
      31, 
      (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0) ? 29 : 28, // Febrero
      31, 
      30, 
      31, 
      30, 
      31, 
      31, 
      30, 
      31, 
      30,
      31  
    ];
    return diasPorMes[mes - 1];
  }
  
  const dia = 1;
  const mes = 1;
  const anio = 2023;
  const fechaAnterior = obtenerDiaAnterior(dia, mes, anio);
  console.log(`El día anterior a ${dia}/${mes}/${anio} es ${fechaAnterior.dia}/${fechaAnterior.mes}/${fechaAnterior.anio}.`);
  