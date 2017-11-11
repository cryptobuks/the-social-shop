const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


var validateEmail = (email) => {
	return (/\S+@\S+\.\S+/).test(email);
}


var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: 'Email address is required.',
		validate: [validateEmail, 'Please enter a valid email.']
	},
	password: {
		type: String
	},
	name: {
		type: String
	},
	surname: {
		type: String
	},
	group: {
		type: String
	},
	items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item'
        },
        time : { type : Date, default: Date.now },
        liked: {
        	type: Boolean,
        	default: false
        },
        disliked: {
        	type: Boolean,
        	default: false
        },
        rank: {
        	type: Number,
        	default: 0
        }
    }]
})


userSchema.pre('save', function(next) {
	var user = this;

	if(user.isNew || user.isModified('password')) {
		bcrypt.genSalt(10, function(err, salt) {
			if(err) { return next(err) }
	
			bcrypt.hash(user.password, salt, null, function(err, hash) {
				if(err) { return next(err) }
	
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});


userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) { return callback(err) }
		callback(null, isMatch);
	})
}


module.exports = mongoose.model('user', userSchema);