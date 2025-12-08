// import { useContext, useState } from "react";
// import { LOGO_URL } from "../utils/constants.js";
// import { Link } from "react-router-dom"; 
// import useOnlineStatus from "../hooks/useOnlineStatus.js";
// import UserContext from "../utils/UserContext.js";
// import { useSelector } from "react-redux";

// const Header = () => {

//     const [LoginBtn , setLoginBtn] = useState("Login");

//     // const onlineStatus = useOnlineStatus();

//     const {loggedInUser, setUserName} = useContext(UserContext);

//     // Subscribing to the store using a selector

//     const cartItems = useSelector((store) => store.cart.items)

//     return (
//         <div className="header flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
//             <Link to="/" className="flex items-center gap-2">
//                 <img className="logo w-34 h-34 cursor-pointer" src={LOGO_URL} alt="BiteNow Logo" />
//             </Link>
//             <div className="nav-items">
//                 <ul className="flex items-center gap-8 text-lg font-medium">
//                     {/* <li className="hover:text-orange-600 transition">Online Status : {onlineStatus ? "🟢" : "🔴"}</li> */}
//                     <li className="hover:text-orange-600 transition"><Link to="/">Home</Link></li>
//                     <li className="hover:text-orange-600 transition"><Link to="/about">About</Link></li>
//                     <li className="hover:text-orange-600 transition"><Link to="/contact">Contact</Link></li>
//                     <li className="hover:text-orange-600 transition"><Link to="/grocery">Grocery</Link></li>
//                     <li className="hover:text-orange-600 transition"><Link to="/offers">Offers</Link></li>
//           <li className="relative">
//             <Link to="/cart">
//               <i className="fas fa-cart-shopping text-xl"></i>
//               <span className="absolute -top-2 -right-3 bg-red-500 text-white w-4 h-4 text-xs flex items-center justify-center rounded-full">
//                 {cartItems.length}
//               </span>
//             </Link>
//           </li>
//                     <li>
//                         <button className="login-btn px-4 py-0.5 bg-linear-to-r from-amber-600 via-yello-500 to-red-500 text-white cursor-pointer rounded-lg hover:bg-orange-600 transition" onClick={() => LoginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}>{LoginBtn}</button>
//                     </li>
//                     <li className="font-bold">{loggedInUser}</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Header;

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

import {
  Home,
  Info,
  Phone,
  ShoppingBasket,
  Percent,
  Menu,
  X,
  ShoppingCart
} from "lucide-react";

const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">

        {/* -------------------------- LOGO rules --------------------------
            lg: show logo
            md: show logo
            sm: show logo
            xs (<380px): hide logo
        ---------------------------------------------------------------- */}
        <Link to="/" className="flex items-center">
          <img
            src={LOGO_URL}
            alt="BiteNow Logo"
            className="w-33 h-33 cursor-pointer xs:hidden"
          />
        </Link>

        {/* ----------------------- DESKTOP NAV (lg and above) ----------------------- */}
        <ul className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <li><Link className="hover:text-orange-600" to="/">Home</Link></li>
          <li><Link className="hover:text-orange-600" to="/about">About</Link></li>
          <li><Link className="hover:text-orange-600" to="/contact">Contact</Link></li>
          <li><Link className="hover:text-orange-600" to="/grocery">Grocery</Link></li>
          <li><Link className="hover:text-orange-600" to="/offers">Offers</Link></li>

          {/* CART */}
          <li className="relative">
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-3 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </li>

          {/* LOGIN & USERNAME */}
          <li>
            <button
              className="px-4 py-1 bg-linear-to-r from-amber-600 via-yello-500 to-red-500 cursor-pointer text-white rounded-lg"
              onClick={() => setLoginBtn(LoginBtn === "Login" ? "Logout" : "Login")}
            >
              {LoginBtn}
            </button>
          </li>

          <li className="font-bold">{loggedInUser}</li>
        </ul>

        {/* ----------------------- MEDIUM NAV (Icons only: md screens) ----------------------- */}
        <ul className="hidden md:flex lg:hidden items-center gap-6 text-gray-700">
          <Link to="/"><Home className="w-6 h-6" /></Link>
          <Link to="/about"><Info className="w-6 h-6" /></Link>
          <Link to="/contact"><Phone className="w-6 h-6" /></Link>
          <Link to="/grocery"><ShoppingBasket className="w-6 h-6" /></Link>
          <Link to="/offers"><Percent className="w-6 h-6" /></Link>

          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </ul>

        {/* ------------------ MOBILE (hamburger + logo only) ------------------ */}
        <div className="flex md:hidden items-center gap-4">

          {/* CART ICON (still visible) */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-4 h-4 text-xs rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>

          {/* HAMBURGER */}
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* ---------------- MOBILE SLIDE MENU ---------------- */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden">
          <div className="absolute right-0 top-0 w-64 h-full bg-white shadow-xl p-6 flex flex-col gap-7">

            <button onClick={() => setMobileMenuOpen(false)} className="self-end">
              <X className="w-7 h-7" />
            </button>

            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/grocery" onClick={() => setMobileMenuOpen(false)}>Grocery</Link>
            <Link to="/offers" onClick={() => setMobileMenuOpen(false)}>Offers</Link>

            <button
              className="px-4 py-2 mt-4 bg-linear-to-r from-amber-600 via-yello-500 to-red-500 cursor-pointer text-white rounded-lg"
              onClick={() => setLoginBtn(LoginBtn === "Login" ? "Logout" : "Login")}
            >
              {LoginBtn}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

