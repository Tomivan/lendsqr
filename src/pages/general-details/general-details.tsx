import React from "react";
import { Link }  from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.component";
import Topnav from "../../components/topnav/topnav.component";
import Avatar from "../../assets/images/avatar.png";
import Star from "../../assets/images/star.png";
import Starred from "../../assets/images/starred.png";
import "./general-details.scss"

const Details = () => {
    // const data = props.location.state;
    // const id = data.id
    return(
        <div className="users-details">
            <Topnav />
            <Sidebar />
            <div className="users">
                <Link to="/dashboard" className="link">Back to Users</Link>
                <div className="user-details">
                    <h3>User Details</h3>
                    <div className="buttons">
                        <button className="blacklist">BLACKLIST USER</button>
                        <button className="activate">ACTIVATE USER</button>
                    </div>
                </div>
                <div className="container">
                   <div className="top">
                        <div className="avatar">
                            <img src={Avatar} alt="A vector of a person in a circle" />
                            <div className="info">
                                <p>Grace Effiom</p>
                                <p>LSQFf587g90</p>
                            </div>
                        </div>
                        <hr />
                        <div className="middle">
                            <p>User's Tier</p>
                            <div className="stars">
                                <img src={Starred} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div className="right">
                            <p>#200,000</p>
                            <p>9912345678 Polaris Bank</p>
                        </div>
                   </div> 
                   <div className="heading">
                        <p>General Details</p>
                        <p>Documents</p>
                        <p>Bank Details</p>
                        <p>Loans</p>
                        <p>Savings</p>
                        <p>App and System</p>
                   </div>
                </div>
                <div className="information">
                    <div className="personal">
                        <p><span>Personal Information</span></p>
                        <div className="personal-info">
                            <div className="info">
                                <p>FULL NAME</p>
                                <p>Grace Effiom</p>
                            </div>
                            <div className="info">
                                <p>PHONE NUMBER</p>
                                <p>07060780922</p>
                            </div>
                            <div className="info">
                                <p>EMAIL ADDRESS</p>
                                <p>grace@gmail.com</p>
                            </div>
                            <div className="info">
                                <p>BVN</p>
                                <p>07060780922</p>
                            </div>
                            <div className="info">
                                <p>GENDER</p>
                                <p>Female</p>
                            </div>
                            <div className="info">
                                <p>MARITAL STATUS</p>
                                <p>Single</p>
                            </div>
                            <div className="info">
                                <p>CHILDREN</p>
                                <p>None</p>
                            </div>
                            <div className="info">
                                <p>TYPE OF RESIDENCE</p>
                                <p>Parent's Apartment</p>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <p><span>Education and Information</span></p>
                        <div className="education-info">
                            <div className="info">
                                <p>LEVEL OF EDUCATION</p>
                                <p>Bsc</p>
                            </div>
                            <div className="info">
                                <p>EMPLOYMENT STATUS</p>
                                <p>employed</p>
                            </div>
                            <div className="info">
                                <p>SECTOR OF EMPLOYMENT</p>
                                <p>Fintech</p>
                            </div>
                            <div className="info">
                                <p>DURATION OF EMPLOYMENT</p>
                                <p>2 years</p>
                            </div>
                            <div className="info">
                                <p>OFFICE EMAIL</p>
                                <p>grace@lendsqr.com</p>
                            </div>
                            <div className="info">
                                <p>MONTHLY INCOME</p>
                                <p>200000</p>
                            </div>
                            <div className="info">
                                <p>LOAN REPAYMENT</p>
                                <p>40,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <p><span>Socials</span></p>
                        <div className="social-info">
                            <div className="info">
                                <p>TWITTER</p>
                                <p>@grace_effiom</p>
                            </div>
                            <div className="info">
                                <p>FACEBOOK</p>
                                <p>Grace Effiom</p>
                            </div>
                            <div className="info">
                                <p>INSTAGRAM</p>
                                <p>@grace_effiom</p>
                            </div>
                        </div>
                    </div>
                    <div className="guarantor">
                        <p><span>Guarantor</span></p>
                        <div className="guarantor-info">
                            <div className="info">
                                <p>FULL NAME</p>
                                <p>Debby Ogana</p>
                            </div>
                            <div className="info">
                                <p>PHONE NUMBER</p>
                                <p>0829240</p>
                            </div>
                            <div className="info">
                                <p>EMAIL ADDRESS</p>
                                <p>grace@lendsqr.com</p>
                            </div>
                            <div className="info">
                                <p>RELATIONSHIP</p>
                                <p>Sister</p>
                            </div>
                        </div>
                    </div> 
                    <div className="guarantor-info">
                        <div className="info">
                            <p>FULL NAME</p>
                            <p>Debby Ogana</p>
                        </div>
                        <div className="info">
                            <p>PHONE NUMBER</p>
                            <p>0829240</p>
                        </div>
                        <div className="info">
                            <p>EMAIL ADDRESS</p>
                            <p>grace@lendsqr.com</p>
                        </div>
                        <div className="info">
                            <p>RELATIONSHIP</p>
                            <p>Sister</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;