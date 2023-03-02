import Productsdata from "../data.json"
import Banner from "../components/Banner"
import {useParams} from "react-router-dom"
import Slide from "../components/Slideproduct"






const Product = () => {
    const {productId} = useParams()
    const product = Productsdata.find((product) => product.id === productId)
    return (
    <Slide />

    )
}

export default Product;