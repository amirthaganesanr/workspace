var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('Demo.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Appended!');
    });

    fs.writeFile('mynewfile3.txt', new Date(), function(err) {
        if (err) throw err;
        console.log('Written');
    });
    /*fs.rename('mynewfile2.txt','mynewfile3.txt',function(err){
    	if(err) throw err;
    	console.log('Renamed');
    });*/
    fs.unlink('Delete.txt', function(err) {
        if (err) throw err;
        console.log('File deleted!');
    });


}).listen(8080);

console.log("Server Running at http://127.0.0.1:8080");