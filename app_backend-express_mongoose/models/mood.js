const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var moodSchema = new Schema({
	name: {
		type: String,

		default: "mood"
	},

	producers:[{
		producer: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'producer'
		}}
	],
	vines:[{
		vine: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'vine'
		}
	}],

	typologys:[{
		typology: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'typology'
		}
	}],

	nationalitys:[{
		nationality: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'nationality'
		}
	}],

	regions:[{
		region: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'region'
		}
	}],

	smells:[{
		smell: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'smell'
		}
	}],

	tastes:[{
		taste: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'taste'
		}
	}],

	views:[{
		view: {
			type: mongoose.Schema.Types.ObjectId,
	        ref: 'view'
		}
	}]
})



module.exports = mongoose.model('mood', moodSchema);