'use client'
import React from 'react'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

const AboutSection2 = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
                <div className="flex flex-col lg:flex-row gap-16 3xl:gap-32 lg:items-center 4xl:items-stretch">
                    {/* Left Side: Image Content */}
                    <div className="w-full lg:w-[42%] 4xl:w-[50%] relative shrink-0">
                        <div className="relative w-full aspect-square  4xl:h-full rounded-brand-pill 4xl:rounded-brand-lg overflow-hidden ">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img loading="lazy" decoding="async" src='ASec2Pic1.svg' className='w-full h-full object-cover' alt="About Image" />
                            </div>
                        </div>
                        {/* Overlay Info Bar */}
                        <div className="absolute bottom-0 left-0 w-[95%] rounded-tr-brand-pill flex items-center gap-5 md:gap-8 overflow-hidden pt-4 lg:pt-8">
                            <div className="flex items-center gap-1 md:gap-1.5 shrink-0 ">
                                <div className="w-12 md:w-24 4xl:w-40 h-4 md:h-6 4xl:h-10 bg-brand-yellow skew-x-[15deg]"></div>
                                <div className="w-5 md:w-8 4xl:w-12 h-4 md:h-6 4xl:h-10 bg-brand-blue-dark skew-x-[15deg]"></div>
                            </div>
                            <span className="font-heading text-18px md:text-24px 3xl:text-28px 4xl:text-48px text-navy-900 whitespace-normal md:whitespace-nowrap">
                                From house of SRM Trichy
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:flex-1 flex flex-col items-center md:items-start justify-center mt-8 lg:mt-0 text-center md:text-left">
                        <SectionPill text="About Us" className="mb-8 4xl:mb-16" />

                        <h1 className="font-heading text-headText leading-[1.1] text-navy-900 mb-6 4xl:mb-12 break-words">
                            <span className="4xl:whitespace-nowrap">Shaping Healthcare Leaders</span> <br /> For A Better Tomorrow
                        </h1>

                        <p className="text-navy-800/70 text-body text-subText leading-relaxed mb-5 4xl:mb-10 font-normal">
                            Welcome To SRM Institute Of Allied Health Sciences, A Pioneering Institution Where Academic Excellence Meets Clinical Innovation. Our Programs Are Designed To Empower Students With The Knowledge.
                        </p>

                        <p className="text-navy-800/70 text-body text-subText leading-relaxed mb-8 4xl:mb-16 font-normal">
                            At SRM AHS, We Are Not Just A College — We Are A Vibrant Community Of Future Healthcare Professionals, Researchers, And Innovators. Join Us As We Redefine The Future Of Health And Wellness Through World-Class Education, Hands-On Training, And A Passion For Making A Difference.
                        </p>

                        {/* Stats Boxes */}
                        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 4xl:gap-16 w-full flex-wrap sm:flex-nowrap">
                            <div className="flex items-center gap-3 md:gap-4 4xl:gap-8">
                                <div className="bg-gradient-to-b from-brand-blue-dark to-brand-blue-bright rounded-md w-20 h-20 md:w-24 md:h-24 3xl:w-32 3xl:h-32 4xl:w-40 4xl:h-40 flex items-center justify-center shrink-0">
                                    <span className="font-heading text-white text-28px md:text-48px 3xl:text-65px 4xl:text-100px">25</span>
                                </div>
                                <div className="font-heading text-18px md:text-24px 3xl:text-28px 4xl:text-2-75rem leading-tight text-navy-900 text-left">
                                    Year of<br />Legacy
                                </div>
                            </div>

                            <div className="hidden sm:block w-[2px] h-16 md:h-20 3xl:h-24 4xl:h-32 bg-brandBorder"></div>

                            <div className="flex items-center gap-3 md:gap-4 4xl:gap-8">
                                <span className="font-heading text-brand-blue-dark text-38px md:text-65px 3xl:text-70px 4xl:text-100px leading-none">18+</span>
                                <div className="font-heading text-18px md:text-24px 3xl:text-28px 4xl:text-2-75rem leading-tight text-navy-900 text-left">
                                    Specialized<br />Programs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection2
