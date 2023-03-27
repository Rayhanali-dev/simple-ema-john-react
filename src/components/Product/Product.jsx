import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img, price, seller, ratings} = props.product
    return (
        <>
            <div className="product">
                <div className="col">
                    <div className="card">
                    <img src={img} alt="no-img" />
                    <div className="card-body">
                        <h6 className="card-title">{name}</h6>
                        <h5>Price: ${price}</h5>
                        <div className='ratings'>
                            <p>Manufacturer: {seller}</p>
                            <p>Ratings: {ratings} star</p>
                        </div>
                    </div>
                    <div className='cart-btn'>
                        <button>Add to Cart &#128722;</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;