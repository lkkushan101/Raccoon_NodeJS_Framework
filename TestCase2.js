var data = require('./Data.json');
var unirest1 = require('./GetRequest.js');
describe('Test Get Request', function() {
    it('send a request to weather web service', function() {
      unirest1.getRequest(data.Request_Get);
    });
  });