function calcularSuperficie(longitud) {
    return longitud * longitud
}

const longitud = 8;
const superficie = calcularSuperficie(longitud)
console.log(`La superficie del cuadrado con lado de longitud ${longitud} es: ${superficie}`);