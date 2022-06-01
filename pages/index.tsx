import type { NextPage } from 'next'
import Intro from  '../content/en/index/intro-section.mdx'
import WhatIsIt from '../content/en/index/what-is-it-section.mdx'
import WhySaturn from '../content/en/index/why-saturn-section.mdx'
import GetStarted from '../content/en/index/get-started-section.mdx'
import CustomProse from '../components/CustomProse/CustomProse'
import CallToActionButtons from '../content/en/index/Intro'
import CallToActionButtonDownload from '../content/en/index/GetStarted'
import NavBar from '../content/en/index/NavBar'
import Footer from '../content/en/index/Footer'
import FeaturesIntro from '../content/en/index/features-intro.mdx'
import Features from '../content/en/index/Features'
import IntersectionObserverWrapper from '../components/IntersectionObserverWrapper/IntersectionObserverWrapper'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

const Home: NextPage = () => {
  return (
      <div  className='mx-auto text-center w-full overflow-hidden'>
        <div className='fixed inset-0 lg:bg-desktop-background bg-mobile-background bg-no-repeat bg-cover bg-center -z-10'></div>
        <NavBar />
        <div id='start' className='w-full h-0'></div>
        <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem]'>
            <div className=' max-w-xs md:max-w-sm lg:max-w-[30rem] mt-60 sm:mt-96 mr-auto  '>
              <CustomProse>
                <Intro />
              </CustomProse>
              <div className='flex w-full items-stretch space-x-3 lg:space-x-6 mb-8 '>
                <CallToActionButtons/>
              </div>
            </div> 
          </div>

        <div id='whatisit' className='w-full h-0'></div>
        <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem]'>
          <div className=' max-w-xs md:max-w-sm lg:max-w-[30rem] mt-32 md:mt-60 ml-auto  '>
            <CustomProse>
              <WhatIsIt />
            </CustomProse>
          </div> 
        </div> 
        <div id='features' className='w-full h-0'></div>
          <div className='mt-20 md:mt-32 lg:mt-52 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
              <div className='text-left w-full my-8 '>
                <CustomProse>
                  <FeaturesIntro />
                </CustomProse>
              </div>
            <div className='px-2 w-full lg:px-0 mt-8'>
              <Features/>
            </div>
          </div>
        <div id='why' className='w-full h-0'></div>
          <div className='mx-auto px-6 text-left max-w-xs md:max-w-sm lg:max-w-2xl mt-24 md:mt-56 flex flex-col items-end justify-end md:justify-center md:items-center'>
            <CustomProse>
              <WhySaturn />
            </CustomProse>
          </div> 
        <div id='getstarted' className='w-full h-0'></div>
          <div className='mx-auto px-6 text-center max-w-[17rem] md:max-w-sm lg:max-w-[34rem] mt-36 md:my-52 flex flex-col justify-center items-center'>
            <CustomProse>
              <GetStarted />
            </CustomProse>
            <div className='flex items-stretch mx-auto mb-8 '>
              <CallToActionButtonDownload/>
            </div>
          </div>  
          <Footer/>
      </div>
  )
}

export default Home
