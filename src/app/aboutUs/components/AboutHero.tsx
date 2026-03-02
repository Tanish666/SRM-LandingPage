'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutHero = () => {
    return (
        <section className="relative w-full h-[400px] flex items-center justify-start overflow-hidden px-8 md:px-20">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-5 rounded-[20px]">

                {/* Fallback pattern or image could go here */}
                <img src="/ASec1Pic1.svg" className="w-full h-full object-cover" />
            </div>

            <div className="absolute z-20 flex flex-col items-start max-w-7xl  w-full bottom-14 ">
                <h1 className={`${marcellus.className} text-white text-5xl md:text-7xl mb-6 font-light`}>
                    About Us
                </h1>
                <div className="flex items-center gap-2 bg-white/95 rounded-full px-5 py-3 shadow-sm font-medium text-sm">
                    <span className="text-gray-900">Home</span>
                    <span className="size-[15px] rounded-full bg-[#FFD812]" />
                    <span className="text-gray-500">ABOUT US</span>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
