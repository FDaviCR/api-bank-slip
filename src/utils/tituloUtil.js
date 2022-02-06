const functions = require('../functions');

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
    getVencimento(codigoBarras){
        const dias = parseInt(codigoBarras.substring(5,9));
        
        const data = new Date(1997, 9, 7);
        data.setDate(data.getDate() + dias)

        return JSON.stringify(data).substring(1, 11);
    },
    getValor(codigoBarras){
        let valor = '';

        valor += codigoBarras.substring(9,19);
        
        return functions.formatValor(valor);;
    },
}