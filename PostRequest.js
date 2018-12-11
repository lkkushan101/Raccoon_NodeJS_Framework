'use strict';
var unirest = require('unirest');
module.exports = {
postRequest : function(urlRequest, parameters_json) {
unirest.post(urlRequest)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send(parameters_json)
.end(function (response) {
  console.log(response.body);
});
    }
}
