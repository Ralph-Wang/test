var util = require('util');


console.log(util.isDate(new Date()));

console.log(util.isArray(new Array()));

console.log(util.isError(new Error()));

console.log(util.isRegExp(/reg/));
