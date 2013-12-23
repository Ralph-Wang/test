var url = require('url');
var util = require('util');

theUrl = 'http://ralph@localhost:8888/account/login?article=1&text=2#theTitle'

console.log(util.inspect(url.parse(theUrl)));
console.log('----------------------------');
console.log(util.inspect(url.parse(theUrl, true)));
console.log('----------------------------');
console.log(url.format(url.parse(theUrl)));
