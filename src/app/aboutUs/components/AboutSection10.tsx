'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection10 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center relative overflow-hidden">

            <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 mb-16 text-center leading-tight max-w-2xl`}>
                Achievements & Awards
            </h2>

            <div className="w-full flex items-center justify-between gap-6 relative">

                {/* Left Arrow */}
                <button className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center text-slate-900 shadow-md hover:-translate-x-1 transition-transform z-10">
                    <ArrowLeft size={20} />
                </button>

                {/* Cards */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="bg-[#FFFDF4] border border-[#FDEB96] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm relative group hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden">
                            {/* Inner gradient shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/60 group-hover:opacity-100 opacity-0 transition-opacity"></div>

                            {/* Medal Icon placeholder */}
                            <div className="w-20 h-20 bg-[#FFF7C4] rounded-full flex items-center justify-center mb-6 relative z-10 p-2 shadow-inner border border-[#FCE15F]">
                                <div className="w-full h-full bg-[#FFD100] rounded-full flex items-center justify-center text-white p-2">
                                    {/* This could be a medal SVG, using placeholder text */}
                                    {/* <Image src="/medal.svg" ... /> */}
                                    <span className="text-xl font-serif">🏆</span>
                                </div>
                            </div>

                            <p className="text-slate-800 font-semibold text-[15.5px] max-w-[140px] leading-snug relative z-10">
                                Excellence Award 2024
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0073B4] flex items-center justify-center text-white shadow-md hover:translate-x-1 transition-transform z-10">
                    <ArrowRight size={20} />
                </button>

            </div>

        </section>
    )
}

export default AboutSection10
