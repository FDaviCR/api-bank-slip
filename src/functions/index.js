const convenio = require('./convenioFunctions');
const titulo = require('./tituloFunctions');

module.exports = {
    getValor(value){
        if(parseInt(value[0]) === 8){
            return convenio.getValor(value);
        }else{
            return titulo.getValor(value);
        }
    },
    getVencimento(value){
        if(parseInt(value[0]) === 8){
            return convenio.getVencimento(value);
        }else{
            return titulo.getVencimento(value);
        }
    },
    getCodigoDeBarras(value){
        if(parseInt(value[0]) === 8){
            return convenio.getCodigoDeBarras(value);
        }else{
            return titulo.getCodigoDeBarras(value);
        }
    }
}