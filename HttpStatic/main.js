var http = require('http');
var fs = require('fs');


function serveStaticFiles(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFiles(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFiles(res, '/public/about.html', 'text/html');
            break;
        case '/img/wallpaper.png':
            serveStaticFiles(res, '/public/img/wallpaper.png', 'image/png');
            break;
        default:
            serveStaticFiles(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log("Server started at port 3000");
console.log('Open http://127.0.0.1:3000/');
