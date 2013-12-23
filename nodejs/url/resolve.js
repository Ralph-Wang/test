var url = require('url');

theHost = 'http://ralph@localhost:8888'
thePath = 'acccount/login'

theUrl = url.resolve(theHost, thePath);

console.log(theUrl);
