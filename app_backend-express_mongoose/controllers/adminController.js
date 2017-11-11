const User = require('../models/user');
const config = require('../config')



exports.index = function(req, res, next) {

	if(req.body.key === config.key) {
	    res.json({});
	} else {
	  	res.send("a casa bello");
	}

}


exports.auth = function(key) {

	return key === config.key;
	
}