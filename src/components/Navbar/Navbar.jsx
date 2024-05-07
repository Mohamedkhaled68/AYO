import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                {/* left */}
                <Link to={"/"} className="logo">
                    <h1>Market</h1>
                </Link>
                {/* Center */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact US</NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Right */}
                <div className="nav-right">
                    <button>BUY AYO+</button>
                    <FiShoppingCart color="#000"  size={28}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
