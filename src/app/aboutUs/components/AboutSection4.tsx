'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { Eye, Target } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection4 = () => {
    return (
        <section className="max-w-[96%] mx-auto w-full">
            <div className="bg-gradient-to-r from-[#0071BC] to-[#33AEFF] rounded-[30px] p-12 md:p-20 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 shadow-xl">

                {/* Vision Box */}
                <div className="bg-white rounded-[30px] px-10 py-8 md:px-10 md:py-10 shadow-none flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-[#46A2FF]">
                                <img src="ASec4Svg1.svg" alt="" />
                            </div>
                            <h3 className={`${marcellus.className} text-4xl text-slate-900`}>Vision</h3>
                        </div>
                        <p className="text-slate-600 leading-8 text-[17px]">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className=" bg-white rounded-[30px] px-10 py-8 md:px-14 md:py-10 shadow-none flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-[#46A2FF]">
                                <img src="ASec4Svg2.svg" alt="" />
                            </div>
                            <h3 className={`${marcellus.className} text-4xl text-slate-900`}>Mission</h3>
                        </div>
                        <p className="text-slate-600 leading-8 text-[17px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection4
