import React from 'react'
import "./WorldAround.css"
import Jack from "../../assets/reviewimg/jackreview.png"
import marvin from "../../assets/reviewimg/marvin.png"
import sarah from "../../assets/reviewimg/sarah.png"
import review from "../../assets/reviewimg/reviewstar.png"
const WorldAround = () => {
    const data = [
        {
            "id": 1,
            "name": "Jack McKinney",
            "img": Jack,
            "des": "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic."
        },
        {
            "id": 2,
            "name": "Marvin McKinney",
            "img": marvin,
            "des": "As quantum mechanics developed further, it turned out that there were a large number of things which were not directly encompassed in the Schrödinger equation—such as the spin of the electron, and various relativistic phenomena. The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones. But they are, we assure you, by all odds the simplest parts—in a deep sense of the word—as well as the most basic parts. This is frankly a pedagogical experiment; it has never been done before, as far as we know."
        },
        {
            "id": 2,
            "name": "Sarah Joses",
            "img": sarah,
            "des": "As quantum mechanics developed further, it turned out that there were a large number of things which were not directly encompassed in the Schrödinger equation—such as the spin of the electron, and various relativistic phenomena. The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones."
        },
        {
            "id": 2,
            "name": "Jack McKinney",
            "img": Jack,
            "des": "As quantum mechanics developed further, it turned out that there were a large number of things which were not directly encompassed in the Schrödinger equation—such as the spin of the electron, and various relativistic phenomena. The mathematics that is involved is particularly simple, involving simple algebraic operations and no differential equations or at most only very simple ones."
        },
    ]
    return (
        <div>
            <div className='spacing around-intro'>
                <p className='intro-who'>What they say</p>
                <h1>Word Around</h1>
                <div className='border1'></div>
                <div className='border2'></div>
            </div>
            <div className='spacing around2'>
                {
                    data.map(({ name, img, des, id }) => (
                        <div key={id} className="review-container">
                            <p className="review">{des}</p>
                            <div className='review-img'>
                                <img src={img} alt="" />
                                <div className='review-name'>
                                    <p>{name}</p>
                                    <img src={review} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WorldAround