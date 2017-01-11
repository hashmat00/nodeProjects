
const  fs = require("fs");
const os = require("os");

var user = os.userInfo();
var note = require('./note.js');
var _ = require('lodash');

var filterArray = _.uniq(['hashmat', 1, 'hashmat', 1, 2, 3, 4]);
console.log(filterArray);

// var res = note.addNote();
// console.log(res);

// var res = note.add(5, 8);
// console.log('Result:' + res);

// fs.appendFile('message.txt', `Hello ${user.username}!`  + " " + user.username + " ");

