import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";
import './styles/Products.css'

function Products() {
    const products = useSelector(st => st.products);
    const prodContainer = Object.keys(products).map(id => (
        <div key={id}>
          <div className="container">
            <h3>
              <Link to={`/products/${id}`} className='prodLink'>
                {products[id].name}
              </Link>
            </h3>
            <img src={products[id].image_url} alt={products[id].name} 
            style={{position: 'relative', left: "5px", height: '250px'}}/>
            <CartIcons id={id}/>
          </div>
        </div>
    ))

    return (
        <div>
          <h2 className="i-name"> Here are the products</h2>
          <div className="mainP">
          {prodContainer}
          </div>
        </div>
    )
}

export default Products;