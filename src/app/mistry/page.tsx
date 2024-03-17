import React from 'react'
import HeroSection from './HeroSection'
import Spotlight from './SpotlightSec'
import GoodDeed from './GoodDeed'
import GoodDeedList from './GoodDeedList'
import Parents from './Parents'
import HiddenSadaqah from './HiddenSadaqah'
import OneUmmah from './OneUmmah'

const MistryPage = () => {
  return (
    <div className="bg-slate-950 text-white ">
      <Spotlight/>
      <GoodDeed/>
      {/* <HeroSection/> */}
      <GoodDeedList/>
      <Parents/>
      <HiddenSadaqah/>
      {/* <OneUmmah/> */}

        
    </div>
  )
}

export default MistryPage