const request = require('supertest');
const app = require('../src/server');

describe('Testes de endpoint', () => {
    test('Deve retornar um json de dados referentes a aplicação', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('title')
        expect(res.body).toHaveProperty('version')
    })
})
