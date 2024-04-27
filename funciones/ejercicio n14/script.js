function diasDelMes(mes) {
    switch(mes) {
      case 1:
      case 3: 
      case 5: 
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
        break;
      case 4: 
      case 6:
      case 9:
      case 11:
        return 30;
        break;
      case 2:
        return 28;
        break;
      default:
        return "Mes inválido";
        break;
    }
  }
  
  const mes = 3;
  const dias = diasDelMes(mes);
  console.log(`El mes ${mes} tiene ${dias} días.`);
  