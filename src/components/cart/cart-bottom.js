import React from 'react';

const CartBottom = ({ items }) => {
	// const total = items.reduce((item, prev) => {
	// 	return (
	// 		prev.details.price * prev.quantity +
	// 		item.details.price * item.quantity
	// 	);
	// });

	const gets = () => {
		let i = items.reduce(
			(accumalatedQUantity, cartItem) =>
				accumalatedQUantity +
				cartItem.quantity * cartItem.details.price,
			0
		);
		return i;
	};
	console.log(gets());

	return (
		<div className='cart-bottom col-md-12 mb-5'>
			<div className='row mt-2 mb-5'>
				<div className='col-md-4'>SUBTOTAL</div>
				<div className='col-md-8 text-right price'>
					$ {gets().toFixed(2)}
				</div>
			</div>
			<button className='btn w-100 checkout-btn'>Checkout</button>
		</div>
	);
};
export default CartBottom;
