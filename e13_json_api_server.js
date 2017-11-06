var http = require('http')
	url = require('url')
	portNo = process.argv[2]
	dateReceived = ''

	server = http.createServer(function(request, response){

		urlData = url.parse(request.url, true)

		if(urlData.pathname=='/api/parsetime'){
			dateReceived = new Date(urlData.query.iso)
			var hour = dateReceived.getHours()
			var minute = dateReceived.getMinutes()
			var second = dateReceived.getSeconds()

			json = {
                hour: hour,
                minute: minute,
                second: second
            };
		}

		if(urlData.pathname=='/api/unixtime'){
			dateReceived = urlData.query.iso

			json = {
                unixtime: (new Date(urlData.query.iso)).getTime()
            };
		}

		if (json) {
	        response.writeHead(200, { 'Content-Type': 'application/json' });
	        response.end(JSON.stringify(json));
    	} else {
	        response.writeHead(404);
	        response.end();
    }

		//console.log(urlData.pathname)
		//console.log(hour + ':'+ minute + ':' + second)
		
	}).listen(portNo)