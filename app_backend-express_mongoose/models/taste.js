const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tasteSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('taste', tasteSchema);