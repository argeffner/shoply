import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartIcons from  './CartIcons';
import './styles/myCart.css';

function MyCart() {
  const{cartItems, cartCost, products} = useSelector(st => ({...st}));
    // const cartItems = useSelector(st => st.cartItems);
    // const cartValue = useSelector(st => st.cartValue);
    // const products  = useSelector(st => st.products);
  // pass data into tables 
  const itemData = () => {
    const itemRow = Object.keys(cartItems).map(id => (
     <tr key={id}>
      <td> <Link to={`/products/${id}`} className='aProduct'>{products[id].name}</Link></td>
      <td className="product-price">${products[id].price}</td>
      <td className="cartItem">{cartItems[id]}</td>
      <td> <CartIcons id={id}/> </td>
     </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Number of Items</th>
          <th>Add or Remove items</th>
        </tr>
      </thead>
      <tbody>{itemRow}</tbody>
    </table>
  );
 }
 
 return cartCost === 0 ? (
    <h2 className="noItems">No items in cart</h2>
  ) : (
    <div>
      {itemData()}
      <p className="total">
        Total: ${cartCost}
      </p>
    </div>
  );
}

export default MyCart;