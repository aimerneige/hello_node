var http = require('http');
const { chdir, title } = require('process');
var queryString = require('querystring');

var server = http.createServer(function(req, res) {
    var post = '';

    req.on('data', function(chunk) {
        post += chunk;
    });

    req.on('end', function() {
        post = queryString.parse(post);

        res.write("Title: ");
        res.write(post.title);
        res.write("\nText: ");
        res.write(post.text);
        res.end();
    });
}).listen(3000);
