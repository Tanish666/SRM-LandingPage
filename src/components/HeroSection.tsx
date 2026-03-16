'use client'

import React from 'react'
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { Marcellus } from 'next/font/google'
import { Play, ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const HeroSection = () => {
    return (
        <section className='relative min-h-[85vh] py-7 lg:py-0 flex items-center bg-[url("/HeroSectionBg.gif")] bg-cover bg-center px-6 md:px-20 overflow-hidden mx-6 md:mx-5 rounded-[1.5rem] mt-3'>
            <div className='max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 lg:py-20'>
                {/* Hero Text Content */}
                <div className='flex-1 lg:max-w-[55%] z-10'>
                    <h1 className={`${marcellus.className} text-5xl md:text-7xl lg:text-[4rem] leading-[1.05] text-slate-900 mb-8 tracking-tight`}>
                        Shaping Healthcare <br className='hidden md:block' /> Leaders of Tomorrow
                    </h1>
                    <p className='text-lg md:text-[1.35rem] text-slate-500/90 mb-12 max-w-[550px] leading-relaxed'>
                        Immerse Yourself In A Dynamic Learning Environment Dedicated To Excellence In Healthcare Education.
                    </p>

                    {/* Explore Now Button */}
                    <button className='group flex items-center gap-6 bg-white/60 backdrop-blur-md border border-white/50 pl-10 pr-2 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300'>
                        <span className='font-medium text-slate-800 text-lg'>Explore Now</span>
                        <div className='p-1 bg-[#F7E707] rounded-full shadow-md group-hover:bg-[#eadd00] transition-colors duration-300'>
                            <IconArrowNarrowRight stroke={1} size={40} className='rotate-[-30deg]' />
                        </div>
                    </button>
                </div>

                {/* Hero Image Section */}
                <div className='relative flex-1 w-full'>
                    <div className='relative rounded-[4rem] perspective-1000'>
                        <img
                            src="/srmHero.svg"
                            alt="SRM Campus"
                            className='w-full h-auto object-cover transform transition-transform duration-1000'
                        />

                        {/* Play Video Overlay */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <button className='w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-[6px] border border-white rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-white/0 group/play shadow-2xl'>
                                <div className='w-16 h-16 md:w-24 md:h-24  rounded-full flex items-center justify-center'>
                                    <Play className='size-10 md:size-14 text-white fill-white ml-1.5' />
                                </div>
                            </button>
                        </div>

                        {/* Program Offered Badge */}
                        <div className='absolute bottom-2 -right-10 md:bottom-8 md:-right-7 z-20'>
                            <div className='relative group/program'>
                                <div className='absolute size-14 md:size-20 -z-10 bg-white rounded-full -top-2 md:-top-3.5 -left-2.5 md:-left-4 group-hover/program:bg-[#FFEB3B] transition-all duration-500' />
                                <div className='flex items-center gap-1.5 md:gap-2 pr-5 md:pr-8 py-1.5 rounded-full transition-all duration-500 cursor-pointer '>
                                    <div className=''>
                                        <IconArrowNarrowRight stroke={1} className='w-8 h-8 md:w-10 md:h-10 rotate-[-35deg]' />
                                    </div>
                                    <span className='text-[13px] md:text-lg font-semibold text-slate-600 tracking-tight whitespace-nowrap group-hover/program:text-black transition-all duration-500'>Program Offered</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative reflection/glow */}
                    <div className='absolute -inset-4 bg-gradient-to-tr from-blue-400/10 to-transparent blur-3xl -z-10 rounded-full'></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
