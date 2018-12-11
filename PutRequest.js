'use strict';
var unirest = require('unirest');
module.exports = {
putRequest : function(urlRequest, parameters_json) {
unirest.put(urlRequest)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send(parameters_json)
.end(function (response) {
  console.log(response.body);
});
    }
}
