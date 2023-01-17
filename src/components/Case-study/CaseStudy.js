import React from 'react'
import "./casestudy.styles.css"

import FireIamge from "../../assets/fire.png"
import leftArrow from "../../assets/leftArrow.png"
import rightarrow from "../../assets/rightArrow.png"

const CaseStudy = () => {
    return (
        <div className='spacing'>
            <div className="case-study-title">
                <h1>Case Study</h1>
                <div className='border1'></div>
                <div className='border2'></div>
            </div>
            <div className='case-study-second'>
                <img src={FireIamge} alt="fireimage" />
                <div className='study'>
                    <div className='spacing'>
                        <h5 className='disaster'>DISASTER MITIGATION</h5>
                        <div className='energy-preserving'>
                            <h3>Switching to Clean Energy & Preserving our Abode, Earth.</h3>
                            <button type='button' className=''>Donate</button>
                        </div>
                        <p className="study-description">Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.
                        </p>
                        <p className='percentage-counter'>67%</p>
                        <div className="study-line">
                            <div className="study-percentage"></div>
                        </div>
                        <div style={{width:"582.55px"}} className="money">
                            <p className="raised">Raised : $10.11 million</p>
                            <p className="goal">Goal: $23 million</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow'>
                <img src={leftArrow} alt="arrow" className="left-arrow" />
                <img src={rightarrow} alt="arrow" className="right-arrow" />
            </div>
        </div>
    )
}

export default CaseStudy