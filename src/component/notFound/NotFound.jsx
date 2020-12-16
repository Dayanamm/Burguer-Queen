import React from "react";
import logo from "./Hamburguesita.png";
import "./NotFound.scss";

function NotFound() {
    return (
        <div className="Intro-body">
            <div className="Not-found">
                <p>404 - Not Found</p>
                <img src={logo} className="Burguer-logo" alt="Hamburguesita" />
                <p>Perdiste tu hamburguesa.</p>
            </div>
        </div >
    );
}

export default NotFound;