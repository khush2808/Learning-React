import {  createContext ,useState,useContext} from "react";

const CartContext = createContext(null);
export const useCart =()=>{
	const cart =  useContext(CartContext);
	return cart;
}
export const  CartProvider = (props) => {	
	const [count,setCount] = useState([]);
	return (
		<CartContext.Provider value={{count,setCount, name:"Piyush"}}>
			{props.children}
		</CartContext.Provider>
	);
};