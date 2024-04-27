 function calcularArea(radio) {
 const PI = Math.PI;
 const area = PI * radio * radio;
      
  return area;
 }

const radio = 6;
const areaCirculo = calcularArea(radio);
console.log(`El área del círculo con radio ${radio} es: ${areaCirculo}`);