'use client'
import React from 'react'
import {
    Marcellus, Inter

} from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})
const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptHeroSection = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-start overflow-hidden px-4 md:px-20 mt-5">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-2 md:mx-5 rounded-[20px]">

                {/* Fallback pattern or image could go here */}
                <img src="/ASec1Pic1.svg" className="w-full h-full object-cover" />
            </div>

            <div className="absolute z-20 flex flex-col items-start w-full bottom-8 md:bottom-14 px-4 md:px-0 md:left-[60px] lg:left-[80px]">
                <h1 className={`${marcellus.className} text-white text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 font-light text-left`}>
                    Cardiac Care Technology
                </h1>
                <div className={`${inter.className} inline-flex flex-wrap items-center justify-start gap-x-2 gap-y-1 bg-white/95 rounded-full px-4 py-2 md:px-5 md:py-3 shadow-sm font-normal text-xs md:text-base max-w-[280px] md:max-w-none`}>
                    <span className="text-black font-normal">HOME</span>
                    <span className="size-[8px] md:size-[16px] rounded-full bg-[#FFD812]" />
                    <span className="text-black font-normal">DEPARTMENT PAGE</span>
                    <span className="size-[8px] md:size-[16px] rounded-full bg-[#FFD812]" />
                    <span className="text-black font-normal">CARDIAC CARE TECHNOLOGY</span>
                </div>
            </div>
        </section>
    )
}

export default DeptHeroSection;