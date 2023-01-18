import React from 'react'
import Assitance from '../components/Assistance/Assitance'
import Benefactor from '../components/Benefactor/Benefactor'
import CaseStudy from '../components/Case-study/CaseStudy'
import Counter from '../components/Counter/Counter'
import Hero from '../components/Hero/Hero'
import Partners from '../components/partners/partners'
import PllutionCard from '../components/Pollution-card/PllutionCard'
import Quatation from '../components/quatation/quatation'
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
        <Quatation />
        <Partners />
    </div>
  )
}

export default Home