var db = require('db');
var log = require('logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name);
};


//Экспортируем функцию
module.exports = User;


/*
 Экспортируем объект
 exports.Users = User;


 global.User = User;

 console.log(module);
 */