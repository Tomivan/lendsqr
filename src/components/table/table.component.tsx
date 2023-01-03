import React, {useEffect, useState} from "react";
import Filter from "../filter/filter.component";
import { Navigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import FilterImage from "../../assets/images/filter.png";
import Dots from "../../assets/images/dots.png";
import View from "../../assets/images/view-details.png";
import Blacklist from "../../assets/images/blacklist.png";
import Activate from "../../assets/images/activate.png";
import "./table.scss";


const Table = () => {
    const [state, setState] = useState<any[]>([]);
    const [navigate, setNavigate] = useState(false);
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)
    
    const displayBox = (e:any) => {
        const box = e.target.parentElement.nextElementSibling
        if (box.classList.contains('none'))  box.classList.remove('none')
        else box.classList.add("none")
    }
    const displayFilter = (e:any) => {
        const filter = e.target.parentElement.nextElementSibling
        if (filter.classList.contains('none'))  filter.classList.remove('none')
        else filter.classList.add("none")
    }
    const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`;
    useEffect(() => {
        fetch(url, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
            .then(
                response => {
                    console.log(response);
                    setState(response)
                    setResult(response);
                })
    },[url])
    if (navigate) return <Navigate to= '/user-general-details' state= {result} />

    return(
        <div className="table">
            <thead>
                <tr>
                    <th onClick={(e) => displayFilter(e)}>Organization<img src={FilterImage} alt="" className="filter" /></th><Filter />
                    <th>Username<img src={FilterImage} alt="" className="filter" /></th>
                    <th>Email<img src={FilterImage} alt="" className="filter" /></th>
                    <th>Phone Number<img src={FilterImage} alt="" className="filter" /></th>
                    <th>Date Joined<img src={FilterImage} alt="" className="filter" /></th>
                    <th>Status<img src={FilterImage} alt="" className="filter" /></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {state && state.map( data => (<tr>
                    <td>{data.orgName}</td>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.createdAt}</td>
                    <td></td>
                    <td><img src={Dots} alt="" className="dots" onClick={(e) => displayBox(e)}/></td>
                    <div className="box none">
                        <p onClick={() => setNavigate(true)}>
                            <img src={View} alt="" className="box-image" />View Details</p>
                        <p><img src={Blacklist} alt="" className="box-image" />Blacklist User</p>
                        <p><img src={Activate} alt="" className="box-image" />Activate User</p>
                    </div>
                </tr>))}
            </tbody>
        </div>
    )
}

export default Table;

// how to separate date from datetime in a table?