var express = require('express');
var mongo = require('mongoskin');
var db = mongo.db('mongodb://localhost:27017/complaints', {
	'database': 'test',
	'safe': true
});


// var Server = mongo.Server,
//       Db = mongo.Db;
//       BSON = mongo.BSONPure;

// var server = new Server('localhost',27017,{auto_reconnect: true});
// db = new Db('winedb',server);

// db.open(function(err,db)
// {
// 	if(!err)
// 	{
// 		console.log("Connected to traffic_violations database");
// 		db.collection('complaint_list',{strict:true}, function(err,collection)
// 		{
// 			if(err)
// 			{
// 				console.log("The complaint_list collection doesnt exist.Creating it with sample data...");
// 				//populateDB();
// 			}
// 		});
// 	}

// });

 //image = require('./routes/image');
 complaints = require('./routes/complaints');

 var app = express();

 //app.get('/image',image.findimage(db));

 app.get('/complaints',complaints.getcomplaint(db));
 
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

