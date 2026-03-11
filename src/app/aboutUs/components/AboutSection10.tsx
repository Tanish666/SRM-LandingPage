'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection10 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center relative overflow-hidden">
            <SectionPill text="Achievements" className="mb-8" />

            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-16 text-center leading-tight max-w-2xl`}>
                Achievements & Awards
            </h2>

            <div className="w-full flex items-center justify-between gap-6 relative">

                {/* Left Arrow */}
                <button className="absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center text-[#ffffff]  shadow-md hover:-translate-x-1 transition-transform z-10">
                    <ArrowLeft size={20} />
                </button>

                {/* Cards */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
                    {[
                        {
                            img: "/ASec10Svg1.svg",
                            title: ""
                        },
                        {
                            img: "/ASec10Svg2.png",
                            title: ""
                        },
                        {
                            img: "/ASec10Svg3.svg",
                            title: ""
                        },
                        {
                            img: "/ASec10Svg4.svg",
                            title: ""
                        },
                    ].map((num, idx) => (
                        <div key={idx} className="bg-[#FFF7C7] border border-[#FDEB96] rounded-[10px] p-8 flex flex-col items-center justify-center text-center shadow-sm relative group hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden w-full max-w-[260px] h-[191px] mx-auto">
                            <img src={num.img} alt="" className="max-w-full h-auto" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button className="absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0073B4] flex items-center justify-center text-white shadow-md hover:translate-x-1 transition-transform z-10">
                    <ArrowRight size={20} />
                </button>

            </div>

        </section>
    )
}

export default AboutSection10
