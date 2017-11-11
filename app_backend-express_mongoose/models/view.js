const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var viewSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('view', viewSchema);