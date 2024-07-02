// Components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

// Icon imports
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GiWallet } from "react-icons/gi";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Navbar = ({ onLogout }) => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <TbLayoutDashboardFilled />
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <MdOutlineRoundaboutRight />
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <GiWallet />
                    <Link to="/wallet">Wallet</Link>
                </li>
                <li>
                    <FaHistory />
                    <Link to="/history">History</Link>
                </li>
                <li>
                    <button onClick={onLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
