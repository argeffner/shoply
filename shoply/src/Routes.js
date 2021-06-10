import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import Products from './Products';
import ProductDetails from './ProductDetails'
import MyCart from './MyCart';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Products/>
      </Route>
      <Route path='/products/:id' exact>
        <ProductDetails/>
      </Route>
      <Route path='/cart' exact>
        <MyCart/>
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}

export default Routes;