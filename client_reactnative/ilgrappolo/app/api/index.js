var API_URL = 'http://127.0.0.1:5000/v1';

exports.SIGNIN_URL = `${API_URL}/signin`;
exports.SIGNUP_URL = `${API_URL}/signup`;

exports.ITEMS_URL = (user_id) => `${API_URL}/rn/users/${user_id}/items`;
exports.ALL_ITEMS_URL = () => `${API_URL}/rn/users/items`;
exports.LIKE_ITEM_URL = (user_id, item_id) => `${API_URL}/rn/users/${user_id}/items/${item_id}/like`;
exports.DISLIKE_ITEM_URL = (user_id, item_id) => `${API_URL}/rn/users/${user_id}/items/${item_id}/dislike`;
exports.RANK_ITEM_URL = (user_id, item_id, rank) => `${API_URL}/rn/users/${user_id}/items/${item_id}/rank/${rank}`;