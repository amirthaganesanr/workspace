var url = require('url');
var http = require('http');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


http.createServer(function(req, res){
	res.writeHead(200,{'contentType':'text/plain'});
	res.write(q.host);
	res.write(q.pathname);
	res.write(q.search);
	res.write("\n"+qdata.month);
	res.end();
}).listen(8080);