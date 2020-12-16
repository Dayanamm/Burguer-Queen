import React from 'react';
import OrderTable from "../orderTable/OrderTable"
import "./OrderDetail.scss";
import { Redirect } from 'react-router-dom'

class OrderDetail extends React.Component {


    constructor(props) {

        super(props)
        this.state = {
            displayModal: this.props.displayModal,
            redirect: false,
            orderList: this.props.orderList,
            deleteToOrder: this.props.deleteToOrder,
            trash: true,
        };
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (

            <div className="Order-detail-container">
                <div className="Order-products-container">
                    {
                        this.state.orderList.map(item => (
                            <OrderTable key={item.product} product={item.product} price={item.price} quantity={item.quantity} deleteToOrder={this.state.deleteToOrder} trash={this.state.trash} />))
                    }
                </div>
                <div className="Order-total-container">
                    <div>Total </div>
                    <div>
                        ${this.props.total}
                    </div>

                </div>
                <div className="Submit-container">
                    <button className="Submit-order" onClick={this.state.displayModal}>Enviar a cocina</button>
                </div >
            </div >

        )
    }
    OrderState() {
        this.setState({ redirect: "/order-state" })
    }

}
export default OrderDetail;