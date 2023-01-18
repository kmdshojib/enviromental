import React from 'react'
import CauseHero from '../components/CauseHero/CauseHero'
import ClimateSustain from '../components/climateSustain/ClimateSustain'
import CompulsveFact from '../components/compulsivefact/compulsveFact'
import HelpingHand from '../components/HelpingHand/HelpingHand'
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
        <HelpingHand />
        <CompulsveFact />
        <WorldAround/>
    </div>
  )
}

export default OurCause