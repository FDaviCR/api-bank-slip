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
        
        const validacao = utils.checarDigitos(linhaDigitavel);
        const codigoBarras = functions.getCodigoDeBarras(linhaDigitavel);
        const valor = functions.getValor(linhaDigitavel);
        const vencimento = functions.getVencimento(linhaDigitavel);

        if(validacao.r){
            response.status(200).send({
                barCode: codigoBarras,
                amount: valor,
                expirationDate: vencimento
            })
        }else{
            response.status(400).send({
                error: validacao.e
            })
        }
        
    }
};