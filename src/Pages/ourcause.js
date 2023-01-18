import React from 'react'
import CauseHero from '../components/CauseHero/CauseHero'
import ClimateSustain from '../components/climateSustain/ClimateSustain'
import OurMission from '../components/OurMission/OurMission'
import OurStory from '../components/ourstory/OurStory'
import WorldAround from './../components/WorldAround/WorldAround';

const OurCause = () => {
  return (
    <div>
        <CauseHero />
        <OurStory />
        <ClimateSustain/>
        <OurMission />
        <WorldAround/>
    </div>
  )
}

export default OurCause