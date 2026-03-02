import React from 'react'
import AboutHero from './components/AboutHero'
import AboutSection2 from './components/AboutSection2'
import AboutSection3 from './components/AboutSection3'
import AboutSection4 from './components/AboutSection4'
import AboutSection5 from './components/AboutSection5'
import AboutSection6 from './components/AboutSection6'
import HeroSection4 from '@/components/HeroSection4'
import AboutSection8 from './components/AboutSection8'
import AboutSection9 from './components/AboutSection9'
import AboutSection10 from './components/AboutSection10'
import AboutSection11 from './components/AboutSection11'
import AboutSection12 from './components/AboutSection12'

const AboutUsPage = () => {
    return (
        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden">
            <AboutHero />
            <AboutSection2 />
            <AboutSection3 />
            <AboutSection4 />
            <AboutSection5 />
            <AboutSection6 />
            <HeroSection4 />
            <AboutSection8 />
            <AboutSection9 />
            <AboutSection10 />
            <AboutSection11 />
            <AboutSection12 />
        </div>
    )
}

export default AboutUsPage