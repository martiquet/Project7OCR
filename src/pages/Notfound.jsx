import React from "react";
import {Link} from "react-router-dom"

// Create page Notfound 
const Notfound = () => {
    return (
        <div className="notfound">
            <p className="notfound__number">404</p>
            <p className="oups">Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className="retourner">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Notfound