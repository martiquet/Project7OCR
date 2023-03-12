import React from "react";
import Ratingempty from "../assets/ratingempty.svg";
import Rating from "../assets/ratings.svg";
import Collapse from "./Collapse";

// Creat product component - get data from props
const Productitems = (props) => {
  const product = props.product;

  return (
    <div className="productwrapper">
      <div className="wrapperleftright">
        <div className="wrapperleft">
          <div className="titlelocation">
            <h1 className="producttitle">{product.title}</h1>
            <p className="lieux">{product.location}</p>
          </div>
          <div className="wrappertag">
            <div className="taglist">
              <ul className="listtag">
                {/* Get all tags from product data  */}
                {product.tags.map((tag) => (
                  <li key={tag} className="tags">
                    {" "}
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapperright">
          <div className="host">
            <p className="host__name">{product.host.name}</p>
            <img src={product.host.picture} className="host__image" alt="" />
          </div>
          <div className="ratings">
            {/* Ask for each pictures the value of rating in product data */}
            <img src={product.rating >= 1 ? Rating : Ratingempty} alt="" />
            <img src={product.rating >= 2 ? Rating : Ratingempty} alt="" />
            <img src={product.rating >= 3 ? Rating : Ratingempty} alt="" />
            <img src={product.rating >= 4 ? Rating : Ratingempty} alt="" />
            <img src={product.rating >= 5 ? Rating : Ratingempty} alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper wrapperproduct wrappersingleproduct">
        <Collapse
          title="Description"
          description={product.description}
          isProduct
        />
        <Collapse
          layout
          title="Equipements"
          description={product.equipments}
          isProduct
        />
      </div>
    </div>
  );
};

export default Productitems;
