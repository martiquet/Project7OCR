import React from "react";

const Titleproduct = ({product}) => {
    const {title , location} = product
    return(
        <div className="titlelocation">
            <h1 className="producttitle">{title}</h1>
            <p className="lieux">{location}</p>
          </div>
    )
}

export default Titleproduct