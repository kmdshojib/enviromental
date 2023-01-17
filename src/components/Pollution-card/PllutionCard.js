import React from 'react'
import "./pollutionCard.styles.css"

import airpollution from "../../assets/Airplloution.png"


const PllutionCard = () => {
  
    return (
        <div className='spacing pollution-card'>
            <div style={{ background: `url(${airpollution})` }} className="pollution-card-container">
                <p className="pollution-title">Air Pollution</p>
                <h4 className="pollution-description">What’s currently happening in Air Pollution all around the world? AQI region-wise.</h4>

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
        </div>
    )
}

export default PllutionCard