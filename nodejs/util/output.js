var util = require('util');

var v1 = 'test';
var v2 = 1024;
v3 = util.format('%s is %d', v1, v2);
console.log(v3);

util.log(v3);
util.puts(v3);
util.print(v3);
util.debug(v3);
util.error(v3);
