import React from "react";
import {useCart} from "../context/Cart";

const Cart = () => {
	const cart = useCart();
	const total = cart.items.reduce((total,item)=> total + item.price,0); 
	return (
		<div className="cart">
			<h1>Cart</h1>
			{cart && cart.items.map((item) =>{
				<li>
					{item.name} :${item.price}
				</li>
			},cart)}
			<h5>Total Bill : ${total}</h5>
		</div>
	);
}
export default Cart;