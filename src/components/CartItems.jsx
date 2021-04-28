import React from 'react'
import '../components/CartItems.css';
import CartItem from './CartItem';

function CartItems({items, setcartItems}) {

    const changeItemQuantity = (e, index) => {
        const newItems = [...items];
        newItems[index].quantity = e.target.value;
        setcartItems(newItems);
    }

    const deleteItem = (indexToDelete) => {
        const newItems = items.filter((value, index) => {
            return index !== indexToDelete;
        });

        setcartItems(newItems);
    }

    return (
        <div className="CartItems">
            <h1>Shoping Cart</h1>
            <hr></hr>
            <div className="CartItems-items">
                {items.map((item, index) => 
                    <CartItem 
                        index={index}
                        key={index} 
                        item={item}
                        changeItemQuantity={changeItemQuantity}
                        deleteItem={deleteItem}
                        />)}
            </div>
        </div>
    )
}

export default CartItems
