module.exports = {

    checarDigitos(value) {
        if(!isNaN(value)){
            return {r: true};
        }else{
            return {r: false, e: "Linha digitavel contém caracteres indevidos"};
        }
    },

    formatarValor(value) {
        let valor = parseFloat(value.substring(4));
        valor = (valor / 100.00).toFixed(2);
  
        return String(valor);
    },

    limparLinhaBoleto(value) {
        return value.replace(/( |\.|-)/g, '');
    },

    calculoDacModulo10(bloco) {
        const soma = bloco.split('').reverse().reduce((acc, current, index) => {
            let soma = parseInt(current) * (((index + 1) % 2) + 1);
            soma = (soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma);
            return acc + soma;
        }, 0);
        return (Math.ceil(soma / 10) * 10) - soma;
      },
    
      calculoDacModulo11(linhaDigitavel) {    
        let multiplicador = 2;
    
        const somatorio = linhaDigitavel.split('').reverse().reduce((acc, current) => {
            const soma = parseInt(current) * multiplicador;
            multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
            return acc + soma;
        }, 0);
    
        const restoDivisao = somatorio % 11;
    
        if (restoDivisao === 0 || restoDivisao === 1){
            return 0;
        }
        if (restoDivisao === 10){
            return 1;
        }
        const DV = 11 - restoDivisao;
        return DV;
      },
    
      modulo11BoletoBancario(bloco) {
        let multiplicador = 2;
        const somatorioFinal = bloco.split('').reverse().reduce((value, current) => {
            const soma = parseInt(current) * multiplicador;
            multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
            return value + soma;
        }, 0);
        const restoDivisao = somatorioFinal % 11;
        const DV = 11 - restoDivisao;
        if (DV === 0 || DV === 10 || DV === 11){
            return 1;
        }
        return DV;
      },
}