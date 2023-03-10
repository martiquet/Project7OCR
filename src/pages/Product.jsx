import Productsdata from "../data.json"
import {useParams} from "react-router-dom"
import Slide from "../components/Slideproduct"
import React from "react"
import Notfound from "../pages/Notfound"
import Productitems from "../components/Product"
import { Navigate } from "react-router-dom"






const Product = () => {
    const {productId} = useParams()
    const singleProduct = Productsdata.find((product) => product.id === productId)
    if (!singleProduct) {
        return(
        <Navigate to="/Notfound"></Navigate>
    )}
    return (
    <>
    <Slide pictures={singleProduct.pictures}/>
    <Productitems product={singleProduct}/>
    </>
    )
}

export default Product;