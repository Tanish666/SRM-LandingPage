'use client'
import React from 'react'
const AcademicsHero = () => {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-start overflow-hidden px-16 md:px-20 mt-5 md:mt-2">
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-5 rounded-3xl">
                <img loading="lazy" decoding="async" src="/ASec1Pic1.svg" alt="Admission Hero Background" className="w-full h-full object-cover" />
            </div>

            <div className="absolute z-20 flex flex-col items-start max-w-7xl w-full bottom-14">
                <h1 className={`font-display text-white text-4xl sm:text-5xl md:text-7xl mb-6 font-light drop-shadow-lg`}>
                    Admission
                </h1>
                <div className="flex items-center gap-2 bg-white/95 rounded-full px-5 py-3 shadow-sm text-sm">
                    <span className="text-foreground uppercase">Home</span>
                    <span className="size-[15px] rounded-full bg-[#FFD812]" />
                    <span className="text-foreground uppercase">ADMISSION</span>
                </div>
            </div>
        </section>
    )
}

export default AcademicsHero
