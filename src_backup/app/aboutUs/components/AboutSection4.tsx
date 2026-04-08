'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import { Eye, Target } from 'lucide-react'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection4 = () => {
    return (
        <section className="relative mx-auto w-full max-w-8xl px-4 md:px-10 lg:px-20 mt-10 mb-10">
            <div className="bg-gradient-to-r from-[#0071BC] to-[#33AEFF] rounded-[30px] p-8 md:p-12 lg:p-16 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-xl h-full">

                {/* Vision Box */}
                <div className="bg-background rounded-[30px] px-6 py-8 md:px-10 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="text-[#46A2FF] w-12 md:w-auto">
                                <img loading="lazy" decoding="async" src="ASec4Svg1.svg" alt="" className="w-full h-auto" />
                            </div>
                            <h3 className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground capitalize`}>Vision</h3>
                        </div>
                        <p className={`${inter.className} text-muted-foreground capitalize text-sm md:text-base leading-relaxed`}>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className=" bg-background rounded-[30px] px-6 py-8 md:px-10 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="text-[#46A2FF] w-12 md:w-auto">
                                <img loading="lazy" decoding="async" src="ASec4Svg2.svg" alt="" className="w-full h-auto" />
                            </div>
                            <h3 className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground capitalize`}>Mission</h3>
                        </div>
                        <p className={`${inter.className} text-muted-foreground capitalize text-sm md:text-base leading-relaxed`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection4
