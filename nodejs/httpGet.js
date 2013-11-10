var http = require('http');


var options = {
  host:'localhost',
  port:'8888',
  path:'/test'
}

// get on Server httpReq.js
http.get(options,function(res){
  res.setEncoding('utf8');
  res.on('data', function(data){
  console.log(data);
  });
});
