'use strict';
var unirest = require('unirest');
module.exports = {
deleteRequest : function(urlRequest) {
unirest.delete(urlRequest)
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.send()
.end(function (response) {
  console.log(response.code);
});
    }
}
