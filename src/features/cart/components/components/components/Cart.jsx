import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { setCartItems } from '../features/cart/cartSlice';
import axios from 'axios';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await axios.get('https://drive.google.com/uc?export=download&id=1fOadeM1liwbUK38z92F0XYugk2jwqK2r');
            dispatch(setCartItems(response.data));
        };

        fetchCartItems();
    }, [dispatch]);

    return (
        <div className="cart">
            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <CartSummary />
        </div>
    );
};

export default Cart;
