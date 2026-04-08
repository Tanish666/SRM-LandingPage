import React from 'react'
import { Metadata } from 'next'
import HeroSection5 from '@/components/HeroSection5'
import HeroSection from '@/components/HeroSection'
import HeroMarquee from '@/components/HeroMarquee'
import HomeSection2 from '@/components/HomeSection2'
import HomeSection3 from '@/components/HomeSection3'
import Separator from '@/components/Separator'
import HeroSection4 from '@/components/HeroSection4'
import HomeSection6 from '@/components/HomeSection6'
import HomeSection7 from '@/components/HomeSection7'
import HomeSection8 from '@/components/HomeSection8'
import HomeSection9 from '@/components/HomeSection9'
import HomeSection10 from '@/components/HomeSection10'

export const metadata: Metadata = {
  title: 'Home - SRM Institute of Science and Technology',
  description: 'Welcome to SRM Institute of Science and Technology. Explore our undergraduate, postgraduate, and doctoral programs.',
};

async function fetchCourses() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.results || [];
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

async function fetchNewsEvents() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/news-events/`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.results || [];
  } catch (error) {
    console.error("Error fetching news events:", error);
    return [];
  }
}

export default async function Page() {
  const coursesData = await fetchCourses();
  const newsEventsData = await fetchNewsEvents();

  return (
    <main className='w-full overflow-x-hidden'>
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
      <HomeSection6 />
      {/* Placement Partners Section */}
      <HomeSection7 />
      {/* Course Finder Section */}
      <HomeSection8 coursesData={coursesData} />
      {/* Campus Facilities Section */}
      <HomeSection9 />
      {/* News, Events & CTA Section */}
      <HomeSection10 newsEventsData={newsEventsData} />
    </main>
  )
}