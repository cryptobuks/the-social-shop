const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var producerSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('producer', producerSchema);