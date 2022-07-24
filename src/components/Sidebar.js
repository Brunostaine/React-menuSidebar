import React from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import SidebarItens from "./SidebarItens";

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false);
    };

    return (
        <div className="sidebar" sidebar={active}>
            <FaTimes className="iconeX" onClick={closeSidebar} />
            <div>
                <SidebarItens />
            </div>
        </div>
        
    );
};

export default Sidebar;
