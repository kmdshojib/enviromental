import React from 'react'
import "./quatation.styles.css"
import Goldie from "../../assets/iconImage/golde.png"
import quote from "../../assets/iconImage/quote.png"


const Quatation = () => {
    return (
        <div className='spacing'>
            <div className="quatation-card">
                <img src={quote} alt="" className="quote" />
                <p className='quote-des'>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                <div className='quote-container'>
                    <img src={Goldie} alt="" className="icon-img" />
                    <div className='quote-intro'>
                        <p className='intro-name'>Goldie D. Taylor</p>
                        <p className='intro-title'>Investor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quatation