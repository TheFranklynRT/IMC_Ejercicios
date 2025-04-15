const modulo = require("./ejerciciosIMC.js");

const pesoUsuario = 200;
const alturaUsuario = 1.60;

const imcUsuario = modulo.moduloEjerciciosIMC(pesoUsuario, alturaUsuario);

if (imcUsuario < 20) {
    console.log("El IMC del Usuario indica bajo peso: " + imcUsuario.toFixed(2));
} else if (imcUsuario >= 20 && imcUsuario < 24.9) {
    console.log("El IMC del Usuario indica peso normal: " + imcUsuario.toFixed(2));
} else if (imcUsuario >= 25 && imcUsuario < 29.9) {
    console.log("El IMC del Usuario indica sobrepeso: " + imcUsuario.toFixed(2));
} else if (imcUsuario >= 30 && imcUsuario < 34.9) {
    console.log("El IMC del Usuario indica obesidad tipo I: " + imcUsuario.toFixed(2));
} else {
    console.log("El IMC del Usuario indica obesidad extrema: " + imcUsuario.toFixed(2));
}
