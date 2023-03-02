import React from "react";
import Vector from "../assets/Vectordown.svg"

const Collapse = (props) => {
    return (
        <div className="wrapper">
            <div className="collapse">
                <h2 className="collapse__title"> {props.data.title}
                </h2>
                <img src={Vector} alt="" className="vektor"/>
            </div>
            <div className="collpase">
                <p className="collapse__texte"> {props.data.texte}
                </p>
            </div>
        </div>
    )
}

export default Collapse