import React from 'react'
import Assitance from '../components/Assistance/Assitance'
import Benefactor from '../components/Benefactor/Benefactor'
import CaseStudy from '../components/Case-study/CaseStudy'
import Counter from '../components/Counter/Counter'
import Hero from '../components/Hero/Hero'
import PllutionCard from '../components/Pollution-card/PllutionCard'
import TakeAction from '../components/TakeAction/TakeAction'

const Home = () => {
  return (
    <div>
        <Hero />
        <Assitance />
        <Counter />
        <PllutionCard />
        <TakeAction />
        <Benefactor />
        <CaseStudy />
    </div>
  )
}

export default Home