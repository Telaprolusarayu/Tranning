
var http=require('http');

http.createServer(function(req, res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("I am sarayu");
	res.write(req.url);
	res.end();
}).listen(5000);