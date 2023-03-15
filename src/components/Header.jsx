import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/Kasalogo.svg";

const Header = () => {
  return (
    <header>
      <nav className="wrapper__logo">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
      </nav>
      <nav className="wrapper__nav">
        <NavLink className={({isActive}) => isActive ? "nav__active" : "nav__link"} to="/">
          Accueil
        </NavLink>
        <NavLink className={({isActive}) => isActive ? "nav__active" : "nav__link"} to="/About">
          A propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
