var fs = require('fs');

function readFileCallback(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
}

fs.readFile('file.txt', 'utf-8', readFileCallback);
console.log("end.");
