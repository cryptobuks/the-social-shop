const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var regionSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('region', regionSchema);