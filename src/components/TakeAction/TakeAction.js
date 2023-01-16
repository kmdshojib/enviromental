import React from 'react'
import takeActionImg from "../../assets/takeaction.png"

import './takeaction.styles.css'

const TakeAction = () => {
    return (
        <div className='take-action-container'>
            <img src={takeActionImg} alt="take Action" />
            <div className='take-action-bg'>
                <h2 className='take-action-title'>Take Action. Let’s Get In Touch</h2>
                <p className='take-action-subtitle'>Given the limited resources, the issues we address, from hunger & clean drinking water to disease prevention and homelessness, can be taxing.</p>
                <button className='take-action-button'>Donate Now</button>
            </div>
        </div>
    )
}

export default TakeAction