var data = require('./Data.json');
var unirest = require('./PostRequest.js');
var unirest1 = require('./GetRequest.js');
var unirest2 = require('./DeleteRequest.js');
var unirest3 = require('./PutRequest.js');
unirest.postRequest(data.Request_Post,{ "email": data.email, "password": data.password });
unirest1.getRequest(data.Request_Get);
unirest2.deleteRequest(data.Request_Delete);
unirest3.putRequest('https://reqres.in/api/register',{ "name": data.name, "job" : data.name });
