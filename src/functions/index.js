module.exports = {

    limparLinhaBoleto(value) {
        return value.replace(/( |\.|-)/g, '');
    },
}