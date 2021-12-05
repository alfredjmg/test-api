const url= 'http://localhost:4000';
const expect = require('chai').expect
const request = require('supertest')

describe('ComboController  /api/v1/combos', function () {
    it('should GET combo of given id: getComboById', async () => {
        const response = await request(url)
            .get(`/iecho/prueba`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    })
})