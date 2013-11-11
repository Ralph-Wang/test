var fs = require('fs');

fs.unlink('test',function(err){
  if (err){
    console.log(err);
  } else {
    console.log('unlink done');
  }
});
