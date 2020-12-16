import React, { Fragment } from "react";
import "./ListWaiter.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class WaiterPersons extends React.Component {

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
            <Fragment>
                <button className="Waiter-name" onClick={() => this.order()}>{this.props.person}</button>
            </Fragment>
        );
    }

    order() {
        this.setState({ redirect: "/order?waiter=" + this.props.person })
    }
}

export default WaiterPersons;
