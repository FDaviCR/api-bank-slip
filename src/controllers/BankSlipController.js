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
        
        // Bloco de regras para validação da linha digitavel
        const validacao = utils.checarErros(linhaDigitavel);
        let linhaDigitavelValida = validacao.r;
        let err = validacao.e;

        const ehValido = functions.ehValido(linhaDigitavel, true);
        
        if(linhaDigitavelValida){
            // Chamando funções para verificar os dados 
            const codigoBarras = functions.getCodigoDeBarras(linhaDigitavel);
            const valor = functions.getValor(linhaDigitavel);
            const vencimento = functions.getVencimento(linhaDigitavel);
            
            response.status(200).send({
                barCode: codigoBarras,
                amount: valor,
                expirationDate: vencimento
            })
        }else{
            response.status(400).send({
                error: err
            })
        }      
    }
};