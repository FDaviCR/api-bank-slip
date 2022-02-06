const functions = require('../functions');
const util = require('../utils');

module.exports = {
    async retornoBoleto(request, response){
        response.status(200).send({
            barCode: request,
            amount:"",
            expirationDate:""
        })
    },

    async linhaDigitavel(request, response){
        const linhaDigitavel = request.params.linhaDigitavel;
        
        const codigoBarras = util.getCodigoDeBarras(linhaDigitavel);
        const valor = util.getValor(codigoBarras);
        const vencimento = util.getVencimento(codigoBarras);

        response.status(200).send({
            barCode: codigoBarras,
            amount: valor,
            expirationDate: vencimento
        })
    }
};