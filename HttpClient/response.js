var http = require('http');

var req = http.get({host: 'www.baidu.com'});

req.on('response', function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(data) {
        console.log(data);
    });
});