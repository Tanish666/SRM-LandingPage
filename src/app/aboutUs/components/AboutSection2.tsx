'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection2 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-8xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-stretch">
                {/* Left Side: Image Content */}
                <div className="w-full lg:w-[42%] relative shrink-0">
                    <div className="relative w-full aspect-square rounded-[20px] overflow-hidden ">
                        {/* Placeholder for the main group image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src='ASec2Pic1.svg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    {/* Overlay Info Bar */}
                    <div className="absolute bottom-0 left-0 w-[90%] md:w-[89%]  rounded-tr-[50px] md:rounded-tr-[30px] flex items-center gap-5 md:gap-8 overflow-hidden pt-4">
                        <div className="flex items-center gap-2 md:gap-3 shrink-0">
                            {/* Logo Shapes */}
                            <div className="w-8 md:w-11 h-4 md:h-6 bg-[#FFD100]"></div>
                            <div className="w-6 md:w-10 h-4 md:h-6 bg-[#006BB3] -skew-x-[20deg]"></div>
                        </div>
                        <span className={`${marcellus.className} text-lg md:text-2xl text-[#000000] whitespace-normal md:whitespace-nowrap`}>
                            From house of SRM Trichy
                        </span>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:flex-1 flex flex-col items-start justify-center mt-8 lg:mt-0">
                    <div className="flex items-center gap-3 border border-[#DBDBDB] px-6 py-2 rounded-full mb-8 bg-[#F9F9F9] shrink-0 shadow-sm">
                        <span className="size-2.5 bg-[#0071BC] rounded-full"></span>
                        <span className="text-base text-[#000000]">About Us</span>
                    </div>

                    <div className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-6 leading-[1.2]`}>
                        <p>Shaping Healthcare Leaders</p>
                        <p>For A Better Tomorrow</p>
                    </div>

                    <p className="text-[#515151] text-base md:text-[17px] leading-relaxed mb-5 font-normal">
                        Welcome To SRM Institute Of Allied Health Sciences, A Pioneering Institution Where Academic Excellence Meets Clinical Innovation. Our Programs Are Designed To Empower Students With The Knowledge.
                    </p>

                    <p className="text-[#515151] text-base md:text-[17px] leading-relaxed mb-8 font-normal">
                        At SRM AHS, We Are Not Just A College — We Are A Vibrant Community Of Future Healthcare Professionals, Researchers, And Innovators. Join Us As We Redefine The Future Of Health And Wellness Through World-Class Education, Hands-On Training, And A Passion For Making A Difference.
                    </p>

                    {/* Stats Boxes */}
                    <div className="flex  items-center gap-8 w-full">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-b from-[#0071BC] to-[#0096FA] rounded-[5px] w-[90px] h-[90px] flex items-center justify-center shrink-0">
                                <span className={`${marcellus.className} text-white text-5xl`}>25</span>
                            </div>
                            <div className={`${marcellus.className} text-xl md:text-2xl leading-tight text-[#000000]`}>
                                Year of<br />Legacy
                            </div>
                        </div>

                        <div className="hidden sm:block w-[2.5px] h-20 bg-[#DBDBDB]"></div>

                        <div className="flex items-center gap-4">
                            <span className={`${marcellus.className} text-[#0071BC] text-6xl leading-none`}>18+</span>
                            <div className={`${marcellus.className} text-xl md:text-2xl leading-tight text-[#000000]`}>
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
