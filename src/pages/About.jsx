import React from 'react';
import '../style/App.css';
import Datacollapse from "../about.json"
import Collapse from "../components/Collapse"
import Bannerabout from "../components/Bannerabout"

const About = () => {
    return (
        <>
        <Bannerabout/>
        <div className="collapseparent">
            {Datacollapse.map((data) =>
                <Collapse key={data.title} title={data.title} description={data.description}/>
            )}
        </div>
        </>
    )
}

export default About;