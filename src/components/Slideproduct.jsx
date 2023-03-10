import React from "react";
import Leftarrow from "../assets/leftarrow.svg"
import Rightarrow from "../assets/rightarrow.svg"
import { useState, useEffect } from 'react'



const Slide = ({pictures}) => {
    const [index, setIndex] = useState(0);
    const next = () => {
        if (index + 1 > pictures.length - 1)
        setIndex(0)
        else setIndex(index + 1)
    }
    const previous = () => {
        if (index - 1 < 0)
        setIndex(pictures.length - 1)
        else setIndex(index - 1)
    }

    useEffect(() => {
        setIndex(0)
    }, [])
    
    return (
        <div className="slide">
            <img src={pictures[index]} alt="" className="pictures"/> 
            {pictures.length > 1 ? (     
            <>
            <img onClick={previous} src={Leftarrow} alt="" className="leftarrow"/>
            <img onClick={next} src={Rightarrow} alt="" className="rightarrow"/>
            </>
            ) : null }
        </div>
    )
    }

export default Slide