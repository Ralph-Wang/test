var http = require('http');
var querystring = require('querystring');

var content = querystring.stringify({
  name:'ralph',
  email:'ralph_ld@aliyun.com',
});

// post to server created by httpPost.js
var options = {
  host:'localhost',
  port:'8888',
  path:'/',
  method:'POST',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Content-Length':content.length
  }
};

var req = http.request(options, function(res){
  res.setEncoding('utf8');
  res.on('data',function(data){
    console.log(data);
  })
});

req.write(content);
req.end();
