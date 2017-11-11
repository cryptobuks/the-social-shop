const User = require('../models/user');
const Item = require('../models/item');
const Typology = require('../models/typology');
const AdminController = require('../controllers/adminController');


/* TODOS:
	-	endpoint per aggiungere un item ad uno user
	-	endpoint per singolo user <-
	-	endpoint items singolo user

*/


exports.index = function(req, res, next) {

	// var user = new User({
	// 	email: "mariorossi@gmail.com",
	// 	name: "Mario",
	// 	surname: "Rossi",
	// });

	// user.save(function(err){

	// });

	if(AdminController.auth(req.headers['authorization'])) {

		User.find({})
            .populate('items.item')
            .exec(function(err, users) {
                if(err) { return next(err) }

				res.json({users: users});
            })

	} else {
		res.send("Non Autorizzato.");
	}

	
}


exports.show = function(req, res, next) {

	if(AdminController.auth(req.headers['authorization'])) {

		var user_id = req.params.user_id;


		Item.find({}, function(err, items) {
			if(err) { return next(err) }

			User.findOne({_id: user_id})
				.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'typology',
				      model: 'typology'
				    }
				  })
				.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'producer',
				      model: 'producer'
				    }
				  })
				.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'vine',
				      model: 'vine'
				    }
				  })

				.exec(function(err, user) {
					if(err) { return next(err) }

					res.json({user: user, items: items})
				});
		});

	} else {
		res.send("Non Autorizzato.");
	}
}


exports.storeItem = function(req, res, next) {

	if(AdminController.auth(req.headers['authorization'])) {

		var user_id = req.params.user_id;
		var item_id = req.params.item_id;


		User.findOne({_id: user_id})
			.populate('items.item')
			.populate('items.item.producer')
			.populate('items.item.nationality')
			.populate('items.item.region')
			.populate('items.item.smell')
			.populate('items.item.taste')
			.populate('items.item.view')
			.populate('items.item.typology')
			.populate('items.item.vine')
			.exec(function(err, user) {

				Item.findOne({_id: item_id}, function(err, item) {

					for(var i=0; i<parseInt(req.body.qt); i++){
						user.items.push({
							item: item._id
						});
					}

					user.save(function(err) {
						if(err) { return next(err) }

						res.send("Success");
					})

				})

			});

	} else {
		res.send("Non Autorizzato.");
	}
}

// exports.destroy = function(req, res, next) {
// 	if(AdminController.auth(req.headers['authorization'])) {
// 		var user = req.user;
// 		var item_id = req.params.item_id;
// 		Item.findByIdAndRemove(item_id, function (err,offer){
// 	    if(err) { return next(err); }
// 		    res.send("Success");
// 		});
// 	} else {
// 		res.send("Non Autorizzato.");
// 	}

// }