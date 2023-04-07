import React from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart // option 1
    // const {cart} = props.cart // option 2
    console.log(cart);
    

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;

        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }

        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;

    }
    const tax = total*7/100;
    const grandTota = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Oreder Summary</h4>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTota.toFixed(2)}</h6>
            <button onClick={handleClearCart}>Clear Cart <TrashIcon className='trash-icon'></TrashIcon> </button>
            {
                children
            }
        </div>
    );
};

export default Cart;