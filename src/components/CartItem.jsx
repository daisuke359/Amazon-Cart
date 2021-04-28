import React from 'react';
import '../components/CartItem.css';

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202003_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1583433236838" alt=""/>
            </div>
            <div className="CarItem-info">
                <div className="info-title">
                    <h2>Apple iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select name="" id="">

                        </select>
                    </div>
                    <div className="item-delete">
                        delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                799.99CAD
            </div>
            
        </div>
    )
}

export default CartItem
