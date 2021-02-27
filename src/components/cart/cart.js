import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartBottom from './cart-bottom';
import CartIcon from './cart-icon';
import CartItem from './cart-item';

const Cart = () => {
	const cart = useSelector((state) => state);
	const items = cart.cartItems;
	const hidden = cart.hidden;
	const dispatch = useDispatch();
	return (
		<div className='cart' style={{ width: hidden ? '0px' : '400px' }}>
			<button
				className='close-button'
				onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
				×
			</button>

			<div className='row'>
				<div className='col-md-12 text-light'>
					<CartIcon /> BAG
				</div>
				{items.map((item, idx) => {
					return <CartItem item={item} key={idx} />;
				})}
			</div>
			{items.length > 0 && <CartBottom items={items} />}
		</div>
	);
};

export default Cart;
