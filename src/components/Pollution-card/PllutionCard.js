import React from 'react'
import "./pollutionCard.styles.css"

import airpollution from "../../assets/Airplloution.png"
import waterpollution from "../../assets/waterpllution.png"
import Iceberg from "../../assets/iceberg.png"


const PllutionCard = () => {
    const pollutionCardData = [
        {
            "id": 1,
            "image": airpollution,
            "name": "Air Pollution",
            "description": "What’s currently happening in Air Pollution all around the world? AQI region-wise."
        },
        {
            "id": 2,
            "image": waterpollution,
            "name": "WATER POLLUTANT",
            "description": "Think up spending hours every day looking for drinking water."
        },
        {
            "id": 1,
            "image": Iceberg,
            "name": "MELTING ICEBERGS",
            "description": "Negative mass balances due to retiring glaciers is causing them to disappear."
        },
    ]
    return (
        <div className='spacing pollution-card'>
            <div className='pollution-card-layout'>
                {
                    pollutionCardData.map(({image,name,id,description}) => (
                        <div key={id} style={{ background: `linear-gradient(180deg, rgba(20, 99, 86, 0) 50%, rgba(20, 99, 86, 0.8) 74.2%),  url(${image})`, zIndex: "100" }} className="pollution-card-container">
                            <p className="pollution-title">{name}</p>
                            <h4 className="pollution-description">{description}</h4>

                            <div className='donate-section'>
                                <div className='collaboration'>
                                    <p>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                                </div>
                                <div>
                                    <p className="percentage">67%</p>
                                    <div className='progress-bar'>
                                        <div className='progress-line'></div>
                                    </div>
                                </div>
                                <div className='money'>
                                    <p className='raised'>Raised : $10.11 million</p>
                                    <p className='goal'>Goal: $23 million</p>
                                </div>
                                <button type='button' className="progress-btn">Donate Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PllutionCard