'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection5 = () => {
    const marqueeLogos = [
        "ASec5Logo1.svg",
        "ASec5Logo2.svg",
        "ASec5Logo3.svg",
        "ASec5Logo4.svg",
    ]

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center">

            <div className="flex items-center gap-2.5 bg-[#F9F9F9]/90 border border-[#DBDBDB] px-5 py-2 rounded-full mb-6 bg-white shrink-0 shadow-sm">
                <span className="size-2 bg-[#0066FF] rounded-full"></span>
                <span className="text-sm font-medium text-slate-800 tracking-wide ">Accreditations</span>
            </div>

            <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 mb-16 text-center leading-tight max-w-2xl`}>
                Accredited For Excellence In Technical Education
            </h2>

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
                <button className="flex items-center justify-center text-slate-800 hover:text-blue-600 transition-colors">
                    <ChevronLeft className="size-10 font-thin" strokeWidth={1} />
                </button>

                <div className="flex-1 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {marqueeLogos.map((logo, idx) => (
                        <div key={idx} className="w-[140px] md:w-[220px] h-auto flex items-center justify-center">
                            <img src={`/${logo}`} alt={`Logo ${idx}`} className="max-w-full max-h-[80px] object-contain" />
                        </div>
                    ))}
                </div>

                <button className="flex items-center justify-center text-slate-800 hover:text-blue-600 transition-colors">
                    <ChevronRight className="size-10 font-extralight" strokeWidth={1} />
                </button>
            </div>
        </section>
    )
}

export default AboutSection5

