const convenio = require('./convenioUtil');
const titulo = require('./tituloUtil');

module.exports = {
    getValor(value){
        if(parseInt(value[0]) === 8){

        }else{
            return titulo.getValor(value);
        }
    },
    getVencimento(value){
        if(parseInt(value[0]) === 8){

        }else{
            return titulo.getVencimento(value);
        }
    },
    getCodigoDeBarras(value){
        if(parseInt(value[0]) === 8){

        }else{
            return titulo.getCodigoDeBarras(value);
        }
    }
}