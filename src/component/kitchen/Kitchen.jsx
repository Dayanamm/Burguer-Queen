import React from 'react'
import WoodLogo from "../woodLogo/WoodLogo";
import BackButton from "../backButton/BackButton";
import TableState from "./state.png"
import "./Kitchen.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class KitchenOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        };
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Chefs">
                <div className="Intro-body">
                    <div className="Order-state">
                        <WoodLogo />
                        <div className="State-container">
                            <div className="Table-container">
                                <img src={TableState} alt="Tabla de pedidos" className="Table-order" />
                            </div>
                            <div>
                                <BackButton path="/chef" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default KitchenOrder;