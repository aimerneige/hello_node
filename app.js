var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World!</p>');
}).listen(3000);
console.log("Http Server is listing at port 3000.");
console.log("Start http://127.0.0.1:3000/ to view.");
