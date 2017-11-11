const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var nationalitySchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('nationality', nationalitySchema);