import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './component/Route'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios';


const counterReducer = (state = { username: '', wishlist: [] }, action) => {
    switch (action.type) {
        case 'gantiUsername':
            return {
                ...state,
                username: action.newValue
            }
        case 'gantiWishlist':
            return {
                ...state, 
                wishlist: action.newValue 
            }
        default:
            return state
        }
    }
            
let store = createStore(counterReducer)

store.subscribe(() => {
   axios.put('http://localhost:4000/wishlist', {
       "username": store.getState().username,
       "wishlist": store.getState().wishlist
   }).then( res => console.log(res)).catch( err => console.log(err)) 
})

ReactDOM.render(
  <Provider store={store}>
    <Route/>
  </Provider>,
  document.getElementById('root')
);
