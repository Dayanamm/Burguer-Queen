import React, { Fragment } from "react";
import "./ListChef.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');

class PersonChef extends React.Component {

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
                <button className="Chef-name" onClick={() => this.kitchen()}>{this.props.person}</button>
            </Fragment>
        );
    }

    kitchen() {
        this.setState({ redirect: "/kitchen" })
    }
}
export default PersonChef;