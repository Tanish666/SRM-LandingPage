'use client'
import React from 'react'
const AboutHero = () => {
    return (
        <section className="relative w-full h-100 3xl:h-120 4xl:h-160 flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 mt-5">
            <div className="absolute inset-0 bg-navy-900 overflow-hidden mx-4 md:mx-10 rounded-brand-pill">
                <img loading="lazy" decoding="async" src="/ASec1Pic1.svg" className="w-full h-full object-cover" alt="About Hero" />
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full h-full justify-end pb-12 4xl:pb-24 pl-4 md:pl-0 lg:pl-0">
                <h1 className={"text-white text-heroText mb-6 4xl:mb-10 font-light font-heading leading-tight"}>
                    About Us
                </h1>
                <div className="flex items-center gap-2 bg-white rounded-full px-5 py-3 4xl:px-8 4xl:py-5 shadow-sm text-subText">
                    <span className="text-navy-900 uppercase">Home</span>
                    <span className="size-4 4xl:size-8 rounded-full bg-brand-yellow" />
                    <span className="text-navy-900 text-subText uppercase">ABOUT US</span>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
