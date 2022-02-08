const functions = require('../functions');
const utils = require('../utils');

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
        
        const codigoBarras = functions.getCodigoDeBarras(linhaDigitavel);
        const valor = functions.getValor(linhaDigitavel);
        const vencimento = functions.getVencimento(linhaDigitavel);

        response.status(200).send({
            barCode: codigoBarras,
            amount: valor,
            expirationDate: vencimento
        })
    }
};