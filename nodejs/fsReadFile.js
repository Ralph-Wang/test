var fs = require('fs');

fs.readFile('event.js',function(err, data){
  console.log(data);
});


fs.readFile('event.js','utf8', function(err, data){
  console.log('------------set encoding--------------------');
  console.log(data);
});
