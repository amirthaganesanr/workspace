var http = require('http');
var currentTime = require('./myDateTime');
var url = require('url');

http.createServer(function(request, response)
	{
		response.writeHead(200,{'contentType':'text/plain'});
		response.write("Current Time is "+currentTime.myDateTime()+"\n");
		response.write(request.url+"\n");
		var reqParam = url.parse(request.url, true).query;
		/*http://127.0.0.1:8081/Testing/?year=2018&month=July*/
		var text = reqParam.year+" "+reqParam.month+"\n";
		response.end(text);
		response.end('Hello World \n');
	}).listen(8081);

console.log("Server Running at http://127.0.0.1:8081");