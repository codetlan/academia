 var Future = Npm.require('fibers/future');
 var request = Npm.require('request');

 Meteor.methods({
     curl: function(productObj) {
         var future = new Future(),
             curl, getData;
         curl = function() {
             var auth = new Buffer('e58dc4e347211' + ":").toString("base64");
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
