var numero1 = 0
var numero2 = 0
var operador


function calcular(numero1, operador, numero2) {
    switch (operador) {

        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / numero2
        case "%": return numero1 % numero2
    }
}

function setarNumeros(numero) {

    var valor = document.getElementById("visor").innerText

    if (!operador) {
        numero1 = valor + numero
    } else {
        numero2 = numero2 + "" + numero 
    }
    document.getElementById("visor").innerHTML += numero

}

function setarOperador(op) {
    if (!operador) {
        operador = op
    } else {
        setarResultado()
        operador = op
    }
    document.getElementById("visor").innerHTML += op
}

function setarResultado() {

    var resultado = 0
    if (operador) {
        resultado = calcular(parseFloat(numero1), operador, parseFloat(numero2))
    }
    document.getElementById("visor").innerHTML = resultado
    operador = ""
    numero2 = 0
    numero1 = resultado
}

function apagarNumero() {
    numero1 = 0
    numero2 = 0
    operador = ""

    document.getElementById("visor").innerHTML = ""
}