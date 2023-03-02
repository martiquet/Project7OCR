import React from "react";
import { Link } from "react-router-dom"


const Productcard = (props) => {
    return (
        <article className="product">
        <Link to={`product/${props.product.id}`} className="card__link">
            <div className="thumbnails"> 
                <img src={props.product.cover} className="productImage" alt=""/>
                <div className="titleBackground">
                    <h2 className="productTitle">{props.product.title}
                    </h2>
                </div>
            </div>
        </Link>
        </article>
        
    )
}

export default Productcard
