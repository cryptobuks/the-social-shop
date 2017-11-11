const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var itemSchema = new Schema({
	name: {
		type: String
	},
	desc: {
		type: String
	},
	fullDesc: {
		type: String
	},
	producer: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'producer'
	},
	vine: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'vine'
	},
	gradation: {
		type: Number
	},
	typology: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'typology'
	},
	year: {
		type: String
	},
	nationality: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'nationality'
	},
	region: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'region'
	},
	price: {
		type: Number
	},
	smell: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'smell' 
	},
	taste: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'taste' 
	},
	view: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'view' 
	},
	img: {
		type: String
	},
	hidden: {
		type: Boolean,
		default: false
	},
	time : { 
		type : Date, 
		default: Date.now 
	}
})



module.exports = mongoose.model('item', itemSchema);