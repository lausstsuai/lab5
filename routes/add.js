var data = require("../data.json");


exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	var name = req.query.name;
	var description = req.query.description;
	var newfriend = 
		{
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people/"			
		}

	console.log(newfriend);
	data.friends.push(newfriend);
	console.log(data);
	res.render('index', data);
 }