import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Cart = ({data,click}) => {
    const {img,name,price} =data;
    
    

    
    return (
        <div className='cart-container'>
           
            {/* one */}
            {/* <div className="single-cart"> */}
     
            <div className="card">
            <img src={img} className="card-img card-img-top mx-auto pt-2" alt="..."></img>
            <div className="card-body">
            <h5 className="card-title fw-bolder">{name}</h5>
            <p className="card-text">মূল্য: {price} টাকা</p>
            <button onClick={() => click(data)} href="#" className="btn add-btn">জমা করুন <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div> 
            </div>
            {/* </div> */}
            
            
        </div>
        
    );
};

export default Cart;