import React from 'react'
import "./ourstory.css"
import ourstoryImg from "../../assets/OurCasue/ourstory.png"
import cube from "../../assets/OurCasue/Cube.png"

const OurStory = () => {
  return (
    <div className='spacing ourstory-container'>
        <div>
            <p className='intro-who'>WHO WE ARE</p>
            <h1 className='intro-story'>Our Story</h1>
            <p className='intro-des'>Realizing the risk that environmental threats pose to humankind and the planet itself, we took this step to save ourselves and the planet. We reached our green goals by starting with a minimum number of volunteers, and now we are a massive family of volunteers. </p>
            <div className='cube-container'>
                <img src={cube} alt="" className='cube' />
                <p className='cube-text'>Identifying all pertinent issues and factors of issues.</p>
            </div>
            <div className='cube-container'>
                <img src={cube} alt="" className='cube' />
                <p className='cube-text'>Facilitating meaningful public participation and review.</p>
            </div>
            <div className='cube-container'>
                <img src={cube} alt="" className='cube' />
                <p className='cube-text'>Choosing the EIA's appropriate time and space boundaries</p>
            </div>
        </div>
        <div>
            <img src={ourstoryImg} alt=""/>
        </div>
    </div>
  )
}

export default OurStory