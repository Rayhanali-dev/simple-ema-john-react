import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const { name, price, img, seller, ratings, id } = props.product;
    const addToCart = props.addToCart;

    return (
        <>
            <div className="product">
                <div className="col">
                    <div className="card">
                        <img src={img ? img : 'no-found'} alt="" />
                        <div className="card-body">
                            <h6 className="card-title">{name}</h6>
                            <h5>Price: ${price}</h5>
                            <div className='ratings'>
                                <p>Manufacturer: {seller}</p>
                                <p>Ratings: {ratings} star</p>
                            </div>
                        </div>
                        <div className='cart-btn'>
                            <button onClick={() => addToCart(id)}>Add to Cart                 <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;