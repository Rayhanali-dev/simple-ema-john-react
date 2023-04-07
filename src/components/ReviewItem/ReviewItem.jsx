import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'


const ReviewItem = (props) => {
    console.log(props.product);
    const handleRemoveFromCart = props.handleRemoveFromCart
    const {img, name, id, price, quantity} = props.product;
    return (
        <div className='review-item'>
            <div className='review-img-info'>
                <div className='item-img'>
                    <img src={img} alt="img" />
                </div>
                <div className='item-info'>
                    <h4>{name}</h4>
                    <p>price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <div>
                <span onClick={() => handleRemoveFromCart(id)}>
                    <TrashIcon className='trash-iocn'></TrashIcon>
                </span>
            </div>
        </div>
    );
};

export default ReviewItem;