'use client'
import React from 'react'
const AcademicsHero = () => {
    return (
        <section className="relative w-full h-100 3xl:h-160 4xl:h-200 flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 mt-5">
            <div className="absolute inset-0 bg-navy-900 overflow-hidden mx-4 md:mx-10 rounded-brand-pill 3xl:rounded-brand-md 4xl:rounded-brand-lg">
                <img loading="lazy" decoding="async" src="/ASec1Pic1.svg" alt="Admission Hero Background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full h-full justify-end pb-12 3xl:pb-24 4xl:pb-32 pl-10 lg:pl-0">
                <h1 className="text-white text-display-4  md:text-display-3 3xl:text-100px 4xl:text-display-1 mb-6 4xl:mb-10 font-light font-heading leading-tight">
                    Academics
                </h1>
                <div className="flex items-center gap-2 3xl:gap-4 4xl:gap-6 bg-white rounded-full px-5 py-3 3xl:px-8 3xl:py-5 4xl:px-14 4xl:py-8 shadow-sm text-subText">
                    <span className="text-navy-900 uppercase">Home</span>
                    <span className="size-4 3xl:size-6 4xl:size-8 rounded-full bg-brand-yellow" />
                    <span className="text-navy-900 uppercase ">ACADEMICS</span>
                </div>
            </div>
        </section>
    )
}

export default AcademicsHero
