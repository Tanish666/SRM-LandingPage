'use client'
import React from 'react'
const AboutHero = () => {
    return (
        <section className="relative w-full h-[400px] 3xl:h-[500px] 4xl:h-[650px] flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 mt-5">
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-4 md:mx-10 rounded-[2rem]">
                <img loading="lazy" decoding="async" src="/ASec1Pic1.svg" className="w-full h-full object-cover" alt="About Hero" />
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full h-full justify-end pb-12 4xl:pb-24">
                <h1 className={"text-white text-4xl sm:text-5xl md:text-7xl 3xl:text-8xl 4xl:text-[9rem] mb-6 4xl:mb-10 font-light"}>
                    About Us
                </h1>
                <div className="flex items-center gap-2 bg-white/95 rounded-full px-5 py-3 4xl:px-8 4xl:py-5 shadow-sm text-sm 3xl:text-base 4xl:text-xl">
                    <span className="text-black uppercase">Home</span>
                    <span className="size-[15px] 4xl:size-6 rounded-full bg-[#FFD812]" />
                    <span className="text-black uppercase">ABOUT US</span>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
