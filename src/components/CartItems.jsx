import React from 'react'
import '../components/CartItems.css';
import CartItem from './CartItem';

function CartItems({items}) {

    return (
        <div className="CartItems">
            <h1>Shoping Cart</h1>
            <hr></hr>
            <div className="CartItems-items">
                {items.map((item, i) => <CartItem key={i} item={item}/>)}
            </div>
        </div>
    )
}

export default CartItems
