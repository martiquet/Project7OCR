import React from 'react';
import Datacollapse from "../about.json"
import Collapse from "../components/Collapse"
import Bannerabout from "../components/Bannerabout"

const About = () => {
    return (
        <>
        <Bannerabout/>
    
        <div className="collapseparent">
            {/* Get each object in about.json */}
            {Datacollapse.map((data) =>
                // Get each title and each description
                <Collapse key={data.title} title={data.title} description={data.description}/>
            )}
        </div>
        
        </>
    )
}

export default About;