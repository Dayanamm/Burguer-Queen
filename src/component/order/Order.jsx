import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import MenuJson from "../../menu.json";
import MenuQueenBreakfast from "../menuQueenBreakfast/MenuQueenBreakfast";
import MenuQueenLunch from "../menuQueenLunch/MenuQueenLunch";
import OrderDetail from "../orderDetail/OrderDetail"
import ModalWindowWaiter from "../modalWindow/ModalWindow"
import "./Order.scss";
import { Redirect, useLocation } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ClientOrder extends React.Component {

    constructor(props) {
        super(props)
        let query = new URLSearchParams(this.props.location.search);
        this.state = {
            redirect: false,
            showBreakfast: true,
            showLunch: false,
            showModal: false,
            showOrder: [],
            orderList: [],
            waiterName: query.get("waiter"),
            total: 0
        };
        this.addToOrder = this.addToOrder.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.deleteToOrder = this.deleteToOrder.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Waiters">
                <div className="Intro-body">
                    <WoodLogo />
                    <div className="Menu-buttons">
                        <div className="Buttons-container">
                            <button className="OptionMenu" onClick={() => this.displayBreakfast()}>Queen breakfast</button>
                            <button className="OptionMenu" onClick={() => this.displayLunch()}>Queen Lunch</button>
                        </div>
                        {
                            this.state.showBreakfast ?
                                <div>
                                    <MenuQueenBreakfast updateItemProducts={this.updateProduct} addToOrder={this.addToOrder} />
                                </div>
                                : null
                        }
                        {
                            this.state.showLunch ?
                                <div>
                                    <MenuQueenLunch updateItemProducts={this.updateProduct} addToOrder={this.addToOrder} />
                                </div>
                                : null
                        }
                        <div>
                            <BackButton path="/waiter" />
                        </div>
                    </div>

                    <div className="Total-order">
                        <OrderDetail displayModal={this.displayModal} orderList={this.state.orderList} total={this.state.total} deleteToOrder={this.deleteToOrder} />
                    </div>
                    {
                        this.state.showModal ?
                            <div className="Prueba">
                                <ModalWindowWaiter orderList={this.state.orderList} total={this.state.total} waiterName={this.state.waiterName} closeModal={this.closeModal} />
                            </div>
                            : null
                    }
                </div>
            </div>
        );
    }
    displayBreakfast() {
        this.setState({
            showBreakfast: true,
            showLunch: false,
            showModal: false
        })
    }
    displayLunch() {
        this.setState({
            showLunch: true,
            showBreakfast: false,
            showModal: false
        })
    }
    displayModal() {

        this.setState({
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    addToOrder(product, price) {
        let total = this.state.total;
        let _order = this.state.orderList;
        let item = _order.find(o => o.product === product);
        if (item) {
            item.quantity++;
            total += parseInt(item.price);
        } else {
            _order.push({ product: product, price: price, quantity: 1 })
            total += parseInt(price);
        }
        this.setState({
            orderList: _order,
            total: total
        });
    }

    deleteToOrder(product, price) {
        let total = this.state.total;
        let _order = this.state.orderList;
        let item = _order.find(o => o.product === product);
        if (item.quantity >= 2) {
            item.quantity--;
            total -= parseInt(item.price);
        } else {
            for (let i = 0; i < _order.length; i--) {
                if (_order[i].product === product) {
                    _order.splice(i, 1);
                    total -= parseInt(price);
                    break;
                }

            }
        }
        this.setState({
            orderList: _order,
            total: total
        });
    }


    home() {
        this.setState({ redirect: "/" })
    }
}
export default ClientOrder;