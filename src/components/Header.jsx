import React from "react";
import { Link } from "react-router-dom"

import logo from "../assets/Kasalogo.svg"

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                     <img src={logo} alt="logo" className="header__logo" />
                </Link>
            <div>
                <Link className="nav__link" to="/">
                    Accueil
                </Link>
                <Link className="nav__link" to="/About">
                    A propos
                </Link>
            </div>
            </nav>
        </header>
    )
}

export default Header;