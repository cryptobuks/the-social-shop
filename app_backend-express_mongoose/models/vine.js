const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var vineSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('vine', vineSchema);