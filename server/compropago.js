 var Future = Npm.require('fibers/future'),
     request = Npm.require('request');

 var COMPROPAGO_DEVELOPMENT_KEY = 'e58dc4e347211',
     COMPROPAGO_PRODUCTION_KEY = '0875847df0f31';
     
 Meteor.methods({
     compropagoCurl: function(productObj) {
         var future = new Future(),
             curl, getData;
         curl = function() {
             var auth = new Buffer(COMPROPAGO_DEVELOPMENT_KEY + ":").toString("base64");
             var options = {
                 url: 'https://api.compropago.com/v1/charges',
                 method: "POST",
                 headers: {
                     'Authorization': 'Basic ' + auth,
                     'Content-Type': 'application/json'
                 },
                 json: productObj
             };
             request(options, function(error, response, body) {
                 if (!error && response.statusCode == 200) {
                     future.
                     return (body);
                 } else {
                     console.log(error);
                 }
             });
             return future.wait();
         };

         getData = function() {
             return curl();
         }.future();

         return getData().wait();
     }
 });
