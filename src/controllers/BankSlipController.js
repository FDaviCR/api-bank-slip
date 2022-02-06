const functions = require('../functions');

module.exports = {
    async retornoBoleto(request, response){
        response.status(200).send({
            barCode: request,
            amount:"",
            expirationDate:""
        })
    },

    async linhaDigitavel(request, response){
        let linhaDigitavel = request.params.linhaDigitavel;
        
        response.status(200).send({
            barCode: linhaDigitavel,
            amount: '',
            expirationDate:''
        })
    }
};