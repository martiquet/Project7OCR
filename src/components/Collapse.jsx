import React from "react";
import Vectordown from "../assets/Vectordown.svg"
import Vectorup from "../assets/Vectorup.svg"
import { useState } from 'react'



const Collapse = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
  setOPen(!open);
};
    return (
        
        <div className="wrapper wrapperabout">
            <div  onClick={toggle} className="collapse collapsefirst ">
                <h2 className={`collapse__title ${props.isProduct ? "collapse__product" : ""}`}> {props.title}
                </h2>
                <img src={open ? Vectorup : Vectordown} alt="" className={`vektor ${open ? "openvektor" : ""}`}/>
            </div>
            { open && (
            <div className={`collapse__content ${props.isProduct ? "description__product" : ""}`}>
                {!Array.isArray(props.description) ? <p className={`collapse__texte ${open ? "opentexte" : ""}`}> {props.description}
                </p> : <ul>
                    {props.description.map((equipements) =>
                        <li key={equipements}> {equipements}
                        </li>
                    )}
                    </ul>}
            </div>
            )}
        </div>
        
    )   
}

export default Collapse