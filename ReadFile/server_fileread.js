var http = require('http');
var fs = require('fs');
const { exit } = require('process');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});
    // res.write('<h1>Node.js</h1>');

    fs.readFile('test.json', 'utf-8', function(err, data) {
        if (err) {
            console.error(err);
            exit();
        } else {
            res.write(data);
            res.end();
        }
    });
}).listen(3000);
console.log("Http Server is listing at port 3000.");
console.log("Start http://127.0.0.1:3000/ to view.");
