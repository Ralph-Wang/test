var fs = require('fs');
var q = require('querystring');

fs.stat('test', function(err,stats){
  if (err){
    console.log(err);
  } else {
    console.log(stats);
    console.log(q.stringify(stats));
  }
});
