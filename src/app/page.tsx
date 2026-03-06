import React from 'react'
import HeroSection5 from '@/components/HeroSection5'
import HeroSection from '@/components/HeroSection'
import HeroMarquee from '@/components/heroMarquee'
import HomeSection2 from '@/components/HomeSection2'
import HomeSection3 from '@/components/HomeSection3'
import Separator from '@/components/Separator'
import HeroSection4 from '@/components/HeroSection4'
import HemeSection6 from '@/components/HemeSection6'
import HomeSection7 from '@/components/HomeSection7'
import HomeSection8 from '@/components/HomeSection8'
import HomeSection9 from '@/components/HomeSection9'
import HomeSection10 from '@/components/HomeSection10'

const page = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <HeroSection />
      <HeroMarquee />
      <HomeSection2 />
      <Separator />
      <HomeSection3 />
      <HeroSection4 />
      <HeroSection5 />
      <HemeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
      <HomeSection10 />
    </div>
  )
}

export default page