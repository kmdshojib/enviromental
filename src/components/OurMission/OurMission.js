import React from 'react'
import "./Ourmission.css"
import iundustry from "../../assets/OurCasue/missionidustry.png"
import ice from "../../assets/OurCasue/missionice.png"
import treecut from "../../assets/OurCasue/treecut.jpg"
const OurMission = () => {
    const carData = [
        {
            "id": 1,
            "name": "Air Pollution",
            "img": iundustry,
            "des": "Carbon Monoxide Released Indicates Massive Fossil Fuel Burning."
        },
        {
            "id": 2,
            "name": "Deforestation",
            "img": treecut,
            "des": "Burning stubble & farm residue contributes significantly to wildfires."
        },
        {
            "id": 2,
            "name": "Population",
            "img": ice,
            "des": "How Harmful are Volatile Organic Compounds for Us?"
        },
    ]
    return (
        <div>
            <div className='spacing misssion-container'>
                <div>
                    <div className='mission1'>
                        <p className='intro-who'>Our Mission</p>
                        <h1>Our Green Wonders</h1>
                        <div className='border1'></div>
                        <div className='border2'></div>
                        <div className='mission-links'>
                            <ul>
                                <li className='link-all'>All</li>
                                <li>Pllution</li>
                                <li>Waste Disposal</li>
                                <li>Population</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mission2">
                        {
                            carData.map(({img,name,des,id}) => (
                                <div key={id} className="mission-card">
                                    <div style={{background:`url(${img})`}} className='mission-img'>
                                        <buttion className="misson-btn" type="buttion">Donate</buttion>
                                    </div>
                                    <p className='intro-who'>{name}</p>
                                    <h3 className='intro-story'>{des}</h3>
                                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque morbi posuere tincidunt nunc. </p>
                                    <div>
                                        <p className="percentage">67%</p>
                                        <div className='progress-bar'>
                                            <div className='progress-line'></div>
                                        </div>
                                    </div>
                                    <div className='money'>
                                        <p style={{ color: "#000000" }} className='raised'>Raised : $10.11 million</p>
                                        <p style={{ color: "#000000" }} className='goal'>Goal: $23 million</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <button className='mission-started'>Get started</button>
        </div>
    )
}

export default OurMission