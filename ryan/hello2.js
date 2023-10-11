// while true:
// 	slee 5
// 	print 'hello'

setInterval(function() {
	console.log("world");
}, 5000)
console.log("hello");

var http = require('http')
setInterval(() => {
	console.log("fetching goole.com");
	http.get({host : 'google.com'}, (res) => {
		console.log(res.headers);
	});
}, 2000);

var s = http.Server((req,res) => {
	res.writeHead(200);
	setTimeout(()=>{
		res.end("hello world\n");
	}, 1000);
});

s.listen(8000);
