import React from 'react'
import AboutHero from '@/components/aboutUs/Hero'
import AboutSection2 from '@/components/aboutUs/About'
import AboutSection3 from '@/components/aboutUs/Stats'
import AboutSection4 from '@/components/aboutUs/VisionAndMission'
import AboutSection5 from '@/components/aboutUs/Accreditations'
import AboutSection6 from '@/components/aboutUs/OurLeadership'
import HeroSection4 from '@/components/home/WhyChooseSRM'
import AboutSection8 from '@/components/aboutUs/OurHistory'
import AboutSection9 from '@/components/aboutUs/OurFaculty'
import AboutSection10 from '@/components/aboutUs/Achivements'
import AboutSection11 from '@/components/aboutUs/OurPrinciples'
import AboutSection12 from '@/components/aboutUs/Enquiry'

const AboutUsPage = () => {
    return (
        <div className="flex flex-col w-full font-sans bg-white overflow-x-hidden">
            {/* Hero Section - Main landing banner with breadcrumbs */}
            <AboutHero />

            {/* About SRM AHS - Welcome message and institution legacy */}
            <AboutSection2 />

            {/* Impact & Stats - Key figures like programs, publications, and labs */}
            <AboutSection3 />

            {/* Vision & Mission - Institutional core values and goals */}
            <AboutSection4 />

            {/* Accreditations - Quality benchmarks and partner logos */}
            <AboutSection5 />

            {/* Our Leadership - Profiles of the institution's founders and leaders */}
            <AboutSection6 />

            {/* Why Choose SRM AHS - Key benefits like labs, training, and mentorship */}
            <HeroSection4 />

            {/* Our History - Timeline of the institution's growth and milestones */}
            <AboutSection8 />

            {/* Our Facilities - Showcasing campus resources like the library */}
            <AboutSection9 />

            {/* Achievements & Awards - Recognitions and honors received */}
            <AboutSection10 />

            {/* Our Principles - Core values and principles accordion */}
            <AboutSection11 />

            {/* Join Us CTA - Final call to action for enquiry and applications */}
            <AboutSection12 />
        </div>
    )
}

export default AboutUsPage