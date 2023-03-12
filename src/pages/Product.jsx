import React from "react";
import {useParams, Navigate} from "react-router-dom";
import Slide from "../components/Slideproduct";
import Productitems from "../components/Product";

// Get product data from json
import Productsdata from "../data.json";

// Create product page
const Product = () => {
  // Get product Id from url params
  const {productId} = useParams();
  // Find product data in json with the same ID
  const singleProduct = Productsdata.find(
    (product) => product.id === productId
  );
  // Check if ID exist otherwise navigate to Notfound
  if (!singleProduct) {
    return <Navigate to="/Notfound"></Navigate>;
  }
  // Product exist = return component
  return (
    <>
      <Slide pictures={singleProduct.pictures} />
      <Productitems product={singleProduct} />
    </>
  );
};

export default Product;
