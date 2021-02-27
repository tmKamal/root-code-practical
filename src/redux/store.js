import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cart-reducer';

const middleware = [thunk];

const store = createStore(
	CartReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
