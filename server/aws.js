Knox = Npm.require("knox");
var Future = Npm.require('fibers/future');

var knox;
var S3;

Meteor.methods({
	S3config:function(obj){
		knox = Knox.createClient(obj);
		S3 = {directory:obj.directory || "/"};
	},
	S3upload:function(file){
		var future = new Future();

		var extension = (file.name).match(/\.[0-9a-z]{1,5}$/i);
		file.name = Meteor.uuid()+extension;
		var path = S3.directory+file.name;

		var buffer = new Buffer(file.data);

		knox.putBuffer(buffer,path,{"Content-Type":file.type,"Content-Length":buffer.length},function(e,r){
			if(!e){
				future.return(path);
			} else {
				console.log(e);
			}
		});

		return knox.http(future.wait());
	}
});


Meteor.call("S3config", {
	key: 'AKIAJLQ442DZJSQNI6AA',
	secret: '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',
	bucket: 'academia-codetlan',
	directory: '/meteor/' //This is optional, defaults to root
});