import React from 'react'
import "./quatation.styles.css"
import Goldie from "../../assets/iconImage/golde.png"
import charles from "../../assets/iconImage/charles.png"
import karen from "../../assets/iconImage/karen.png"
import quote from "../../assets/iconImage/quote.png"

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const Quatation = () => {
    const qutationCardData = [
        {
            "id": 1,
            "img": Goldie,
            "name": "Goldie D. Taylor",
            "title": "Investor",
            "qutation": "Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities."
        },
        {
            "id": 2,
            "img": charles,
            "name": "Charles M. Pruitt",
            "title": "Advocacy Partner",
            "qutation": "Environmental research has resulted in significant advancements that have resulted in the protection of human and ecosystem health.In the industrialized world, voluntary environmental agreements are a must."
        },
        {
            "id": 3,
            "img": karen,
            "name": "Karen J. Lugo",
            "title": "Volunteer",
            "qutation": "A brilliant strategy for finally making nature conservation and sustainability relevant in elections by supporting green candidates in all possible efforts. Let’s make that happen with our mechanisms."
        },
    ]
    return (
        <div className='spacing quote-main'>
            <Glider
                draggable
                hasDots
                slidesToShow={2}
                slidesToScroll={1}
                scrollToSlide={true}
            >
                {
                    qutationCardData.map(({ id, img, qutation, name, title }) => (
                        <div key={id} className="quatation-card">
                            <img src={quote} alt="" className="quote" />
                            <p className='quote-des'>{qutation}</p>
                            <div className='quote-container'>
                                <img src={img} alt="" className="icon-img" />
                                <div className='quote-intro'>
                                    <p className='intro-name'>{name}</p>
                                    <p className='intro-title'>{title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Glider>

        </div>
    )
}

export default Quatation