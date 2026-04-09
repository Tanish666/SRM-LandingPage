'use client'
import React from 'react'
import { Marquee } from '@/components/ui/marquee'
import Image from 'next/image'

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
                <div className="relative w-full pt-10 pb-16 4xl:pb-32 px-8 lg:px-14 4xl:px-24 flex flex-col items-start gap-4 4xl:gap-8 z-10">
                    <div className='absolute inset-0 bg-gradient-to-b from-white/20 via-white/50 to-white/80 backdrop-blur-xl -z-10' />
                    <div className='absolute -left-10 top-0 w-72 h-72 bg-[#FFD100]/15 blur-[120px] rounded-full -z-10' />
                    <h2 className="text-4xl md:text-5xl lg:text-54px 3xl:text-65px 4xl:text-100px leading-[1.1] text-black tracking-tight">
                        World Class Facilities
                    </h2>
                    <p className="text-gray-900 text-15px md:text-base 3xl:text-xl 4xl:text-3xl max-w-[95%] leading-relaxed font-medium mt-2">
                        SRM College Of Allied Health Sciences Offers A Dynamic And Student-Focused Campus Designed To Nurture Academic Excellence And Holistic Development
                    </p>

                    <div className="mt-6 4xl:mt-12 4xl:scale-125 4xl:origin-left">
                        <button className="bg-[#FFD100] hover:bg-[#E6BC00] text-black font-medium text-lg rounded-full pl-8 pr-1 py-1 flex items-center gap-4 transition-all hover:scale-[1.03] active:scale-95 shadow-md">
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

            </div>

            {/* Right Column Grid */}
            <div className="w-full lg:w-[55%] px-4 lg:px-10 flex relative overflow-hidden">

                {/* Marquee Content */}
                <div className="w-full relative z-10">

                    {/* Mobile View - Horizontal Marquee */}
                    <div className="flex lg:hidden flex-col gap-6 w-full py-12">
                        <Marquee className="[--duration:25s] [--gap:1.5rem]" repeat={4}>
                            <FacilityCard
                                title="Open Stadium"
                                imgSrc="/sec9Pic2.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                            <FacilityCard
                                title="Central Library"
                                imgSrc="/sec9Pic3.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                            <FacilityCard
                                title="Sports Complex"
                                imgSrc="/sec9Pic4.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                        </Marquee>

                        <Marquee reverse className="[--duration:30s] [--gap:1.5rem]" repeat={4}>
                            <FacilityCard
                                title="Computer Labs"
                                imgSrc="/sec9Pic5.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                            <FacilityCard
                                title="Cafeteria"
                                imgSrc="/sec9Pic6.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                            <FacilityCard
                                title="Modern Campus"
                                imgSrc="/sec9Pic7.svg"
                                heightClass="h-[180px]"
                                widthClass="w-[280px]"
                            />
                        </Marquee>
                    </div>

                    {/* Desktop View - Vertical Marquee */}
                    <div className="hidden lg:flex gap-4 sm:gap-6 4xl:gap-12 w-full h-[120vh]">
                        {/* First Column - Marquee Up */}
                        <Marquee vertical className="[--duration:30s] w-1/2" repeat={4}>
                            <FacilityCard
                                title="Open Stadium"
                                imgSrc="/sec9Pic2.svg"
                                heightClass="h-[200px] md:h-[240px] xl:h-[280px] 3xl:h-[350px] 4xl:h-[500px]"
                            />
                            <FacilityCard
                                title="Central Library"
                                imgSrc="/sec9Pic3.svg"
                                heightClass="h-[250px] md:h-[300px] xl:h-[340px] 3xl:h-[420px] 4xl:h-[600px]"
                            />
                            <FacilityCard
                                title="Sports Complex"
                                imgSrc="/sec9Pic4.svg"
                                heightClass="h-[200px] md:h-[240px] xl:h-[280px] 3xl:h-[350px] 4xl:h-[500px]"
                            />
                        </Marquee>

                        {/* Second Column - Marquee Down */}
                        <Marquee vertical reverse className="[--duration:35s] w-1/2" repeat={4}>
                            <FacilityCard
                                title="Computer Labs"
                                imgSrc="/sec9Pic5.svg"
                                heightClass="h-[230px] md:h-[270px] xl:h-[320px] 3xl:h-[400px] 4xl:h-[550px]"
                            />
                            <FacilityCard
                                title="Cafeteria"
                                imgSrc="/sec9Pic6.svg"
                                heightClass="h-[250px] md:h-[300px] xl:h-[340px] 3xl:h-[420px] 4xl:h-[600px]"
                            />
                            <FacilityCard
                                title="Modern Campus"
                                imgSrc="/sec9Pic7.svg"
                                heightClass="h-[170px] md:h-[210px] xl:h-[240px] 3xl:h-[300px] 4xl:h-[450px]"
                            />
                        </Marquee>
                    </div>

                </div>
            </div>
        </section>
    )
}

const FacilityCard = ({ title, heightClass, imgSrc, widthClass = "w-full" }: { title?: string, heightClass: string, imgSrc: string, widthClass?: string }) => (
    <div className={`relative ${widthClass} ${heightClass} rounded-[10px] 4xl:rounded-[20px] overflow-hidden shadow-xl group bg-blue-950 transition-all duration-300 hover:shadow-2xl`}>

        {/* Image */}
        <div className="absolute inset-0 bg-gray-500 group-hover:scale-[1.08] transition-transform duration-700 ease-in-out">
            <Image src={imgSrc} alt={title || "Facility"} layout="fill" objectFit="cover" />
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] 4xl:h-[40%] bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end justify-center pb-5 sm:pb-6 4xl:pb-12 pointer-events-none">

            {title && (
                <div className="flex items-center w-full px-4 sm:px-6 4xl:px-12 gap-3 4xl:gap-6">
                    <div className="h-[2px] flex-1 bg-[#FFD100]"></div>
                    <span className="text-white text-13px sm:text-15px lg:text-base 3xl:text-xl 4xl:text-3xl font-medium lg:whitespace-nowrap drop-shadow-md">
                        {title}
                    </span>
                    <div className="h-[2px] flex-1 bg-[#FFD100]"></div>
                </div>
            )}

        </div>
    </div>
)


export default HomeSection9