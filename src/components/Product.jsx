import React from "react";
import Ratingempty from "../assets/ratingempty.svg"
import Rating from "../assets/ratings.svg"
import Collapse from "../components/Collapse"
import { useNavigate } from "react-router-dom";

const Productitems = (props) => {
    const product=props.product
    
    
    return (
        <div className="productwrapper">
            <div>
                <div className="titlehost">
                    <h1 className="producttitle">{product.title}</h1>
                    <div className="host">
                        <p className="host__name">{product.host.name}</p>
                        <img src={product.host.picture} className="host__image" alt="" />
                    </div>
                </div>
                <p className="lieux">{product.location}</p>
                <div className="wrappertagrat">
                 <div className="taglist">
                    <ul className="listtag">
                        {product.tags.map((tag) => 
                        <li className='tags'> {tag}
                        </li>
                        )}
                    </ul>
                 </div>
                 <div className="ratings">
                    <img src={product.rating >= 1 ? Rating : Ratingempty} alt="" />
                    <img src={product.rating >= 2 ? Rating : Ratingempty} alt="" />
                    <img src={product.rating >= 3 ? Rating : Ratingempty} alt="" />
                    <img src={product.rating >= 4 ? Rating : Ratingempty} alt="" />
                    <img src={product.rating >= 5 ? Rating : Ratingempty} alt="" />
                 </div>
                </div>
            </div>
            
            <div className="wrapper wrapperproduct wrappersingleproduct">
                    <Collapse title="Description" description={product.description} isProduct/>
                    <Collapse layout title="Equipements" description={product.equipments} isProduct/>
            </div>
    </div>
        
    )
}

export default Productitems