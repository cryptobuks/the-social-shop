const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var typologySchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('typology', typologySchema);