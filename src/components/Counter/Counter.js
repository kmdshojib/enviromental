import React from 'react'
import CountUp from 'react-countup';

import treePlanted from "../../assets/treesplanted.png"
import helpingHand from "../../assets/helpinghand.png"
import peopleprogress from "../../assets/peopleprogress.png"
import handShake from "../../assets/handshake.png"


import "./counter.css"
const counterData = [
    {
        "startTime": 5000,
        "endTime": 5898,
        "decimal":",",
        "description": "Trees Planted",
        "imgUrl": treePlanted
    },
    {
        "startTime": 1990,
        "endTime": 1994,
        "description": "Changing Life Since",
        "imgUrl": peopleprogress
    },
    {
        "startTime": 0,
        "endTime": 21,
        "description": "Our Partners",
        "partner": "+",
        "imgUrl": handShake
    },
    {
        "startTime": 1,
        "endTime": 385,
        "description": "Volunteers",
        "imgUrl": helpingHand
    }
]
const Counter = () => {
    return (
        <div className='spacing'>
            <div className='counter'>
                {
                    counterData.map(({startTime,endTime,imgUrl,description,partner,decimals}) => (
                        <div className='counter-container'>
                            <img className='counter-img' src={imgUrl} alt="progressbar" />
                            <h1 className='counter-title'><CountUp start={startTime} end={endTime} decimal={decimals} enableScrollSpy /><span>{partner}</span></h1>
                            <p className='counter-subtitle'>{description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Counter