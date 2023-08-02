import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const cartItems = useSelector(store=>store.cart.items);
  return (
    <div>
      <button onClick={()=>handleClearCart()}>ClearCart</button>
      {cartItems.map(item=><FoodCard key={item.id} {...item}/>)}
    </div>
  );
};

export default Cart;