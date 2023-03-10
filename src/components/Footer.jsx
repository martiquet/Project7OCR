import React from "react";
import LogoFooter from "../assets/Logofooter.svg"

const Footer = () => {
    return (
        <footer>
           <img src={LogoFooter} alt="" className="footer__logo" />
           <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}


export default Footer;