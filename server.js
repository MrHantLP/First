var log = require('logger')(module);
var db = require('db');
db.connect();

var Users = require('./user');

function run() {
    var vasya = new Users("Вася");
    var petya = new Users("Петя");

    vasya.hello(petya);

    log(db.getPhrase("RunOk"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}