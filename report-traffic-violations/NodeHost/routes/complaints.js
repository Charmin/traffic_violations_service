var mongo = require('mongodb');

var Server = mongo.Server,
      Db = mongo.Db;
      BSON = mongo.BSONPure;

var server = new Server('localhost',27017,{auto_reconnect: true});
db = new Db('winedb',server);

db.open(function(err,db)
{
	if(!err)
	{
		console.log("Connected to traffic_violations database");
		db.collection('complaint_list',{strict:true}, function(err,collection)
		{
			if(err)
			{
				console.log("The complaint_list collection doesnt exist.Creating it with sample data...");
				//populateDB();
			}
		});
	}

});



exports.getcomplaint = function(req,res)
{
    db.collection('complaint_list',function(err,collection)
    {
       collection.find().toArray(function(err,items)
       {
       	  res.send(items);
       });
    
    });     
    
    res.send([{compliant1 : 'this is ur complaint'}]);
    res.send("GRRRRRrrrrrrrrr");
};

exports.addComplaint = function(req,res)
{
	var complaint_text = req.body;

	console.log('Updating complaint...'); 
	console.log(JSON.stringify(complaint_text));
    db.collection('complaint_list', function(err,collection)
    {
    	collection.insert(complaint_list,{safe:true},function(err, result)
    	{
            if(err){
    		res.send({'error' : 'An error has occcured'});
    	    }else {
    	    	console.log('Success: ' + JSON.stringify(result[0]));
    	    	res.send(result[0]);
    	    }

    	});
    });


 };

 exports.deleteComplaint = function(req,res)
 {
 	var id = req.params.id;
 	console.log("Deleting complaint " + id);

 	db.collection('complaint_list',function(err,collection)
 	{
 		collection.remove({'_id':new BSON.ObjectID(id)} , {safe:true},function(err, result)
        { 			
            if(err){
            	res.send({'error' : 'An error has occured -' + err});
            }
            else{
            	console.log(''+ result + 'document(s) deleted');
            	res.send(req.body);
            }
        });

 	});

 }