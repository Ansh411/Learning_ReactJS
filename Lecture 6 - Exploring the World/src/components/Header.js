import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js"; 

const Header = () => {

    const [LoginBtn , setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Offers</li>
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