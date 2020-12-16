import React, { useState } from 'react';
import trashImg from "./basura.png";
import "./OrderTable.scss";
var ReactDOM = require('react-dom');

const OrderTable = ({ product, price, quantity, deleteToOrder, trash }) => {
    const deleteChangeProduct = () => {
        deleteToOrder(product, price);
    }
    return (
        <div>
            {
                <div className="ItemTableContainer">
                    <div className="Product">
                        <p>{product}  </p>
                    </div>
                    <div className="Quantity">
                        <p>{quantity}</p>
                    </div>
                    <div className="Price">
                        <p>...${price}</p>
                    </div>
                    <div>
                        {trash ?
                            <button className="Button-trash" onClick={deleteChangeProduct}>
                                <img src={trashImg} alt="Basura para eliminar productos del pedido" className="trash" />
                            </button>
                            : ''}
                    </div>
                </div>
            }
        </div>)

}
export default OrderTable;