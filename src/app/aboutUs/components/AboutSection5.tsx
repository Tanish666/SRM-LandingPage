'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'

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
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">

            <SectionPill text="Accreditations" className="mb-6" />

            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-16 text-center leading-tight max-w-2xl`}>
                Accredited For Excellence In Technical Education
            </h2>

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 gap-4">
                <button className="flex items-center justify-center text-[#000000] hover:text-blue-600 transition-colors shrink-0">
                    <ChevronLeft className="size-10 font-thin" strokeWidth={1.5} />
                </button>

                <div className="flex-1 flex flex-wrap justify-center items-center gap-10 md:gap-24 py-4">
                    {marqueeLogos.map((logo, idx) => (
                        <div key={idx} className="w-[140px] md:w-[200px] flex items-center justify-center">
                            <img src={`/${logo}`} alt={`Logo ${idx}`} className="max-w-full max-h-[190px] object-contain" />
                        </div>
                    ))}
                </div>

                <button className="flex items-center justify-center text-[#000000] hover:text-blue-600 transition-colors shrink-0">
                    <ChevronRight className="size-10 font-extralight" strokeWidth={1.5} />
                </button>
            </div>
        </section>
    )
}

export default AboutSection5

