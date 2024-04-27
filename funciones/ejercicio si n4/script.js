function promedioNotas() {
    var notas = [];
    var nota = parseFloat(prompt("Ingrese nota (-1 para finalizar):"));
    while (nota !== -1 && !isNaN(nota)) {
        notas.push(nota);
        nota = parseFloat(prompt("Ingrese nota (-1 para finalizar):"));
    }

    if (notas.length > 0) {
        let promedio = notas.reduce((acc, cur) => acc + cur, 0) / notas.length;
        return promedio;
    } else {
        return "No se ingresaron notas.";
    }
}

function siguiente(numero) {
    return numero + 1;
}

let valor = parseInt(prompt("Ingrese un número entero:"));
let siguienteNumero = siguiente(valor);
console.log("El siguiente número es: ", siguienteNumero);


let promedioFinal = promedioNotas();
console.log("El promedio de las notas es: ", promedioFinal);
