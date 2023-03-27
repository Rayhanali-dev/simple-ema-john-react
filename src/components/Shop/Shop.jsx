import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data));
    } , [])

    const addToCart = (id) => {
        console.log('product added to cart', id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }

            </div>
            <div className="cart-container">
                <h4>Oreder Summary</h4>
            </div>
        </div>
    );
};

export default Shop;