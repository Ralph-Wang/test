var fs = require('fs');

fs.appendFile('test','\ngive me more power', function(err){
  if (err){
    console.log(err.toString());
  } else {
    console.log('append done');
  }
});
