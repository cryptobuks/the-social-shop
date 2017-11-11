import axios from 'axios';
import * as Keychain from 'react-native-keychain';

import {ITEMS_URL, ALL_ITEMS_URL, TODO_URL, LIKE_ITEM_URL, DISLIKE_ITEM_URL, RANK_ITEM_URL} from '../api';

import {addAlert} from './alertsActions';
import {getItems} from './';


exports.rankItem = (item_id, rank) => {
	return function(dispatch) {
		return Keychain.getGenericPassword().then((credentials) => {
			var {username, password} = credentials; //username = user_id, password = token

			return axios.get(RANK_ITEM_URL(username, item_id, rank), {
				headers: {
					authorization: password
				}
			}).then((response) => {
				dispatch(setItems(response.data.items));
			}).catch((err) => {
				dispatch(addAlert("Impossibile votare."));
			})
		})
	}
}



exports.likeItem = (item_id) => {
	return function(dispatch) {
		return Keychain.getGenericPassword().then((credentials) => {
			var {username, password} = credentials; //username = user_id, password = token

			return axios.get(LIKE_ITEM_URL(username, item_id), {
				headers: {
					authorization: password
				}
			}).then((response) => {
				dispatch(setItems(response.data.items));
			}).catch((err) => {
				dispatch(addAlert("Impossibile mettere mi piace."));
			})
		})
	}
}

exports.dislikeItem = (item_id) => {
	return function(dispatch) {
		return Keychain.getGenericPassword().then((credentials) => {
			var {username, password} = credentials; //username = user_id, password = token

			return axios.get(DISLIKE_ITEM_URL(username, item_id), {
				headers: {
					authorization: password
				}
			}).then((response) => {
				dispatch(setItems(response.data.items));
			}).catch((err) => {
				dispatch(addAlert("Impossibile mettere non mi piace."));
			})
		})
	}
}


exports.getItems = function(dispatch) {
	return Keychain.getGenericPassword().then((credentials) => {
		var {username, password} = credentials; //username = user_id, password = token

		return axios.get(ITEMS_URL(username), {
			headers: {
				authorization: password
			}
		}).then((response) => {
			// console.log(response.data);
			dispatch(setItems(response.data.items));
		}).catch((err) => {
			dispatch(addAlert("Impossibile aggiornare."));
		})
	})
}

exports.getAllItems = function(dispatch) {
	return Keychain.getGenericPassword().then((credentials) => {
		var {username, password} = credentials; //username = user_id, password = token

		return axios.get(ALL_ITEMS_URL(), {
			headers: {
				authorization: password
			}
		}).then((response) => {
			// console.log(response.data);
			dispatch(setAllItems(response.data.items));
		}).catch((err) => {
			console.log(err)
			dispatch(addAlert("Impossibile aggiornare."));
		})
	})
}


var setItems = (items) => {
	return {
		type: 'SET_ITEMS',
		items
	}
}

var setAllItems = (allItems) => {
	return {
		type: 'SET_ALL_ITEMS',
		allItems
	}
}


var likedItem = (item_id) => {
	return {
		type: 'LIKE_ITEM',
		item_id
	}
}

var dislikedItem = (item_id) => {
	return {
		type: 'DISLIKE_ITEM',
		item_id
	}
}

var rankItem = (item_id, rank) => {
	return {
		type: 'RANK_ITEM',
		item_id,
		rank
	}
}