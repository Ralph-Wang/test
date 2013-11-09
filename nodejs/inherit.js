var util = require('util');

function Base() {
  this.name = 'Base';
  this.base = 1988;
  this.sayHello = function (){
    console.log('Hello %s', this.name);
  }

  Base.prototype.showName = function(){
    console.log(this.name);
  }
}

function Sub() {
  this.name = 'Sub';
}

util.inherits(Sub, Base);

sub = new Sub();
base = new Base();

console.log(base.base);
console.log(base.name);
base.sayHello();
base.showName();


//console.log(sub.base);
console.log(sub.name);
//sub.sayHello();
sub.showName();
