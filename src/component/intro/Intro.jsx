import React, { Fragment } from "react";
import logo from "./Hamburguesita.png";
import WoodLogo from "../woodLogo/WoodLogo"
import "./Intro.scss";
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');


class IntroView extends React.Component {

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
      <div className="Intro-view">
        <div className="Intro-body">
          <WoodLogo hasAnimation={true} />
          <div className="Intro-options">
            <div>
              <button className="Waiter" onClick={() => this.waiter()}>Mesero</button>
            </div>
            <img src={logo} className="Burguer-logo" alt="Hamburguesita" />
            <div>
              <button className="Chef" onClick={() => this.chef()}>
                Jefe de <br></br> cocina
            </button>
            </div>
          </div>
        </div>
      </div >
    );
  }
  waiter() {
    this.setState({ redirect: "/waiter" })
  }
  chef() {
    this.setState({ redirect: "/chef" })
  }
}




export default IntroView;
