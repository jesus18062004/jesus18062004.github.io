let operacionActual = '';

function operacion(op) {
    operacionActual = op;
}

function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let total;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').value = "Error: Ingrese números válidos";
        return;
    }

    switch (operacionActual) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
        default:
            return;
    }

    document.getElementById('resultado').value = total;
}

function limpiar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').value = '';
    operacionActual = '';
}
