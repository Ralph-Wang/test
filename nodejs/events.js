var e = require('events');

var ev = new e.EventEmitter();

ev.on('event1', function (arg1, arg2){
  console.log('listener1, %s,%s', arg1, arg2);
});

ev.on('event1', function (arg1, arg2){
  console.log('listener2, %s,%s', arg1, arg2);
});

ev.emit('event1', 'ralph', 'test Event');
