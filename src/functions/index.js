const convenio = require('./convenioFunctions');
const titulo = require('./tituloFunctions');

module.exports = {
    //Seleção do tipo de boleto para aplicação de regras sobre valor.
    getValor(value){
        if(parseInt(value[0]) === 8){
            return convenio.getValor(value);
        }else{
            return titulo.getValor(value);
        }
    },
    //Seleção do tipo de boleto para aplicação de regras sobre vencimento.
    getVencimento(value){
        if(parseInt(value[0]) === 8){
            return convenio.getVencimento(value);
        }else{
            return titulo.getVencimento(value);
        }
    },
    //Seleção do tipo de boleto para aplicação de regras sobre código de barras.
    getCodigoDeBarras(value){
        if(parseInt(value[0]) === 8){
            return convenio.getCodigoDeBarras(value);
        }else{
            return titulo.getCodigoDeBarras(value);
        }
    },
    //Seleção do tipo de boleto para aplicação de regras sobre validação.
    ehValido(value){
        if(parseInt(value[0]) === 8){
            return convenio.ehValido(value);
        }else{
            return titulo.ehValido(value);
        }
    },
}