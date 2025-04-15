function ejerciciosIMC(peso, altura) {
    const imcUsuario = peso / (altura * altura);

    if (imcUsuario < 20) {
        return ("El IMC del Usuario es de bajo peso es: " + imcUsuario.toFixed(2));
    } else if (imcUsuario >= 20.5 && imcUsuario < 24.9) {
        return ("El IMC del Usuario es de peso normal es: " + imcUsuario.toFixed(2));
    } else if (imcUsuario >= 30 && imcUsuario < 35.9) {
        return ("El IMC del Usuario es de sobrepeso es: " + imcUsuario.toFixed(2));
    } else if (imcUsuario >= 35.9 && imcUsuario < 150) {
        return ("El IMC del Usuario es de obesidad es: " + imcUsuario.toFixed(2));
    } else {
        return ("El IMC del Usuario es de obesidad extrema 'gordito' es: " + imcUsuario.toFixed(2));
    }
}

const pesoUsuario = 200;
const alturausuario = 1.60;
console.log(ejerciciosIMC(pesoUsuario, alturausuario));
