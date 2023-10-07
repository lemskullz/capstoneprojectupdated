
import React from "react";
import LoGo from "../../assets/react.svg";
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = ({token, setToken}) => {
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    // navigate("/")
}
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Shopping</h1>
      {
                token ?
                <Link onClick={handleLogout} to="/">Logout</Link>
                :
                <Link to="/login">
                    
                    Login
                </Link>

            }

      <Link to="/">Home</Link>
    </header>
  );
};

export default Header;
