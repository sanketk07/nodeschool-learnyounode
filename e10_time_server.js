var net = require('net')
	portNo = process.argv[2]
	server = net.createServer(function(socket){
		socket.end(getFormattedCurrentTime() + "\n");
	})
server.listen(portNo)

function getFormattedCurrentTime(){
	var now=new Date()

	return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
       + " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":"); 
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
} 