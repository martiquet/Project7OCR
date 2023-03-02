import Productsdata from "../data.json"
import {useParams} from "react-router-dom"
import Slide from "../components/Slideproduct"
import React from "react"
import Notfound from "../pages/Notfound"






const Product = () => {
    const {productId} = useParams()
    const product = Productsdata.find((product) => product.id === productId)

    if (!product) {
        return(
            <Notfound/>
        )
    }
    return (
    <Slide pictures={product.pictures}/>
        
    )
}

export default Product;