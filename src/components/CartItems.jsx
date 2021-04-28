import React from 'react'
import '../components/CartItems.css';
import CartItem from './CartItem';

function CartItems() {
    return (
        <div className="CartItems">
            <h1>Shoping Cart</h1>
            <hr></hr>
            <div className="CartItems-items">
                <CartItem/>
            </div>
        </div>
    )
}

export default CartItems
