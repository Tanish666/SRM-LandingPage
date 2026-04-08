'use client'
import React from 'react'
import Image from 'next/image'
import SectionPill from '@/components/SectionPill'

const AboutSection2 = () => {
    return (
        <section className="py-10 md:py-24 px-6 md:px-20 max-w-8xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[42%] relative shrink-0">
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden ">
                        {/* Placeholder for the main group image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img loading="lazy" decoding="async" src='ASec2Pic1.svg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    {/* Overlay Info Bar */}
                    <div className="absolute bottom-0 left-0 w-[90%] md:w-[89%]  rounded-tr-[50px] md:rounded-tr-[30px] flex items-center gap-5 md:gap-8 overflow-hidden pt-4">
                        <div className="flex items-center gap-1 md:gap-1.5 shrink-0 ">
                            {/* Logo Shapes */}
                            <div className="w-12 md:w-24 h-4 md:h-6 bg-[#FFD100] skew-x-[15deg]"></div>
                            <div className="w-5 md:w-8 h-4 md:h-6 bg-[#006BB3] skew-x-[15deg]"></div>
                        </div>
                        <span className={`font-display text-lg md:text-2xl text-foreground whitespace-normal md:whitespace-nowrap`}>
                            From house of SRM Trichy
                        </span>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:flex-1 flex flex-col items-center md:items-start justify-center mt-8 lg:mt-0 text-center md:text-left">
                    <SectionPill text="About Us" className="mb-8" />

                    <div className={`font-display text-3xl md:text-5xl text-foreground mb-6 leading-[1.2]`}>
                        <p>Shaping Healthcare Leaders</p>
                        <p>For A Better Tomorrow</p>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-5 font-normal">
                        Welcome To SRM Institute Of Allied Health Sciences, A Pioneering Institution Where Academic Excellence Meets Clinical Innovation. Our Programs Are Designed To Empower Students With The Knowledge.
                    </p>

                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 font-normal">
                        At SRM AHS, We Are Not Just A College — We Are A Vibrant Community Of Future Healthcare Professionals, Researchers, And Innovators. Join Us As We Redefine The Future Of Health And Wellness Through World-Class Education, Hands-On Training, And A Passion For Making A Difference.
                    </p>

                    {/* Stats Boxes */}
                    <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 w-full flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-gradient-to-b from-[#0071BC] to-[#0096FA] rounded-md w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
                                <span className={`font-display text-white text-3xl md:text-5xl`}>25</span>
                            </div>
                            <div className={`font-display text-lg md:text-2xl leading-tight text-foreground text-left`}>
                                Year of<br />Legacy
                            </div>
                        </div>

                        <div className="hidden sm:block w-1 h-16 md:h-20 bg-[#DBDBDB]"></div>

                        <div className="flex items-center gap-3 md:gap-4">
                            <span className={`font-display text-[#0071BC] text-4xl md:text-6xl leading-none`}>18+</span>
                            <div className={`font-display text-lg md:text-2xl leading-tight text-foreground text-left`}>
                                Specialized<br />Programs
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection2
