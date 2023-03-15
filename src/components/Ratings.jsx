import React from "react";
import Ratingempty from "../assets/ratingempty.svg";
import Rating from "../assets/ratings.svg";


const Ratings = ({rating}) => {
    
    return (
        <div className="ratings">
            {/* Ask for each pictures the value of rating in product data */}
            <img src={rating >= 1 ? Rating : Ratingempty} alt="" />
            <img src={rating >= 2 ? Rating : Ratingempty} alt="" />
            <img src={rating >= 3 ? Rating : Ratingempty} alt="" />
            <img src={rating >= 4 ? Rating : Ratingempty} alt="" />
            <img src={rating >= 5 ? Rating : Ratingempty} alt="" />
          </div>
    )
}

export default Ratings