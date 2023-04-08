import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../../utilities/fakedb';
import { deleteShoppingCart } from '../../../utilities/fakedb';
import { CreditCardIcon } from '@heroicons/react/24/solid'
const Orders = () => {
    const saveCart = useLoaderData();
    const [carts, setCarts] = useState(saveCart)
    console.log(carts);

    const handleRemoveFromCart = (id) => {
        const remainingCart = carts.filter(product => product.id !== id)
        setCarts(remainingCart);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        deleteShoppingCart()
        setCarts([])
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    carts.map(product => <ReviewItem handleRemoveFromCart={handleRemoveFromCart} product={product} key={product.id}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={carts} handleClearCart={handleClearCart}>
                    <Link to={`/checkout`}>
                        <button>Proceed Checkout<CreditCardIcon className='trash-icon'></CreditCardIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;