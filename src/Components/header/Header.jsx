import React from "react";
import LoGo from "../../assets/react.svg";
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Shopping</h1>
      <Link to="/login">Login</Link>
      <Link to="/home">Home</Link>
    </header>
  );
};

export default Header;
