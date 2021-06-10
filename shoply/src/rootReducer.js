import {ADD, REMOVE} from './actionTypes';
import data from './data.json'
import {calcTotal} from './extra'

const DEFAULT = {
    products: data.products,
    cartItems: {},
    cartCost: 0.0
};

function rootReducer(state = DEFAULT, action) {
    switch (action.type) {
      case ADD: {
        const items = {...state.cartItems};
        items[action.id] = (items[action.id] || 0) + 1;
        return {
           ...state, 
           cartItems: items,
           cartCost: calcTotal(state.products, items) 
          };
        }
  
      case REMOVE: {
        const items = {...state.cartItems};
        // in case there is no item
        if (!items[action.id]) {
          return state;
        }
        items[action.id] -- ;
        // delete from list
        if (items[action.id] === 0) {
          delete items[action.id];
        }
        return {
          ...state, 
          cartItems: items,
          cartCost: calcTotal(state.products, items) 
         };
        }
      
      default:
        return state;
    }
  }
  
  export default rootReducer;