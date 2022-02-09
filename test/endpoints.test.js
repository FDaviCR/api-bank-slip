const request = require('supertest');
const app = require('../src/server');

describe('Testes de endpoint', () => {
    test('Deve retornar um json de dados referentes a aplicação', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('title')
        expect(res.body).toHaveProperty('version')
    })

    test('Deve retornar um json de dados referentes ao boleto informado', async () => {
        return request(app).get('/boleto/21290001192110001210904475617405975870000002000').then(res=>{
            expect(res.statusCode).toEqual(200)
            expect(res.body.amount).toEqual('20.00')
            expect(res.body.barCode).toEqual('21299758700000020000001121100012100447561740')
            expect(res.body.expirationDate).toEqual('2018-07-16')
        })
    })
})