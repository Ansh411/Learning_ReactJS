import { LOGO_URL } from "../utils/constants.js"; 

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;