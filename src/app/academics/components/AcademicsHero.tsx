'use client'
import React from 'react'
const AcademicsHero = () => {
    return (
        <section className="relative w-full h-[400px] 3xl:h-[600px] 4xl:h-[800px] flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 mt-5">
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-4 md:mx-10 rounded-[2rem] 3xl:rounded-[3.5rem] 4xl:rounded-[5rem]">
                <img loading="lazy" decoding="async" src="/ASec1Pic1.svg" alt="Admission Hero Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full h-full justify-end pb-12 3xl:pb-24 4xl:pb-32">
                <h1 className={"text-white text-4xl sm:text-5xl md:text-7xl 3xl:text-8xl 4xl:text-[10rem] mb-6 4xl:mb-12 font-light drop-shadow-lg"}>
                    Academics
                </h1>
                <div className="flex items-center gap-2 3xl:gap-4 4xl:gap-6 bg-white/95 rounded-full px-5 py-3 3xl:px-8 3xl:py-5 4xl:px-14 4xl:py-8 shadow-sm text-sm 3xl:text-xl 4xl:text-3xl">
                    <span className="text-black uppercase">Home</span>
                    <span className="size-[15px] 3xl:size-[22px] 4xl:size-[30px] rounded-full bg-[#FFD812]" />
                    <span className="text-black uppercase font-bold">ACADEMICS</span>
                </div>
            </div>
        </section>
    )
}

export default AcademicsHero
