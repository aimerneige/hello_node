var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

console.log("Http Server is listing at port 3000.");
console.log("Start http://127.0.0.1:3000/user?name=AimerNeige&email=aimer.neige@aimerneige.com to view.");
