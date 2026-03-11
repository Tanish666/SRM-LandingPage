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
      {/* Hero Section */}
      <HeroSection />
      {/* Hero Marquee */}
      <HeroMarquee />
      {/* About Us Section */}
      <HomeSection2 />
      {/* Section Separator */}
      <Separator />
      {/* Programs Offered Section */}
      <HomeSection3 />
      {/* Why Choose Us Section */}
      <HeroSection4 />
      {/* Testimonials & Latest News Section */}
      <HeroSection5 />
      {/* Research & Innovation Section */}
      <HemeSection6 />
      {/* Placement Partners Section */}
      <HomeSection7 />
      {/* Course Finder Section */}
      <HomeSection8 />
      {/* Campus Facilities Section */}
      <HomeSection9 />
      {/* News, Events & CTA Section */}
      <HomeSection10 />
    </div>
  )
}

export default page