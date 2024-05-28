import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>Quantity: 
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                {item.quantity}
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <div>Total: ${item.price * item.quantity}</div>
        </div>
    );
};

export default CartItem;
