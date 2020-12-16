import React from "react";
import WoodLogo from "../woodLogo/WoodLogo"
import "./Waiter.scss";
import ListWaiter from "../listWaiters/ListWaiter"
import BackButton from "../backButton/BackButton";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class WaiterOption extends React.Component {

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
            <div className="Waiters">
                <div className="Intro-body">
                    <WoodLogo />
                    <div className="Names-Waiters">
                        <div className="PersonWaiter">
                            <ListWaiter person="Ramsay Snow" />
                            <ListWaiter person="Ygritte Snow" />
                            <ListWaiter person="John Snow" />
                            <ListWaiter person="Gendry Baratheon" />
                        </div>
                        <div>
                            <BackButton path="/" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }
}
export default WaiterOption;

