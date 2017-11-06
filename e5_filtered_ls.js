var fs = require('fs');
var path = require('path');

var directory = process.argv[2];

var extension = '.'+process.argv[3];
//console.log(extension);
fs.readdir(directory, function(err, data){
	

// for (i = 0; i<data.length; i++){
		// if(data[i].toString().includes('.') && data[i].toString().includes(extension)){
		// 	console.log(data[i]);
		// }
data.forEach(function (file) {
		if(path.extname(file)==extension){
			console.log(file);
		}
	 })
});
