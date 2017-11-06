var mymodule = require('./exercise6_module');

var directory = process.argv[2];

var extension = process.argv[3];
mymodule(directory, extension, function(err, data){
	for (i = 0; i<data.length; i++){
		 	console.log(data[i]);
		 }
});