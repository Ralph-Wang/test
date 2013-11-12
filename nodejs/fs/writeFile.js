var fs = require('fs');

fs.writeFile('./test','show me the money', function(err){
  if(err){
    console.log(err.toString());
  } else {
    console.log('write done');
  }
});
