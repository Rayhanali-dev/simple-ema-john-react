import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart // option 1
    // const {cart} = props.cart // option 2

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = total*7/100;
    const grandTota = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oreder Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTota.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;