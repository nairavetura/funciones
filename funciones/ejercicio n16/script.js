function diasDelMes(mes, anio) {
    let diasEnElMes;
  
    switch (mes) {
      case 1: 
      case 3: 
      case 5: 
      case 7: 
      case 8: 
      case 10: 
      case 12: 
        diasDelMes = 31;
        break;
      case 4:
      case 6: 
      case 9: 
      case 11:
        diasEnElMes = 30;
        break;
      case 2: 
        diasEnElMes = (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0) ? 29 : 28;
        break;
      default:
        return "Mes inválido";
    }
  
    return diasEnElMes;
  }
  
  const dia = 23;
  const mes = 6;
  const anio = 2019;
  const dias = diasDelMes(mes, anio);
  console.log(`El mes ${mes} del año ${anio} tiene ${dias} días.`);
  