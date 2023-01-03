import React from "react";
import Sidebar from "../../components/sidebar/sidebar.component";
import Table from "../../components/table/table.component";
import Topnav from "../../components/topnav/topnav.component";
import Users from "../../components/users/users.component";

const Dashboard = () => {
    return(
        <div>
            <Topnav />
            <Sidebar />
            <Users />
            <Table />
        </div>
    )
}

export default Dashboard;