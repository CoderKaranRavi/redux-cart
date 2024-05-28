import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
    const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

    return (
        <div className="cart-summary">
            <div>Total Quantity: {totalQuantity}</div>
            <div>Total Amount: ${totalAmount.toFixed(2)}</div>
        </div>
    );
};

export default CartSummary;
