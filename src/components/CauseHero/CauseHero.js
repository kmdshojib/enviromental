import React from 'react'
import "./causeHero.styles.css"

const CauseHero = () => {
    return (
        <div className='cause-hero'>
            <div className='spacing casue-container'>
                <h1 className='cause-title '><span className='title-today '>Who</span> We Are</h1>
                <h1 className='cause-title cause-title2'> <span className='sub-title-tomorrow'>What </span>We Do</h1>
                <div className="hrline"></div>
                <div className="bread-crumb">
                    <p className='casue-home'>Home</p>
                    <p>></p>
                    <p>Our casue</p>
                </div>
            </div>
        </div>
    )
}

export default CauseHero