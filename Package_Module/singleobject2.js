function Hello() {
    var name;

    this.setName = function (thyName) {
        name = thyName;
    };

    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};

moduld.exports.Hello = Hello;
// var Hello = require('./singleobject');
