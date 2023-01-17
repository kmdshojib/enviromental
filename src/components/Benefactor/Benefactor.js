import React from 'react'
import "./benefactor.styles.css"

import Pauline from "../../assets/benefactorImg/Pauline.png"
import James from "../../assets/benefactorImg/james.png"
import william from "../../assets/benefactorImg/william.png"
import Bardon from "../../assets/benefactorImg/bardon.png"
import JamesL from "../../assets/benefactorImg/jamesL.png"
import cesar from "../../assets/benefactorImg/cesar.png"

// social icons
import linkedIn from "../../assets/social/linkedIn.png"
import twitter from "../../assets/social/twitter.png"
import insta from "../../assets/social/insta.png"

const Benefactor = () => {
    const benefactorData = [
        {
            "id": 1,
            "imgurl": `${Pauline}`,
            "name": "Pauline J. Wright",
            "work": "Volunteer"
        },
        {
            "id": 2,
            "imgurl": `${James}`,
            "name": "James L. Stewart",
            "work": "Volunteer"
        },
        {
            "id": 3,
            "imgurl": `${william}`,
            "name": "William V. Mejia",
            "work": "Volunteer"
        },
        {
            "id": 4,
            "imgurl": `${Bardon}`,
            "name": "Brandon J. Hudgins",
            "work": "Volunteer"
        },
        {
            "id": 5,
            "imgurl": `${JamesL}`,
            "name": "James L. Stewart",
            "work": "Volunteer"
        },
        {
            "id": 6,
            "imgurl": `${cesar}`,
            "name": "Cesar R. Watts",
            "work": "Volunteer"
        },
    ]
    return (
        <div className='spacing benefactor-container'>
            <div className='benefactor-title'>
                <h1>Our Benefactors</h1>
                <div className='border1'></div>
                <div className='border2'></div>
            </div>
            <div className='benefactor-card-layout'>
                {
                    benefactorData.map(({ id, name, imgurl, work }) => (
                        <div key={id} className='benefactor-card'>
                            <div className='benfactor-img' style={{ background: `url(${imgurl})` }}>
                                <div className='social-icon'>
                                    <img src={linkedIn} alt="social-icon" />
                                    <img src={twitter} alt="social-icon" />
                                    <img src={insta} alt="social-icon" />
                                </div>
                            </div>
                            <h5>{name}</h5>
                            <p>{work}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Benefactor