const utils = require('../utils');
const moment = require('moment');

module.exports = {
    getCodigoDeBarras(linhaDigitavel) {
        let codigoBarras = '';
        for (let i = 0; i < 4; i++) {
            const start = (11 * (i)) + i;
            const end = (11 * (i + 1)) + i;
            codigoBarras += linhaDigitavel.substring(start, end);
        }
        return codigoBarras;
    },
    getVencimento(linhaDigitavel){
        const codigoBarras = this.getCodigoDeBarras(linhaDigitavel);
        const cb = codigoBarras.substring(23, 31);
        const formattedDate = moment([
            cb.substring(4, 8),
            cb.substring(2, 4) - 1,
            cb.substring(0, 2)
        ]);

        console.log(cb);
        console.log(cb.substring(4, 8));
        console.log(cb.substring(2, 4) - 1);
        console.log(cb.substring(0, 2));

        return formattedDate;
    },
    getValor(linhaDigitavel){
        const codBarras = this.getCodigoDeBarras(linhaDigitavel);
        const valorBoleto = codBarras.substring(4, 15);
        return String(parseFloat(`${valorBoleto.substring(0, 9)}.${valorBoleto.substring(9, 13)}`));
    },
}