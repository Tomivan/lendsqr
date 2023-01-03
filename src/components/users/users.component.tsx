import React from "react";
import User from "../../assets/images/users.png";
import Active from "../../assets/images/active.png";
import Loans from "../../assets/images/user-loans.png";
import Savings from "../../assets/images/user-savings.png";
import "./users.scss"

const Users = () => {
    return(
        <div className="users-card">
            <div className="card">
                <img src={User} alt="" className="card-icon" />
                <h3>USERS</h3>
                <p>2453</p>
            </div>
            <div className="card">
                <img src={Active} alt="" className="card-icon" />
                <h3>ACTIVE USERS</h3>
                <p>2453</p>
            </div>
            <div className="card">
                <img src={Loans} alt="" className="card-icon" />
                <h3>USERS WITH LOANS</h3>
                <p>2453</p>
            </div>
            <div className="card">
                <img src={Savings} alt="" className="card-icon" />
                <h3>USERS WITH SAVINGS</h3>
                <p>2453</p>
            </div>
        </div>
    )
}

export default Users;