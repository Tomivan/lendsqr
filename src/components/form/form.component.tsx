import React from "react";
import { Link } from "react-router-dom";
import "./form.scss";

const Form = () => {
    return(
        <div className="form-component">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form className="form">
                <input type="email" placeholder="Email" required/>
                <div className="password">
                    <input type="password" placeholder="Password" required/>
                    <span>SHOW</span>
                </div>
                <Link to="#" className="link">FORGOT PASSWORD?</Link>
                <button className="login-button">LOG IN</button>
            </form>
        </div>
    )
}

export default Form;