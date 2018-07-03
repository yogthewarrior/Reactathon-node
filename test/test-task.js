const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const should = chai.should();

describe('TASK API', function () {
    
    it('App status', function(done){
        request('http://localhost:2000', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });


    it('Main page content', function (done) {
        request('http://localhost:2000', function (error, response, body) {
            expect(body).to.equal('Welcome, Navigate to /my');
            done();
        });
    });
    
    it('Get Tasks', function (done) {
        request.get('http://localhost:2000/my/gettasks').on('response', function(response) {
            expect(response.statusCode).to.equals(200)
            expect(response.headers['content-type']).to.equals('application/json; charset=utf-8')
            expect(response.body).to.not.be.an.instanceof(Array);
            done();
        })
    });
});