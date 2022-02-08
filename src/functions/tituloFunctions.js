const utils = require('../utils');

module.exports = {
    getCodigoDeBarras(linhaDigitavel) {
        return utils.retornaCodigoDeBarrasTitulo(linhaDigitavel);
    },
    getVencimento(linhaDigitavel){
        const codigoBarras = utils.retornaCodigoDeBarrasTitulo(linhaDigitavel);
        const dias = parseInt(codigoBarras.substring(5,9));
        
        const data = new Date(1997, 9, 7);
        data.setDate(data.getDate() + dias)

        return JSON.stringify(data).substring(1, 11);
    },
    getValor(linhaDigitavel){
        const codigoBarras = utils.retornaCodigoDeBarrasTitulo(linhaDigitavel);
        let valor = codigoBarras.substring(9,19);
        
        return utils.formatValor(valor);;
    },
}