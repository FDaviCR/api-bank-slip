module.exports = {

    checarDigitos(value) {

    },
    
    limparLinhaBoleto(value) {
        return value.replace(/( |\.|-)/g, '');
    },
}