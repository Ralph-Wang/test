var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.write(util.inspect(url.parse(req.url, true), true));
  res.end('\n');
}).listen(8888);
