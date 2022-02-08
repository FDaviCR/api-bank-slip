module.exports = {

    checarDigitos(value) {

    },

    formatValor(value) {
        let valor = parseFloat(value.substring(4));
        valor = (valor / 100.00).toFixed(2);
  
        return String(valor);
    },

    limparLinhaBoleto(value) {
        return value.replace(/( |\.|-)/g, '');
    },

}