import React from "react";
import Leftarrow from "../assets/leftarrow.svg"
import Rightarrow from "../assets/rightarrow.svg"
import { useState } from 'react'



const Slide = ({pictures}) => {
    const [index, setIndex] = useState(0);
    const next = () => {
        if (!(index + 1 > pictures.lenght))
        setIndex(index + 1)
        else setIndex[0]
    }
    const previous = () => {
        if (index - 1 < 0)
        setIndex[pictures.lenght - 1]
        else setIndex(index - 1)
    }

    return (
        <div className="slide">
            <img src={pictures[index]} alt="" className="pictures"/>
            <img onClick={previous} src={Leftarrow} alt="" className="leftarrow"/>
            <img onClick={next} src={Rightarrow} alt="" className="rightarrow"/>
        </div>
    )
    }

export default Slide