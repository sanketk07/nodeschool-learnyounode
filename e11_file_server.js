var http = require('http')
	fs = require('fs')
	portNo = process.argv[2]
	file = process.argv[3]
	server = http.createServer(function(request, response){
		res.writeHead(200, { 'content-type': 'text/plain' })
		fs.createReadStream(file).pipe(response)
	}).listen(portNo)


