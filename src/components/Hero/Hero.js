import React from 'react'

import "./hero.styles.css"

const Hero = () => {
    return (
        <div className="hero-bg">
            <div className='spacing hero-container'>
                <div className="">
                    <h2 className='title'>Help <span className="title-today">Today</span> for</h2>
                    <h1 className='sub-title'>Brighter <span className="sub-title-tomorrow">Tomorrow</span></h1>
                </div>
                <div className="hero-subsection">
                    <p>Leaders across the country are tackling the most challenging and pressing issues of our time. Earth Let us all join to deal with unprecedented threats to Earth's life.</p>
                </div>
                <div className='hero-button'>
                    <button className='btn btn-donate'>Donate Now</button>
                    <button className='btn btn-contact'>Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Hero