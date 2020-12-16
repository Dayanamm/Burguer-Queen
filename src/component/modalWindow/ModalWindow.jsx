import React from "react";
import { db } from "../../firebase";
import "./ModalWindow.scss";
import OrderTable from "../orderTable/OrderTable"
import { Redirect } from 'react-router-dom'

const ModalWindowWaiter = (props) => {

    const sendOrder = (order) => {
        db.collection("orderCollection").add(order)
    }

    const trashButton = false;

    return (
        <div className="Window-container">
            <div className="AllspaceModalContainer">
                <div className="Modal-container">
                    <div className="Waiter-name-modal">
                        <p>Mesero: {props.waiterName}</p>
                    </div>
                    <div className="Client">
                        <p> Nombre del cliente: </p>
                        <input type="text" className="Name-client" />
                    </div>
                    <div className="Order">
                        <p>Resumen de pedido</p>
                    </div>
                    <div className="Order-detail-modal">
                        {
                            props.orderList.map(item => (
                                <OrderTable key={item.product} product={item.product} price={item.price} quantity={item.quantity} trash={trashButton} />))
                        }
                    </div>
                    <div className="Buttons-containers">
                        <button onClick={props.closeModal}>Cancelar</button>
                        <button onClick={() => sendOrder({ orderList: props.orderList })} >Confirmar</button>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default ModalWindowWaiter;