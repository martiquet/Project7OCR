import React from "react";
import { Link } from "react-router-dom"


const Productcard = (props) => {
    const product = props.product
    return (
        <article className="product">
        <Link to={`product/${product.id}`} className="card__link">
            <div className="thumbnails"> 
                <img src={product.cover} className="productImage" alt=""/>
                <div className="titleBackground">
                    <h2 className="productTitle">{product.title}
                    </h2>
                </div>
            </div>
        </Link>
        </article>
        
    )
}

export default Productcard
