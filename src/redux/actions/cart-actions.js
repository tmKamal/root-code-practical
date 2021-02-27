export const addToCart = (item) => (dispatch) => {
	dispatch({ type: 'ADD_TO_CART', payload: item });
};

export const toggleCart = () => ({
	type: 'TOGGLE_CART'
});
