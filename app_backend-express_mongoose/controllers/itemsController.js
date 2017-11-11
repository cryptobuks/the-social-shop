const User = require('../models/user');
const Item = require('../models/item');
const Nationality = require('../models/nationality');
const Producer = require('../models/producer');
const Region = require('../models/region');
const Smell = require('../models/smell');
const Taste = require('../models/taste');
const View = require('../models/view');
const Vine = require('../models/vine');
const Typology = require('../models/typology');
const Mood = require('../models/mood');
const AdminController = require('../controllers/adminController');

/*

aggiungere pulsantino e funzionalità per andare a vedere le info
di un singolo item che poi si su dai ci siamo e daje


riscrivere il form per creare un item e per i field speciale
mettere un text input con accanto un select con i field ottenuti dalla
request degli items


prendere l'url dell'immage che si riceve, scaricare l'immage, salvare in un bucket s3
e salvare l'url del bucket s3


detto ciò, dopo il validate inviare la post alle API e gg wp


*/

exports.create = function(req, res, next) {
	if(AdminController.auth(req.headers['authorization'])) {
	
		var name = req.body.name;
		var desc = req.body.desc;
		var fullDesc = req.body.fullDesc;
		var producer = req.body.producer;
		var vine = req.body.vine;
		var gradation = req.body.gradation;
		var typology = req.body.typology;
		var year = req.body.year;
		var nationality = req.body.nationality;
		var region = req.body.region;
		var price = req.body.price;
		var smell = req.body.smell;
		var taste = req.body.taste;
		var view = req.body.view;
		var img = req.body.img;


		var item = new Item({
			name: name,
			desc: desc,
			fullDesc: fullDesc,
			gradation: parseInt(gradation),
			year: year,
			price: parseInt(price),
			img: img	
		});

		var item_id = item._id;

		item.save(function(err) {
			if(err) { return next(err) }
		})

		// var newMood = new Mood({name: "mood"});

		// newMood.save(function(err) {
		// 	if(err) { return next(err) }
		// });


		Producer.findOne({name: producer}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Producer({name: producer});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {producer: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.producers.push({producer: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});


		Nationality.findOne({name: nationality}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Nationality({name: nationality});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {nationality: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.nationalitys.push({nationality: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});


		});

		Typology.findOne({name: typology}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Typology({name: typology});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {typology: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.typologys.push({typology: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});


		});


		Region.findOne({name: region}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Region({name: region});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {region: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.regions.push({region: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});


		Smell.findOne({name: smell}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Smell({name: smell});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {smell: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.smells.push({smell: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});

		Taste.findOne({name: taste}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Taste({name: taste});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {taste: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.tastes.push({taste: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});

		View.findOne({name: view}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new View({name: view});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {view: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});


			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.views.push({view: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});

		Vine.findOne({name: vine}, function(err, prod) {
			if(err) { return next(err) }

			if(prod === null) {
				prod = new Vine({name: vine});

				prod.save(function(err) {
					if(err) { return next(err) }
				})
			}

			Item.update({_id: item_id}, {vine: prod._id}, function(err, items) {
				if(err) { return next(err) }

			});

			Mood.findOne({name: "mood"}, function(err, mood) {
				if(err) { return next(err) }

				mood.vines.push({vine: prod._id});

				mood.save(function(err) {
					if(err) { return next(err) }
				});
			});

		});


	
		res.send("Success");

	} else {
		res.send("Non Autorizzato.");
	}
}

exports.index = function(req, res, next) {
	if(AdminController.auth(req.headers['authorization'])) {

		var items = Item.find({})
			.populate('typology')
			.populate('producer')
			.populate('vine')
			.select('_id name typology producer price vine')
		 	.exec(function(err, items) {
				if(err) { return next(err) }

				res.json({items: items});
			});

	} else {
		res.send("Non Autorizzato.");
	}

	
}

exports.rnIndex = function(req, res, next) {

	var user_id = req.params.user_id;

	User.findOne({_id: user_id})
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
				      path: 'typology',
				      model: 'typology'
				    }
				  })
		.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'nationality',
				      model: 'nationality'
				    }
				  })
		.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'region',
				      model: 'region'
				    }
				  })
		.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'smell',
				      model: 'smell'
				    }
				  })
		.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'taste',
				      model: 'taste'
				    }
				  })
		.populate({
				    path: 'items.item',
				    model: 'item',
				    populate: {
				      path: 'view',
				      model: 'view'
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

			res.json({items: user.items})
		});

	
}

exports.rnIndexAll = function(req, res, next) {


	var items = Item.find({})
		.populate('typology')
		.populate('producer')
		.populate('vine')
		.populate('taste')
		.populate('view')
		.populate('smell')
		.populate('region')
		.populate('nationality')
	 	.exec(function(err, items) {
			if(err) { return next(err) }

			res.json({items: items});
		});	

	
}

exports.rnRank = function(req, res, next) {

	var user_id = req.params.user_id;
	var item_id = req.params.item_id;
	var rank = req.params.rank;


	User.findOne({_id: user_id})
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
				      path: 'typology',
				      model: 'typology'
				    }
				  })
		.exec(function(err, user) {

			for (var i = 0, len = user.items.length; i < len; i++) {
				if(user.items[i].item._id == item_id) {
					user.items[i].rank = rank;
				}
			}

			user.save(function(err) {
				if(err) { return next(err) }

				res.json({items: user.items});
			})	

		});
}


exports.rnLike = function(req, res, next) {

	var user_id = req.params.user_id;
	var item_id = req.params.item_id;


	User.findOne({_id: user_id})
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
				      path: 'typology',
				      model: 'typology'
				    }
				  })
		.exec(function(err, user) {

			for (var i = 0, len = user.items.length; i < len; i++) {
				if(user.items[i].item._id == item_id) {
					user.items[i].liked = true;
					user.items[i].disliked = false;
				}
			}

			user.save(function(err) {
				if(err) { return next(err) }

				res.json({items: user.items});
			})	

		});
}

exports.rnDislike = function(req, res, next) {

	var user_id = req.params.user_id;
	var item_id = req.params.item_id;

	console.log("dislinking");


	User.findOne({_id: user_id})
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
				      path: 'typology',
				      model: 'typology'
				    }
				  })
		.exec(function(err, user) {

			for (var i = 0, len = user.items.length; i < len; i++) {
				if(user.items[i].item._id == item_id) {
					user.items[i].liked = false;
					user.items[i].disliked = true;
				}
			}


			user.save(function(err) {
				if(err) { return next(err) }

				res.json({items: user.items});
			})	

		});
}

exports.destroy = function(req, res, next) {
	if(AdminController.auth(req.headers['authorization'])) {
		var item_id = req.params.item_id;
		Item.findByIdAndRemove(item_id, function (err,offer){
	    if(err) { return next(err); }
		    res.send("Success");
		});

	} else {
		res.send("Non Autorizzato.");
	}

}


exports.show = function(req, res, next) {
	if(AdminController.auth(req.headers['authorization'])) {
		var item_id = req.params.item_id;
		Item.findById(item_id)
			.populate('producer')
			.populate('nationality')
			.populate('region')
			.populate('smell')
			.populate('taste')
			.populate('view')
			.populate('typology')
			.populate('vine')
		 	.exec(function (err,offer){
			    if(err) { return next(err); }
				    res.json(offer);
			});

	} else {
		res.send("Non Autorizzato.");
	}

}


exports.createItem = function(req, res, next) {
	if(AdminController.auth(req.headers['authorization'])) {

		Mood.findOne({name: "mood"}) 
			.populate('producers.producer')
			.populate('nationalitys.nationality')
			.populate('regions.region')
			.populate('smells.smell')
			.populate('tastes.taste')
			.populate('views.view')
			.populate('typologys.typology')
			.populate('vines.vine')
		 	.exec(function (err,offer){
			    if(err) { return next(err); }
				   
				res.json(offer);
			});

	} else {
		res.send("Non Autorizzato.");
	}

	
}