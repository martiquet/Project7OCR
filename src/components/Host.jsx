import React from "react";

const Host = ({product}) => {
    const {name, picture} = product
    return (
        <div className="host">
            <p className="host__name">{name}</p>
            <img src={picture} className="host__image" alt="" />
          </div>
    )
}

export default Host