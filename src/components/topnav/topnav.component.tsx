import React from "react";
import Logo from "../../assets/images/logo.svg";
import Search from "../../assets/images/search.svg";
import Bell from "../../assets/images/bell.svg";
import User from "../../assets/images/user.svg";
import "./topnav.scss";

const Topnav = () => {
    return (
        <div className="topnav">
            <img src={Logo} alt="the official logo of lendsqr" className="topnav-logo"/>
            <div className="search">
                <input type="search" placeholder="Search for anything" />
                <img src={Search} alt="a vector for search" className="search-icon" />
            </div>
            <div className="end">
                <p>Docs</p>
                <img src={Bell} alt="" className="bell" />
                <img src={User} alt="" className="user" />
                <p>Adedeji</p>
            </div>
        </div>
    )
}

export default Topnav;