var uuid = require('uuid');

module.exports = (state = [], action) => {
	switch(action.type) {

		case 'SET_ITEMS': 
			return action.items;


		case 'LIKE_ITEM':
			for (var i = 0, len = state.length; i < len; i++) {
			  if(state[i].item._id == action.item_id) {
			  	state[i].liked = true;
			  	state[i].disliked = false;
			  }
			}
			return state;

		case 'DISLIKE_ITEM':
			for (var i = 0, len = state.length; i < len; i++) {
			  if(state[i].item._id == action.item_id) {
			  	state[i].disliked = true;
			  	state[i].liked = false;
			  }
			}
			return state;

		case 'RANK_ITEM':
			for (var i = 0, len = state.length; i < len; i++) {
			  if(state[i].item._id == action.item_id) {
			  	state[i].rank = action.rank;
			  }
			}
			return state;			


		default:
			return state;
	}
}