import React from "react";
import Collapse from "./Collapse";
import Ratings from "./Ratings";
import Tags from "./Tag";
import Titleproduct from "./Titleproduct";
import Host from "./Host"

// Creat product component - get data from props
const Productitems = ({product}) => {
  return (
    <div className="productwrapper">
      <div className="wrapperleftright">
        <div className="wrapperleft">
          <Titleproduct product={product}/>
          <div className="wrappertag">
            <div className="taglist">
              <ul className="listtag">
                {/* Get all tags from product data  */}
                {product.tags.map((tag, index) => (
                  <Tags key={index} tag={tag} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapperright">
          <Host product={product.host}/>
          <div className="ratings">
            <Ratings rating={product.rating} />
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
