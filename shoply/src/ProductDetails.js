import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartIcons from "./CartIcons";
import "./styles/ProductDetails.css";

function ProductDetails() {
  const {id} = useParams();
  const {
      name, 
      price, 
      description, 
      image_url
    } = useSelector(st => ({...st.products[id]}));

    return (
      <div className='bd'>
        <img src={image_url} alt={name} />
        <div className="card-section">
          <div className='nameprice'>
            <h4> {name}: </h4>
            <p> ${price} </p>
          </div>
          <p className="desc">{description}</p>
          <div className='cart'>
          <CartIcons id={id} />
          </div>
        </div>
        <Link to='/' className="link"> back to home page </Link>
      </div>
    )
}

export default ProductDetails;