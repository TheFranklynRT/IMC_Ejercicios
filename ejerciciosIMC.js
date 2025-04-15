function ejerciciosIMC(pesoUsuario, alturaUsuario) {
    const imcUsuario = pesoUsuario / (alturaUsuario * alturaUsuario)
    return imcUsuario;
}

module.exports.moduloEjerciciosIMC = ejerciciosIMC;


