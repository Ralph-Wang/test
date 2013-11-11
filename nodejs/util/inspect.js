var util = require('util');

function Obj(){
  this.name = 'Hello World';

  this.toString = function(){
    return this.name;
  }
}

obj = new Obj();

console.log(obj.toString());
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true,3, true));
