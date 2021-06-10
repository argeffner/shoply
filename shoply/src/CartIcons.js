import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import {FaCartPlus, FaCartArrowDown} from 'react-icons/fa';
import './styles/CartIcons.css'; 

function CartIcons({id}) {
    const dispatch = useDispatch();
    const add = () => dispatch(addToCart(id));
    const remove = () => dispatch(removeFromCart(id));

    return (
        <div>
          <FaCartPlus onClick={add} size={50} id="plus" className='carticon'/>
          <FaCartArrowDown onClick={remove} size={50} id="minus" className='carticon'/>
        </div>
    )
}

export default CartIcons;