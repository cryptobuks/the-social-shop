const passport = require('passport');
const express = require('express');
var path = require('path');
const config = require('../config')
const AuthenticationController = require('../controllers/authentication_controller');
const ItemsController = require('../controllers/itemsController');
const UsersController = require('../controllers/usersController');
const AdminController = require('../controllers/adminController');
var passportService = require('./passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});

var router = express.Router();

router.route('/rn/users/items')
	.get(requireAuth, ItemsController.rnIndexAll);

router.route('/rn/users/:user_id/items')
	.get(requireAuth, ItemsController.rnIndex);

router.route('/rn/users/:user_id/items/:item_id/like')
	.get(requireAuth, ItemsController.rnLike);

router.route('/rn/users/:user_id/items/:item_id/dislike')
	.get(requireAuth, ItemsController.rnDislike);

router.route('/rn/users/:user_id/items/:item_id/rank/:rank')
	.get(requireAuth, ItemsController.rnRank);



// var needsGroup = function(group) {
//   return function(req, res, next) {
//     if (req.user && req.user.group === group)
//       next();
//     else
//       res.send(401, 'Unauthorized');
//   };
// };
// router.route('/admin/signin')
//   .post(requireLogin, needsGroup('admin'), AuthenticationController.signin);



router.route('/signup')
	.post(AuthenticationController.signup);




router.route('/signin')
	.post(requireLogin, AuthenticationController.signin);


router.post('/admin', AdminController.index);


router.post('/items', ItemsController.create);

router.get('/items', ItemsController.index);

router.get('/items/create', ItemsController.createItem);

router.delete('/items/:item_id', ItemsController.destroy);

router.get('/items/:item_id', ItemsController.show);



router.get('/users', UsersController.index);

router.get('/users/:user_id', UsersController.show);

router.post('/users/:user_id/:item_id', UsersController.storeItem);



module.exports = router;