import React from 'react';
import { db } from "../../firebase";
import Breakfast from "../menuQueenBreakfast/MenuQueenBreakfast"
import "./OrderTable.scss";

const OrderTable = ({ orderList }) => {

    const addProduct = () => {
        console.log("Producto")
    }

    return (
        <div>
            {
                orderList.map(item => (
                    <div className="ItemTableContainer">
                        <div className="Product">
                            <p>Producto  </p>
                        </div>
                        <div className="Quantity">
                            <p>1</p>
                        </div>
                        <div className="Price">
                            <p>...$5</p>
                        </div>
                    </div>))
            }
        </div>

    )
}
export default OrderTable;