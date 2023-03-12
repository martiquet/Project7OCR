import React from "react";
import Leftarrow from "../assets/leftarrow.svg"
import Rightarrow from "../assets/rightarrow.svg"
import { useState, useEffect } from 'react'



const Slide = ({pictures}) => {
    // Create useState function
    const [index, setIndex] = useState(0);
    const next = () => {
        // If on next pictures, actual index + 1 bigger than pictures lenght come back to index 0
        if (index + 1 > pictures.length - 1)
        setIndex(0)
        else setIndex(index + 1)
    }
    const previous = () => {
        // if on previous pictures, actual index is going bellow first picture go back to last index
        if (index - 1 < 0)
        setIndex(pictures.length - 1)
        else setIndex(index - 1)
    }

    // setIndex 0 by default
    useEffect(() => {
        setIndex(0)
    }, [])
    
    return (
        <div className="slide">
            <img src={pictures[index]} alt="" className="pictures"/> 
            {/* if number of pictures is bigger than 1 : display previous next */}
            {pictures.length > 1 ? (     
            <>
            <img onClick={previous} src={Leftarrow} alt="" className="leftarrow"/>
            <img onClick={next} src={Rightarrow} alt="" className="rightarrow"/>
            </>
            // Other wise dont display
            ) : null }
        </div>
    )
    }

export default Slide