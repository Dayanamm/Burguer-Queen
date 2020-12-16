import React, { Fragment } from 'react';
import "./BackButton.scss";
import { Redirect } from 'react-router-dom'
class BackPreviousPage extends React.Component {

    path = "";

    constructor(props) {
        super(props)
        this.path = props.path
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
                <div className="Back-button-container">
                    <button className={`Back-button ${'/chef' ? "background-color" : "#eb5a44"}`} onClick={() => this.goTo(this.path)}> Volver </button>
                </div>
            </Fragment>
        );
    }

    goTo(path) {
        this.setState({ redirect: path })
    }
}
export default BackPreviousPage;