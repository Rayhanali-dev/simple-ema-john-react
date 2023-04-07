import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const addToCart = (product) => {
        const exists = cart.find((pd) => pd.id === product.id);
        let newCart = [];
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            product.quantity = product.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    useEffect(() => {
        const storeCart = getShoppingCart();
        const savedCart = [];

        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);

            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

    }, [products])

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to={`/orders`}>
                        <button>Review Order <ArrowRightIcon className='trash-icon'></ArrowRightIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;