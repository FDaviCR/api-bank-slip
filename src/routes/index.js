const { Router } = require('express');
const BankSlipController = require('../controllers/BankSlipController');
const routes = Router();

// Rota raíz para testes
routes.get('/', (request, response) => {
  response.status(200).send({
    title: "Teste EWally",
    version: "0.0.1"
  });
});

// Rota principal para verificação do barras do boleto
routes.get('/boleto/:linhaDigitavel', BankSlipController.linhaDigitavel);

module.exports = routes;