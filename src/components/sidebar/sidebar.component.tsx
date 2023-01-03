import React from "react";
import Audit from "../../assets/images/audit.png";
import Coins from "../../assets/images/coins.png";
import Home from "../../assets/images/home.png";
import Karma from "../../assets/images/karma.png";
import Loans from "../../assets/images/loans.png";
import Models from "../../assets/images/models.png";
import Organisers from "../../assets/images/organisers.png";
import Organization from "../../assets/images/organization.png";
import Preferences from "../../assets/images/preferences.png";
import Pricing from "../../assets/images/pricing.png";
import Products from "../../assets/images/products.png";
import Reports from "../../assets/images/reports.png";
import Requests from "../../assets/images/requests.png";
import Savings from "../../assets/images/savings.png";
import Service from "../../assets/images/service.png";
import Services from "../../assets/images/services.png";
import Settlements from "../../assets/images/settlements.png";
import Transactions from "../../assets/images/transactions.png";
import User from "../../assets/images/user.png";
import Whitelist from "../../assets/images/whitelist.png";
import "./sidebar.scss";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li><img src={Organization} alt="" className="sidebar-icon"/>Switch Organizations</li>
                <li><img src={Home} alt="" className="sidebar-icon" />Dashboard</li>
                <p>CUSTOMERS</p>
                <li><img src={User} alt="" className="sidebar-icon" />Users</li>
                <li><img src={Organisers} alt="" className="sidebar-icon" />Guarantors</li>
                <li><img src={Loans} alt="" className="sidebar-icon" />Loans</li>
                <li><img src={Models} alt="" className="sidebar-icon" />Decision Models</li>
                <li><img src={Savings} alt="" className="sidebar-icon" />Savings</li>
                <li><img src={Requests} alt="" className="sidebar-icon" />Loan Requests</li>
                <li><img src={Whitelist} alt="" className="sidebar-icon" />Whitelist</li>
                <li><img src={Karma} alt="" className="sidebar-icon" />Karma</li>
                <p>BUSINESSES</p>
                <li><img src={Organization} alt="" className="sidebar-icon" />Organizations</li>
                <li><img src={Loans} alt="" className="sidebar-icon" />Loan Products</li>
                <li><img src={Products} alt="" className="sidebar-icon" />Savings Products</li>
                <li><img src={Coins} alt="" className="sidebar-icon" />Fees and Charges</li>
                <li><img src={Transactions} alt="" className="sidebar-icon" />Transactions</li>
                <li><img src={Services} alt="" className="sidebar-icon" />Services</li>
                <li><img src={Service} alt="" className="sidebar-icon" />Service Account</li>
                <li><img src={Settlements} alt="" className="sidebar-icon" />Settlements</li>
                <li><img src={Reports} alt="" className="sidebar-icon" />Reports</li>
                <p>SETTINGS</p>
                <li><img src={Preferences} alt="" className="sidebar-icon" />Preferences</li>
                <li><img src={Pricing} alt="" className="sidebar-icon" />Fee and Pricing</li>
                <li><img src={Audit} alt="" className="sidebar-icon" />Audit Logs</li>
            </ul>
        </div>
    )
}

export default Sidebar;