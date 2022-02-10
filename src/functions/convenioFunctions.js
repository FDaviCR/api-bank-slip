const utils = require('../utils');
const moment = require('moment');

module.exports = {
    // Verificação do código de barras do boleto
    getCodigoDeBarras(linhaDigitavel) {
        let codigoBarras = '';
        for (let i = 0; i < 4; i++) {
            const start = (11 * (i)) + i;
            const end = (11 * (i + 1)) + i;
            codigoBarras += linhaDigitavel.substring(start, end);
        }
        return codigoBarras;
    },
    // Verificação do vencimento de barras do boleto
    getVencimento(linhaDigitavel){
        const codigoBarras = this.getCodigoDeBarras(linhaDigitavel);
        const cb = codigoBarras.substring(23, 31);
        const formattedDate = moment([
            cb.substring(4, 8),
            cb.substring(2, 4) - 1,
            cb.substring(0, 2)
        ]);

        return formattedDate;
    },
    // Verificação do valor de barras do boleto
    getValor(linhaDigitavel){
        const codBarras = this.getCodigoDeBarras(linhaDigitavel);
        const valorBoleto = codBarras.substring(4, 15);
        return String(parseFloat(`${valorBoleto.substring(0, 9)}.${valorBoleto.substring(9, 13)}`));
    },
    // Verificação da validade de barras do boleto
    ehValido(linhaDigitavel) {
        if (linhaDigitavel.length !== 48){
            return false;
        }
        const bloco = linhaDigitavel.substring(1, 32);
        const dv = linhaDigitavel.substring(32, 33);
        const dvCalculado = utils.modulo11BoletoBancario(bloco);
        
        return parseInt(dvCalculado) === parseInt(dv);
    }
}