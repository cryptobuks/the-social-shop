const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var smellSchema = new Schema({
	name: {
		type: String
	}
})



module.exports = mongoose.model('smell', smellSchema);