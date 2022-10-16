import type { NextPage } from 'next'
import CustomProse from '../components/CustomProse/CustomProse'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { backgroundScrollAnimations } from '../animations/scroll'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import { useFeatureContext } from '../context/featureContext'
import Button12 from '../components/Button12/Button12'
import Button13 from '../components/Button13/Button13'
import { RenderMDXContent } from '../content/content'
import NavBar from '../components/NavBar/NavBar'
import Goals from '../components/Goals/Goals'
import Modal3 from '../components/Modal3/Modal3'
import Button1 from '../components/Button1/Button1'
import Button2 from '../components/Button2/Button2'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import Metrics from '../components/Metrics/Metrics'

const DynamicSaturn = dynamic(() => import('../threejs/components/Saturn/Saturn'), {
  suspense: false,
  ssr: false
})

const Home: NextPage = () => {
  const features = useFeatureContext()
  useEffect(() => {
    const cleanup2 = backgroundScrollAnimations(`[data-gsap="bg"]`)
    return () => {
      cleanup2()
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Filecoin Saturn</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content="Join the Saturn Network and start earning Filecoin!"/>
      </Head>
      <div className='mx-auto w-full overflow-hidden relative'>
        <div data-gsap="bg" className='fixed -z-20 inset-x-0 -top-1 h-[150%] bg-sat-blue-4 inset-0'></div>
        <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "didyouknow", "accelerateyoursite", "goals", "roadmap", "getinvolved", "careers"]} contentId="general.navbar" />
        <div data-io="start" id="start" className='w-full h-0'></div>
        <div className=' w-full relative'>
          <div className='mx-auto  max-w-xl xs:px-10 md:max-w-4xl lg:max-w-[70rem] sm:mx-auto px-6 md:px-12 mt-8 sm:mt-0 md:pb-12 text-left h-full flex flex-col justify-end '>
            <div className='max-h-[11.5rem] h-[100vh] min-h-[10rem] md:h-[90vh] md:min-h-[10rem] md:max-h-[20rem] lg:h-[55vh] lg:min-h-[5rem] lg:max-h-[14rem] '></div>
            <div data-gsap="animate-children" className=' max-w-sm xs:max-w-md sm:max-w-md md:max-w-4xl lg:max-w-7xl  mr-auto relative'>
              <CustomProse overrides='prose-p:md:!text-xl prose-p:leading-[1.25rem] prose-p:lg:!text-2xl prose-p:lg:w-[50rem] prose-h1:lg:w-[45rem] prose-h1:!my-0 prose-h1:lg:!my-4 prose-p:my-1 '>
                <RenderMDXContent contentId='index.start.default' />
              </CustomProse>
              <div data-gsap="animate" className='w-full flex flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-3 sm:space-x-3 md:space-x-5  lg:space-x-10  mb-12 my-4 md:mt-6 lg:mt-10'>
                <Button12 contentId='index.start.ctas[0]' />
                <Button13 contentId='index.start.ctas[1]' backdropBlur={features.backdropBlur} />
              </div>
              <div className='absolute -inset-x-[110%] -inset-y-[60%] -z-10 opacity-50 bg-gradient-radial from-black via-transparent to-transparent bg-cover'>
              </div>
            </div> 
            <Metrics contentId='index.metrics.metrics' />
          </div>
          <div className='absolute -z-20 inset-0 bottom-[30%] md:bottom-[25%] lg:bottom-[25%]'>
            <Suspense fallback={null}>
              <DynamicSaturn />
            </Suspense>
          </div>
        </div>
        <div id="didyouknow" className='w-full h-0'></div>
        <div data-io="didyouknow" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-8 md:space-x-12 lg:space-x-24 '>
            <div className=' lg:text-left lg:max-w-sm '>
              <CustomProse overrides='prose-h1:sm:my-0'>
                <RenderMDXContent contentId='index.did-you-know.title.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='lg:mt-6 prose-h5:text-base prose-h5:md:text-2xl prose-h5:lg:text-3xl ' >
              <RenderMDXContent contentId='index.did-you-know.subtitle.default' />
              <RenderMDXContent contentId='index.did-you-know.description.default' />
            </CustomProse>
          </div>
          <div>
            <CustomProse overrides=' ' >
              <div className='text-left '>
                <RenderMDXContent contentId='index.did-you-know.case-studies.default' />
              </div>
            </CustomProse>
            <CaseStudies backdropBlur={features.backdropBlur}  contentId='index.did-you-know.case-studies.studies' />
          </div>
        </div>
        <div id="accelerateyoursite" className='w-full h-0'></div>
        <div data-io="accelerateyoursite" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 '>
            <div className='text-left '>
              <CustomProse overrides='lg:max-w-[70rem]' overridesParent='lg:max-w-[70rem]'>
                <RenderMDXContent contentId='index.accelerate-your-site.title.default' />
              </CustomProse>
            </div>
          </div>
          <div data-gsap="animate-children" className='text-left w-full my-8 md:my-0 md:flex md:space-x-4 '>
            <div className=' lg:text-left lg:max-w-xl '>
              <CustomProse overrides='md:max-w-[40rem] lg:max-w-[45rem] prose-h3:lg:w-[35rem] prose-h3:my-0'>
                <RenderMDXContent contentId='index.accelerate-your-site.subtitle.default' />
              </CustomProse>
            </div>
            <div className=''>
              <CustomProse overrides='mt-2 md:mt-1 lg:mt-3 prose-h5:text-base prose-h5:md:text-2xl prose-h5:lg:text-3xl ' >
                <RenderMDXContent contentId='index.accelerate-your-site.description.default' />
              </CustomProse>
              <div className='w-[75%] md:m-0 py-4'>
                <Button2 backdropBlur={features.backdropBlur} contentId='index.accelerate-your-site.description.cta[0]'/>
              </div>
            </div>
          </div>
        </div>
        <div id="goals" className='w-full h-0'></div>
        <div data-io="goals" className='w-full h-0 mt-56 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full lg:my-12'>
            <CustomProse>
              <RenderMDXContent contentId='index.goals.title.default' />
            </CustomProse>
          </div>
          <div className='px-2 w-full lg:px-0'>
            <Goals backdropBlur={features.backdropBlur} contentId="index.goals.content.content"/>
          </div>
        </div>
        <Footer backdropBlur={features.backdropBlur} contentId="general.footer" />
      </div>
    </>
  )
}

export default Home