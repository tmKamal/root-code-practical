import React from 'react';

const CartItem = ({ item }) => {
	return (
		<div className='col-md-12 mt-5 text-light'>
			<div className='row pl-2 '>
				<div className='col-md-3'>
					<div
						className=''
						style={{
							backgroundImage: `url('${item.details.image}')`,
							width: '80px',
							height: '100px',
							backgroundSize: 'cover'
						}}></div>
					{/* <img src={item.details.image} alt='' height='100px' /> */}
				</div>
				<div className='col-md-6 cart-item-details '>
					<p className='m-0'>{item.name.substring(0, 20)}...</p>
					<p className='m-0 fade-text'>{item.details.type}</p>
					<p className='m-0 fade-text'>quantity: {item.quantity}</p>
				</div>
				<div className='col-md-3 m-auto price'>
					$ {item.details.price * item.quantity}
				</div>
			</div>
		</div>
	);
};
export default CartItem;
