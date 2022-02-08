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

    retornaCodigoDeBarrasTitulo(value){
        let codigoBarras = '';

        codigoBarras += value.substring(0, 3);
        codigoBarras += value.substring(3, 4);
        codigoBarras += value.substring(32, 33);
        codigoBarras += value.substring(33, 37);
        codigoBarras += value.substring(37, 47);
        codigoBarras += value.substring(4, 9);
        codigoBarras += value.substring(10, 20);
        codigoBarras += value.substring(21, 31);

        return codigoBarras;
    }
}