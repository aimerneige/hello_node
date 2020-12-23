var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'AimerNeige',
    email: 'aimer.neige@aimerneige.com',
    address: 'The North University of China'
});

var options = {
    host: 'www.byvoid.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Context-Type': 'application/x-www-form-urlencoded',
        'Context-Length': contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
        console.log(data);
    });
});

req.write(contents);
req.end();
