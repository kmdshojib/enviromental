import React from 'react'

import "./assistance.styles.css"

import globe from "../../assets/globe.png"
import hand from "../../assets/hand.png"
import light from "../../assets/light.png"
import group from "../../assets/group.png"
import mask from "../../assets/mask.png"
import disk from "../../assets/disk.png"

// home page component second section

const cardData = [
    {
        "imgUrl": `${globe}`,
        "title": "Reduce Global Warming Now",
        "description": "The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide."
    },
    {
        "imgUrl": `${hand}`,
        "title": "Protecting Ecosystems",
        "description": "The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide."
    },
    {
        "imgUrl": `${light}`,
        "title": "Shift Towards Clean Energy",
        "description": "This energy transition has the potential to impact many aspects of life, including the environment, society, the economy, and governance."
    },
    {
        "imgUrl": `${group}`,
        "title": "Safe Coastal Livelihoods",
        "description": "Sustainable aquaculture, e.g. grouper aquaculture, meets the high demand for reef fish while potentially preserving coastal communities' livelihoods."
    },
    {
        "imgUrl": `${mask}`,
        "title": "Stop Toxic Chemical in Air",
        "description": "Solubility is differentiated by whether the substance is easily dissolved in organic solvents under normal environmental conditions of temperature & pressure.",
    },
    {
        "imgUrl": `${disk}`,
        "title": "Ban Radioactive Contamination",
        "description": "Radioactive materials released into the environment can contaminate the air, water, surfaces, soil, plants, buildings, people & animals."
    },
]

const Assitance = () => {
    return (
        <div className='assist-bg'>
            <div className='assist-title-container'>
                <h2 className='assist-title'>Our Continued Project Assistance Programs</h2>
            </div>
            <div className='spacing assist-card-layout'>
                {
                    cardData.map(({title,imgUrl,description}) => (
                        <div className='assist-card'>
                            <img src={imgUrl} alt="assistance" />
                            <h3 className='assist-card-title'>{title}</h3>
                            <p className='assist-card-text'>{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Assitance