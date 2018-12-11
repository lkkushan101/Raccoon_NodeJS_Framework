'use strict';
var unirest = require('unirest');
module.exports = {
getRequest : function(urlRequest) {
unirest.get(urlRequest)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send()
.end(function (response) {
  console.log(response.body);
});
    }
}
