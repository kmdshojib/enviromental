import React from 'react'
import Assitance from '../components/Assistance/Assitance'
import Counter from '../components/Counter/Counter'
import Hero from '../components/Hero/Hero'
import TakeAction from '../components/TakeAction/TakeAction'

const Home = () => {
  return (
    <div>
        <Hero />
        <Assitance />
        <Counter />
        <TakeAction />
    </div>
  )
}

export default Home