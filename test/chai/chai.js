const expect = require('chai').expect;
request = require('supertest');
const url= 'http://localhost:4000';

describe('Check text',()=>{
  it('Should get reversed text and if it is a palindrome', (done) => {
    request(url)
    .get('/iecho/prueba')
    .end( function(err,res){
      expect(200);
      done();
    });
  });
 });