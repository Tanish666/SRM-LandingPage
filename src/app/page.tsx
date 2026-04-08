'use client'
import React, { useEffect, useState } from 'react'
import HeroSection5 from '@/components/home/HeroSection5'
import HeroSection from '@/components/home/HeroSection'
import HeroMarquee from '@/components/home/heroMarquee'
import HomeSection2 from '@/components/home/HomeSection2'
import HomeSection3 from '@/components/home/HomeSection3'
import Separator from '@/components/layout/Separator'
import HeroSection4 from '@/components/home/HeroSection4'
import HemeSection6 from '@/components/home/HemeSection6'
import HomeSection7 from '@/components/home/HomeSection7'
import HomeSection8 from '@/components/home/HomeSection8'
import HomeSection9 from '@/components/home/HomeSection9'
import HomeSection10 from '@/components/home/HomeSection10'

const page = () => {
  const [coursesData, setCoursesData] = useState<any[]>([]);
  const [newsEventsData, setNewsEventsData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/`);
        const resDemo = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/16`);
        const res1 = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/news-events/`);
        const data = await res.json();
        const data1 = await res1.json();
        const demoData = await resDemo.json();
        if (data?.results) setCoursesData(data.results);
        if (data1?.results) setNewsEventsData(data1.results);
        console.log(demoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchdata();
  }, []);
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
      <HomeSection3 coursesData={coursesData} />
      {/* Why Choose Us Section */}
      <HeroSection4 />
      {/* Testimonials & Latest News Section */}
      <HeroSection5 />
      {/* Research & Innovation Section */}
      <HemeSection6 />
      {/* Placement Partners Section */}
      <HomeSection7 />
      {/* Course Finder Section */}
      <HomeSection8 coursesData={coursesData} />
      {/* Campus Facilities Section */}
      <HomeSection9 />
      {/* News, Events & CTA Section */}
      <HomeSection10 newsEventsData={newsEventsData} />
    </div>
  )
}

export default page