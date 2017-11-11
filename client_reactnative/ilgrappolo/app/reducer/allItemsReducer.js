var uuid = require('uuid');

module.exports = (state = [], action) => {
	switch(action.type) {

		case 'SET_ALL_ITEMS': 
			return action.allItems;


		default:
			return state;
	}
}