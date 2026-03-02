'use client'

import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const HomeSection2 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-[1450px] mx-auto overflow-hidden">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-20">
                <div className="flex items-center gap-2.5 border border-slate-200 px-5 py-2 rounded-full mb-8 bg-white/50 backdrop-blur-sm shadow-sm">
                    <span className="size-2 bg-[#0066FF] rounded-full"></span>
                    <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">About Us</span>
                </div>

                <h2 className={`${marcellus.className} text-4xl md:text-5xl lg:text-[45px] text-slate-900 mb-8 leading-tight whitespace-nowrap text-center w-full max-w-none`}>
                    Shaping Healthcare Leaders For A Better Tomorrow
                </h2>

                <p className="text-slate-500/90 max-w-5xl text-lg md:text-[17px] leading-relaxed font-light">
                    Welcome To SRM Institute Of Allied Health Sciences, A Pioneering Institution Where Academic Excellence Meets Clinical Innovation. Our Programs Are Designed To Empower Students
                </p>
            </div>

            {/* Cards Grid with Staggered Layout */}
            <div className="relative">
                {/* Centered Read More Button - Absolutely positioned to float in the center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 md:-translate-y-12 z-20">
                    <button className="group flex items-center gap-3 bg-[#FCF01E] pl-8 pr-2 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <span className="font-semibold text-slate-900 text-lg">Read More</span>
                        <div className="bg-white rounded-full p-2 group-hover:bg-slate-50 transition-colors">
                            <ArrowUpRight className="size-6 text-slate-900" />
                        </div>
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-20 max-w-6xl mx-auto px-4 md:px-0">
                    {/* Card 1: Leftmost (High) */}
                    <div className="lg:translate-y-0 shrink-0">
                        <Card
                            number="25"
                            text="Year of Legacy"
                            imageSrc="/sec2Pic1.svg"
                        />
                    </div>

                    {/* Card 2: Center-Left (Low) */}
                    <div className="lg:translate-y-20 shrink-0">
                        <Card
                            number="100+"
                            text="Research Publications Annually"
                            imageSrc="/sec2PIc2.svg"
                        />
                    </div>

                    {/* Card 3: Center-Right (Low) */}
                    <div className="lg:translate-y-20 shrink-0">
                        <Card
                            number="25"
                            text="Experienced Faculty Members"
                            imageSrc="/sec2Pic3.svg"
                        />
                    </div>

                    {/* Card 4: Rightmost (High) */}
                    <div className="lg:translate-y-0 shrink-0">
                        <Card
                            number="18+"
                            text="Specialized Programs"
                            imageSrc="/sec2Pic4.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Card = ({ number, text, imageSrc, className }: { number: string, text: string, imageSrc: string, className?: string }) => (
    <div className={`group relative rounded-[7.7px] overflow-hidden bg-slate-100 cursor-pointer w-[221.88px] h-[231.89px] ${className || ''}`}>
        {/* Background Image */}
        <Image
            src={imageSrc}
            alt={text}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-colors duration-300 group-hover:bg-slate-900/5 z-0" />

        {/* Text Content */}
        <div className="absolute bottom-5 left-5 z-20 text-white max-w-[85%]">
            <h3 className={`${marcellus.className} text-3xl md:text-4xl lg:text-5xl mb-1`}>
                {number}
            </h3>
            <p className="text-sm md:text-base font-light leading-snug">
                {text}
            </p>
        </div>

        {/* Hover Effect Light */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
    </div>
)

export default HomeSection2

