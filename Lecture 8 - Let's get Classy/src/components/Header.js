import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom"; 

const Header = () => {

    const [LoginBtn , setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/offers">Offers</Link></li>
                    <li><i className="fas fa-cart-shopping"></i></li>
                    <li>
                        <button className="login-btn" onClick={() => LoginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}>{LoginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;