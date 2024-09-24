import React from 'react'
import SearchBar from './SearchBar'
import AskMeAnything from './AskMeAnything'

const Hero = () => {
  return (
    <div className='flex relative items-center justify-center'>
        <div className='absolute top-0 left-0 z-[100]'>
        <AskMeAnything/>
        </div>
        <SearchBar/>
    </div>
  )
}

export default Hero