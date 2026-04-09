'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { Eye, Target } from 'lucide-react'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection4 = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full bg-gradient-to-r from-brand-blue-dark to-brand-blue-bright rounded-brand-pill 4xl:rounded-brand-lg p-8 md:p-12 lg:p-16 3xl:p-24 4xl:p-36 flex flex-col lg:flex-row gap-8 lg:gap-12 4xl:gap-24 shadow-xl h-full">

                {/* Vision Box */}
                <div className="bg-white rounded-brand-pill 4xl:rounded-brand-md px-6 py-8 md:px-10 md:py-10 3xl:px-16 3xl:py-16 4xl:px-24 4xl:py-24 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 4xl:gap-10 mb-6 md:mb-8 4xl:mb-12">
                            <div className="text-brand-blue-bright w-12 md:w-auto 3xl:scale-110 4xl:scale-150 origin-left">
                                <img loading="lazy" decoding="async" src="ASec4Svg1.svg" alt="" className="w-full h-auto" />
                            </div>
                            <h3 className="text-28px md:text-h2 lg:text-h1 3xl:text-65px 4xl:text-display-2 text-navy-900 capitalize font-heading font-normal leading-tight">Vision</h3>
                        </div>
                        <p className={`${inter.className} text-navy-800/70 capitalize text-15px md:text-body 3xl:text-20px 4xl:text-24px leading-relaxed font-medium`}>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-brand-pill 4xl:rounded-brand-md px-6 py-8 md:px-10 md:py-10 3xl:px-16 3xl:py-16 4xl:px-24 4xl:py-24 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 4xl:gap-10 mb-6 md:mb-8 4xl:mb-12">
                            <div className="text-brand-blue-bright w-12 md:w-auto 3xl:scale-110 4xl:scale-150 origin-left">
                                <img loading="lazy" decoding="async" src="ASec4Svg2.svg" alt="" className="w-full h-auto" />
                            </div>
                            <h3 className="text-28px md:text-h2 lg:text-h1 3xl:text-65px 4xl:text-display-2 text-navy-900 capitalize font-heading font-normal leading-tight">Mission</h3>
                        </div>
                        <p className={`${inter.className} text-navy-800/70 capitalize text-15px md:text-body 3xl:text-20px 4xl:text-24px leading-relaxed font-medium`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection4
