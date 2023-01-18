import React from 'react'
import "./ClimateSustain.styles.css"
import videothumnail from "../../assets/OurCasue/overclimate.png"

const ClimateSustain = () => {
    return (
        <div className='climate'>
            <div className='spacing climate-container'>
                <div>
                    <video width="498.48" height="445.83" poster={videothumnail}>
                    </video>
                </div>
                <div className='claimate-second'>
                    <p  className='intro-who'>HOW WE WORK</p>
                    <h1 className='intro-story'>
                        Sustainability & Climate Change Concerns
                    </h1>
                    <p className="climatedescription intro-des">Scoping identifies the issues that will be most important during the Environment Impact Assessment and eliminates those that will be of little concern.</p>
                    <button className='climatebtn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default ClimateSustain