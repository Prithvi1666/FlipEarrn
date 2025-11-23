import React from 'react'
import Hero from '../components/Hero'
import LatestListings from '../components/LatestListings'
import Plans from '../components/Plans'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
        < Hero />
        <LatestListings />
        <Plans />
        <CTA />
    </div>
  )
}

export default Home