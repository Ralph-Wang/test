var fs = require('fs');

fs.rename('test','newTest', function(err){
  if (err) {
    console.log(err);
  } else {
    console.log('rename done');
  }
});
