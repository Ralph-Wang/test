var fs = require('fs');

fs.readFile('test',function(err, data){
  console.log(data);
});


fs.readFile('test','utf8', function(err, data){
  console.log('------------set encoding--------------------');
  console.log(data);
});
