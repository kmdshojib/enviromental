import React from 'react'
import Counter from '../Counter/Counter'
import "./fact.css"

const CompulsveFact = () => {
  return (
    <div className='spacing compulse'>
        <div className='compulse2'>
            <h2>Some Compulsive Facts</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum neque ligula elementum convallis cursus. Nunc dignissim mi pellentesque mattis posuere faucibus. </p>
        </div>
        <div className='count-modify'>
            <Counter />
        </div>
    </div>
  )
}

export default CompulsveFact