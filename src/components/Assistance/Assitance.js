import React from 'react'

import "./assistance.styles.css"

import globe from "../../assets/globe.png"

// home page component second section


const Assitance = () => {
    return (
        <div className='spacing'>
            <div className='assist-title-container'>
                <h2 className='assist-title'>Our Continued Project Assistance Programs</h2>
            </div>
            <div className='assist-card'>
                <img src={globe} alt="assistance" />
                <h3>Reduce Global Warming Now</h3>
                <p className='assist-card-text'>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
            </div>
        </div>
    )
}

export default Assitance