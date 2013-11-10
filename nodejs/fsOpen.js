var fs = require('fs');

fs.open('argv.js', 'r', function(err, fd){
  var buf = new Buffer(26);
  fs.read(fd, buf, 0, 26, null, function(err, bytesRead, buffer){
    console.log('bytesRead: %d', bytesRead);
    console.log(buffer);
    fs.open('test.txt', 'w', function(err, fd){
      fs.write(fd, buffer, 0, 26, null, function(err, bytesWritten, buffer){
        console.log('bytesWritten: %d', bytesWritten);
        console.log(buffer);
      });
    });
  });
});
