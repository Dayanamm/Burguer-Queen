import React, { Fragment } from "react";
import WoodLogo from "../woodLogo/WoodLogo";
import "./Chef.scss";
import ListChef from "../listChef/ListChef";
import BackButton from "../backButton/BackButton";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class ChefOption extends React.Component {

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
                    <WoodLogo />
                    <div className="Options-chef">
                        <div className="PersonChef">
                            <ListChef person="Yara Greyjoy" />
                            <ListChef person="Melisandre Red" />
                        </div>
                        <div className="Button-back">
                            <BackButton path="/" />
                        </div>
                    </div>
                </div >
            </div>
        );
    }
    home() {
        this.setState({ redirect: "/" })
    }

}
export default ChefOption;
