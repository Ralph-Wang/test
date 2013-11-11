var util = require('util');

function Base(){
  this.name = 'base';
  this.value = 'baseValue';
  Base.prototype.theValue = 'baseTheValue';

  this.showName = function(){
    return this.name;
  }
  Base.prototype.sayHello = function(){
    return util.format('Hello %s', this.name);
  }
}

function Sub(){
  this.name = 'Sub';
}

util.inherits(Sub, Base);

base = new Base();
sub = new Sub();

console.log('---Base---');
console.log(base.name);
console.log(base.value);
console.log(base.theValue);

console.log(base.showName());
console.log(base.sayHello());

console.log('---Sub---');
console.log(sub.name);
console.log(sub.value);
console.log(sub.theValue);

//console.log(sub.showName());
console.log(sub.sayHello());
