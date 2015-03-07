exports.getcomplaint = function(db)
{
    return function(req, res) {
        db.collection('usercomplaints',function(err,collection)
        {
           collection.find().toArray(function(err,items)
           {
            console.log(items);
            res.json(items);
           });
        
        });     
        
        //res.send([{compliant1 : 'this is ur complaint'}]);
        //res.send("GRRRRRrrrrrrrrr");
    }
};

exports.addComplaint = function(db)
{
    return function(req, res){
    	var complaint_text = req.body;

    	console.log('Updating complaint...'); 
    	console.log(JSON.stringify(complaint_text));
        db.collection('usercomplaints', function(err,collection)
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
    }


 };

 exports.deleteComplaint = function(db)
 {
    return function(req, res) {
     	var id = req.params.id;
     	console.log("Deleting complaint " + id);

     	db.collection('usercomplaints',function(err,collection)
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

 }


 