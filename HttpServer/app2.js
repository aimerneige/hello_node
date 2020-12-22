var http = require('http');

var server = new http.Server();

var response_func = function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write('{"Name":"张三","ID":"1001"}');
    res.end();
}

server.on('request', response_func);
server.listen(3000);

console.log("Http Server is listing at port 3000.");
console.log("Start http://127.0.0.1:3000/ to view.");
