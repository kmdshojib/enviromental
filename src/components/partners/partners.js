import React from 'react'
import adobe from "../../assets/partners/adobe.png"
import dell from "../../assets/partners/dell.png"
import uber from "../../assets/partners/uber.png"
import paypal from "../../assets/partners/paypal.png"
import microsoft from "../../assets/partners/microsoft.png"
import google from "../../assets/partners/google.png"
import spotify from "../../assets/partners/spotify.png"
import dropbox from "../../assets/partners/dropbox.png"
import nike from "../../assets/partners/nike.png"

import "./partners.css"

const Partners = () => {
    return (
        <div className='partners-container'>
            <div className='spacing enviroment-common'>
                <h1 className='enviroment-title'>The Environment is All We Have In Common</h1>
                <p className='enviroment-subtitle'>Turning the ship around takes a lot of willpower and ingenuity.</p>
            </div>
            <div className="partners-img">
                <img src={adobe} alt="" className="adobe" />
                <img src={dell} alt="" className="adobe" />
                <img src={uber} alt="" className="right-icon" />
                <img src={paypal} alt="" className="adobe" />
                <img src={microsoft} alt="" className="adobe" />
                <img src={google} alt="" className="right-icon" />
                <img src={spotify} alt="" className="adobe" />
                <img src={dropbox} alt="" className="adobe" />
                <img src={nike} alt="" className="right-icon" />
            </div>
        </div>
    )
}

export default Partners