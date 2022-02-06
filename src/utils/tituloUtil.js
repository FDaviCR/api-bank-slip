/*
AAA B CCCCC X DDDDDDDDDD Y EEEEEEEEEE Z K UUUU VVVVVVVVVV
212 9 00011 9 2110001210 9 0447561740 5 9 7587 0000002000

212 9 97587 000000 2000 000112 11000 12100 447561740
212 9 97587 000000 2000 000112 11000 12100 447561740

01 a 03 03 9(03) Código do Banco na Câmara de Compensação = '001'
04 a 04 01 9(01) Código da Moeda = 9 (Real)
05 a 05 01 9(01) Digito Verificador (DV) do código de Barras*
06 a 09 04 9(04) Fator de Vencimento **
10 a 19 10 9(08) V(2) Valor
20 a 44 03 9(03) Campo Livre ***
*/

module.exports = {
    getCodigoDeBarras(linhaDigitavel) {
        let codigoBarras = '';
        codigoBarras += linhaDigitavel.substring(0, 3);
        codigoBarras += linhaDigitavel.substring(3, 4);
        codigoBarras += linhaDigitavel.substring(32, 33);
        codigoBarras += linhaDigitavel.substring(33, 37);
        codigoBarras += linhaDigitavel.substring(37, 47);
        codigoBarras += linhaDigitavel.substring(4, 9);
        codigoBarras += linhaDigitavel.substring(10, 20);
        codigoBarras += linhaDigitavel.substring(21, 31);
        
        return codigoBarras;
    },
    getVencimento(codigoBarras){

    },
    getValor(codigoBarras){

    },
}