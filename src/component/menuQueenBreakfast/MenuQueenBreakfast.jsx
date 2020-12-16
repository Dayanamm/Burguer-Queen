import React, { useState } from 'react'
import Menu from "../../menu.json";
import "./MenuQueenBreakfast.scss";


const MenuQueenBreakfast = ({ addToOrder }) => {

    const initialStateProduct = {
        product: " ",
        price: " "
    };
    const [product, setProduct] = useState(initialStateProduct);

    const orderDetailChange = eventAfterChange => {
        const { product, price } = eventAfterChange.target.dataset;
        setProduct(product, price);
        addToOrder(product, price);
    }

    return (
        <div>
            <div className="Items-container">
                {
                    Menu.queenBreakfast.bebidas.map(item => (
                        <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>{item.product}-{item.price} </button>
                    ))
                }
                {
                    Menu.queenBreakfast.sandwich.map(item => (
                        <button className="Item" onClick={orderDetailChange} data-product={item.product} data-price={item.price}>{item.product}-{item.price} </button>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuQueenBreakfast;