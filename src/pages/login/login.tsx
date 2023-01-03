import React from "react";
import Logo from "../../assets/images/logo.svg";
import Pablo from "../../assets/images/pablo.svg";
import Form from "../../components/form/form.component";
import "./login.scss";

const Login = () => {
    return(
        <div className="login-page">
            <div className="login-left">
                <img src={Logo} alt="The official logo of lendsqr" className="logo" />
                <img src={Pablo} alt="" className="login-image"/>
            </div>
            <Form />
        </div>
    )
}

export default Login;