var express = require('express');
var mongo = require('mongoskin');
var multer  = require('multer');
var app = express();
var done=false;

var db = mongo.db('mongodb://localhost:27017/complaints', {
  'database': 'test',
  'safe': true
});


app.use(multer({ dest: 'images',
rename: function (fieldname, filename) {
    return filename+Date.now();
  },
onFileUploadStart: function (file) {
  console.log(file.originalname + ' is starting ...')
},
onFileUploadComplete: function (file) {
  console.log(file.fieldname + ' uploaded to  ' + file.path)
  done=true;
},
onParseEnd: function(req,next){
                next();
             }
}));



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

 

 //image upload part here


//complaints = require('./routes/complaints');
//imageupload = require('./routes/image');


/*Handling routes.*/

app.get('./uploads',function(req,res){
      res.sendfile("index.html");
});

app.post('/images',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});

complaints = require('./routes/complaints');
//app.post('/image',imageupload.findimage(req,res));
//app.get('/image',image.findimage(db));
app.get('/complaints',complaints.getcomplaint(db));
app.post('/upload', complaints.upload);
app.listen(3000);
console.log('Listening on port 3000. . .');


