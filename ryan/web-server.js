var http = require('http');
var s = http.createServer((req, res) => {
	res.writeHead(200, { 'context-type' : 'text/plain' });
	res.write("hello\n");
	setTimeout(() => {
		res.end("world\n");
	}, 2000);
});
s.listen(8000);
