const utils = require('../utils');

module.exports = {
    getCodigoDeBarras(linhaDigitavel) {
        let codigoBarras = '';

        codigoBarras += linhaDigitavel.substring(0, 3);
        codigoBarras += linhaDigitavel.substring(3, 4);
        codigoBarras += linhaDigitavel.substring(32, 33);
        codigoBarras += linhaDigitavel.substring(33, 37);
        codigoBarras += linhaDigitavel.substring(37, 47);
        codigoBarras += linhaDigitavel.substring(4, 9);
        codigoBarras += linhaDigitavel.substring(10, 20);
        codigoBarras += linhaDigitavel.substring(21, 31);

        return codigoBarras;
    },
    getVencimento(linhaDigitavel){
        const codigoBarras = this.getCodigoDeBarras(linhaDigitavel);
        const dias = parseInt(codigoBarras.substring(5,9));
        
        const data = new Date(1997, 9, 7);
        data.setDate(data.getDate() + dias)

        return JSON.stringify(data).substring(1, 11);
    },
    getValor(linhaDigitavel){
        const codigoBarras = this.getCodigoDeBarras(linhaDigitavel);
        let valor = codigoBarras.substring(9,19);
        
        return utils.formatarValor(valor);;
    },
}