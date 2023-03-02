import React from "react";
import Vector from "../assets/Vectordown.svg"
import { useState } from 'react'


const Collapse = (props) => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
  setOPen(!open);
};
    return (
        <div className="wrapper">
            <div onClick={toggle} className="collapse collapsefirst">
                <h2 className="collapse__title"> {props.data.title}
                </h2>
                <img src={Vector} alt="" className={`vektor ${open ? "openvektor" : ""}`}/>
            </div>
            { open && (
            <div className="collpase">
                <p className={`collapse__texte ${open ? "opentexte" : ""}`}> {props.data.texte}
                </p>
            </div>
            )}
        </div>
    )
}

export default Collapse