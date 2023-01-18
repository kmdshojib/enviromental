import React from 'react'
import CauseHero from '../components/CauseHero/CauseHero'
import ClimateSustain from '../components/climateSustain/ClimateSustain'
import OurStory from '../components/ourstory/OurStory'

const OurCause = () => {
  return (
    <div>
        <CauseHero />
        <OurStory />
        <ClimateSustain/>
    </div>
  )
}

export default OurCause