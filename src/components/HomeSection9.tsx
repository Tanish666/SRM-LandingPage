'use client'
import React from 'react'
import { Marquee } from './ui/marquee'
import Image from 'next/image'
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const HomeSection9 = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full bg-[#3EA1FF] min-h-[100vh]">
            {/* Left Column */}
            <div className="w-full lg:w-[45%] relative min-h-[600px] lg:min-h-screen flex items-end bg-gray-300 overflow-hidden">

                {/* Main Background Image - user will replace this */}
                <div className="absolute inset-0">
                    <Image src="/sec9Pic1.svg" alt="Students" layout="fill" objectFit="cover" />
                </div>

                {/* Gradient Overlay & Text Content */}
                <div className="relative w-full pt-10 pb-16 px-8 lg:px-14 flex flex-col items-start gap-4 z-10">
                    <div className='absolute top-0 left-0 w-full h-full bg-[#FFFFFFA8] backdrop-blur-sm -z-10' />
                    <h2 className={`text-4xl md:text-5xl lg:text-[54px] ${marcellus.className} leading-[1.1] text-black font-serif tracking-tight`}>
                        World Class Facilities
                    </h2>
                    <p className="text-gray-900 text-[15px] md:text-base max-w-[95%] leading-relaxed font-medium mt-2">
                        SRM College Of Allied Health Sciences Offers A Dynamic And Student-Focused Campus Designed To Nurture Academic Excellence And Holistic Development
                    </p>

                    <button className="mt-6 bg-[#FFD100] hover:bg-[#E6BC00] text-black font-medium text-lg rounded-full pl-8 pr-1 py-1 flex items-center gap-4 transition-all hover:scale-[1.03] active:scale-95 shadow-md">
                        <span>Explore Our Campus</span>
                        <div className="bg-white rounded-full p-2.5 flex items-center justify-center shadow-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[1px] -translate-y-[1px]">
                                <line x1="5" y1="19" x2="19" y2="5"></line>
                                <polyline points="9 5 19 5 19 15"></polyline>
                            </svg>
                        </div>
                    </button>
                </div>

            </div>

            {/* Right Column Grid */}
            <div className="w-full lg:w-[55%] px-10  flex relative overflow-hidden">

                {/* 2-Column Marquee Grid */}
                <div className="flex gap-4 sm:gap-6 w-full h-[120vh] relative z-10">

                    {/* First Column - Marquee Up */}
                    <Marquee vertical className="[--duration:30s] w-1/2" repeat={4}>
                        <FacilityCard
                            title="Open Stadium"
                            imgSrc="/sec9Pic2.svg"
                            heightClass="h-[200px] md:h-[240px] xl:h-[280px]"
                        />
                        <FacilityCard
                            title="Central Library"
                            imgSrc="/sec9Pic3.svg"
                            heightClass="h-[250px] md:h-[300px] xl:h-[340px]"
                        />
                        <FacilityCard
                            title="Sports Complex"
                            imgSrc="/sec9Pic4.svg"
                            heightClass="h-[200px] md:h-[240px] xl:h-[280px]"
                        />
                    </Marquee>

                    {/* Second Column - Marquee Down */}
                    <Marquee vertical reverse className="[--duration:35s] w-1/2" repeat={4}>
                        <FacilityCard
                            title="Computer Labs"
                            imgSrc="/sec9Pic5.svg"
                            heightClass="h-[230px] md:h-[270px] xl:h-[320px]"
                        />
                        <FacilityCard
                            title="Cafeteria"
                            imgSrc="/sec9Pic6.svg"
                            heightClass="h-[250px] md:h-[300px] xl:h-[340px]"
                        />
                        <FacilityCard
                            title="Modern Campus"
                            imgSrc="/sec9Pic7.svg"
                            heightClass="h-[170px] md:h-[210px] xl:h-[240px]"
                        />
                    </Marquee>

                </div>
            </div>
        </section>
    )
}

const FacilityCard = ({ title, heightClass, imgSrc }: { title?: string, heightClass: string, imgSrc: string }) => (
    <div className={`relative w-full ${heightClass} rounded-[10px] overflow-hidden shadow-xl group bg-blue-950 transition-all duration-300 hover:shadow-2xl`}>

        {/* Image */}
        <div className="absolute inset-0 bg-gray-500 group-hover:scale-[1.08] transition-transform duration-700 ease-in-out">
            <Image src={imgSrc} alt={title || "Facility"} layout="fill" objectFit="cover" />
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end justify-center pb-5 sm:pb-6 pointer-events-none">

            {title && (
                <div className="flex items-center w-full px-4 sm:px-6 gap-3">
                    <div className="h-[2px] flex-1 bg-[#FFD100]"></div>
                    <span className="text-white text-[13px] sm:text-[15px] lg:text-base font-medium whitespace-nowrap drop-shadow-md">
                        {title}
                    </span>
                    <div className="h-[2px] flex-1 bg-[#FFD100]"></div>
                </div>
            )}

        </div>
    </div>
)

export default HomeSection9