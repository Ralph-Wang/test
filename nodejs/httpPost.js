var http = require('http');
var querystring = require('querystring');
var util = require('util');


http.createServer(function(req, res){
  var post = '';
  req.on('data', function(chunk){
    post += chunk;
  });
  req.on('end', function(){
    var thePost = querystring.parse(post);
    res.write(util.inspect(thePost));
    res.end('\n');
  });
}).listen(8888);
