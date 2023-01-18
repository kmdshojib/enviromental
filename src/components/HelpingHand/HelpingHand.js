import React from 'react'
import "./Helpinghand.css"

import right from "../../assets/arrowright.png"
import Left from "../../assets/arrowleft.png"

import james from "../../assets/benefactorImg/james.png"
import ceasar from "../../assets/benefactorImg/cesar.png"
import william from "../../assets/benefactorImg/william.png"

const HelpingHand = () => {
    return (
        <div className='helpinghand'>
            <div className='spacing helpinghand-con'>
                <div className='hand-tit'>
                    <h3 className='helpinghand-title'>Meet our Helping Hands</h3>
                    <p className='helpinghand-sub'>They do not behave like waves, they do not behave like particles, they do not behave like clouds....</p>
                    <div>
                        <img src={right} alt="" />
                        <img src={Left} alt="" />
                    </div>
                </div>
                <div className='hand-img'>
                    <div>
                        <img src={ceasar} alt="" />
                        <p className='helping-hand-name'>Crystal Logan</p>
                        <p className='helping-hand-title'>Project Management Specialist</p>
                    </div>
                    <div>
                        <img src={james} alt="" />
                        <p  className='helping-hand-name'>Esther Howard</p>
                        <p  className='helping-hand-title'>Frontend Developer</p>
                    </div>
                    <div>
                        <img src={william} alt="" />
                        <p className='helping-hand-name'>Ted Horton</p>
                        <p  className='helping-hand-title'>Gaming Director</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpingHand