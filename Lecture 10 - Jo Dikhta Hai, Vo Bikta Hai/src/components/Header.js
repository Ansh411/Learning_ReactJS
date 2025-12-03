import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../hooks/useOnlineStatus.js";

const Header = () => {

    const [LoginBtn , setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
                <img className="logo w-34 h-34 cursor-pointer" src={LOGO_URL} alt="BiteNow Logo" />
                <h1 className="text-2xl font-bold tracking-wide hover:text-orange-600 transition cursor-pointer">
                    BiteNow
                </h1>
            </Link>
            <div className="nav-items">
                <ul className="flex items-center gap-8 text-lg font-medium">
                    <li className="hover:text-orange-600 transition">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="hover:text-orange-600 transition"><Link to="/">Home</Link></li>
                    <li className="hover:text-orange-600 transition"><Link to="/about">About</Link></li>
                    <li className="hover:text-orange-600 transition"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-orange-600 transition"><Link to="/grocery">Grocery</Link></li>
                    <li className="hover:text-orange-600 transition"><Link to="/offers">Offers</Link></li>
                    <li className="hover:text-orange-600 transition"><i className="fas fa-cart-shopping"></i></li>
                    <li>
                        <button className="login-btn px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition" onClick={() => LoginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}>{LoginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;