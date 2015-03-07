 var express = require('express');
 image = require('./routes/image');
 complaints = require('./routes/complaints');

 var app = express();

 app.get('/image',image.findimage);

 app.get('/complaints',complaints.getcomplaint);
 
 app.listen(3000);
 
 console.log('Listening on port 3000. . .');


/* var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Traffic violations ??? really ??Shoot \n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
/*To run the server, put the code into a file example.js and execute it with the node program from the command line:
*/

