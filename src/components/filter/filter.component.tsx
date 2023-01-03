import React from "react";
import "./filter.scss";

const Filter = () => {
    return(
        <div className="filter none">
            <form className="form">
                <label>Organization</label>
                <select>
                    <option>Select</option>
                </select>
                <label>Username</label>
                <input type="text" placeholder="Username"/>
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Date</label>
                <input type="date" placeholder="Date"/>
                <label>Phone Number</label>
                <input type="number" placeholder="Phone Number" />
                <label>Status</label>
                <select>
                    <option>Select</option>
                </select>
                <div className="buttons">
                    <button className="reset">Reset</button>
                    <button className="filter">Filter</button>
                </div>
            </form>
        </div>
    )
}

export default Filter;