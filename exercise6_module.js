var fs = require('fs');
var path = require('path');

module.exports = function (directory, ext, callback){

	var extension = '.'+ext;

	fs.readdir(directory, function(err, data){
	
	if(err){
		callback(err, null);
	}else{
		result =[];

		data.forEach(function (file) {
		if(path.extname(file)==extension){
			result.push(file);
		}
	 })
		callback(null, result);
	}
});
	
}; 
