'use client'

import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

export default function HeroSection5() {
    return (
        <section className="py-24 px-6 md:px-20 max-w-[1450px] mx-auto overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-10 lg:gap-14 max-w-7xl mx-auto items-start">

                {/* Left Column: Latest News */}
                <div className="bg-[#FFFDF1] rounded-lg overflow-hidden flex flex-col lg:h-[520px] h-auto pb-4">
                    <div className="bg-[#FFD700] rounded-lg py-2 text-center shadow-sm z-10 mx-1">
                        <h3 className={`${marcellus.className} text-[28px] text-[#000000] tracking-wide`}>Latest News</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto px-7 py-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FFD700] [&::-webkit-scrollbar-thumb]:rounded-full">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={item} className={`mb-5 pb-5 ${index !== 3 ? 'border-b border-yellow-200/60' : ''}`}>
                                <p className="text-[14px] text-slate-600 mb-2.5 leading-relaxed pr-2">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt
                                </p>
                                <button className="flex items-center gap-1.5 text-[12px] text-slate-500 hover:text-slate-800 transition-colors group">
                                    Read More
                                    <span className="bg-[#FFD700] rounded-full p-[2px] ml-1 group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="size-[10px] text-slate-900" strokeWidth={2} />
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Insights */}
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                        <h2 className={`${marcellus.className} text-[38px] lg:text-[44px] text-slate-900 leading-[1.1]`}>
                            Insights From Our Learners
                        </h2>
                        <div className="flex gap-3 pb-1">
                            <button className="bg-[#FFD700] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors shrink-0">
                                <IconArrowNarrowLeft className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                            <button className="bg-[#0073CF] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shrink-0">
                                <IconArrowNarrowRight className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6 lg:h-[400px] h-auto">

                        {/* Stacked Images */}
                        <div className="flex flex-col gap-3 h-full">
                            {/* Top */}
                            <div className="relative w-full h-[90px] rounded-[20px] overflow-hidden group">
                                <Image src="/sec5Pic1.svg" alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                    <h4 className={`${marcellus.className} text-white font-extralight text-[24px] leading-tight`}>Saranya Mohan</h4>
                                    <p className="text-white/80 text-[12px] mt-0.5">B.Sc Cardiac Care Technology</p>
                                </div>
                            </div>
                            {/* Middle */}
                            <div className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                                <Image src="/sec5Pic3.svg" alt="Student" fill className="object-cover" />
                            </div>
                            {/* Bottom */}
                            <div className="relative w-full h-[90px] rounded-2xl overflow-hidden group">
                                <Image src="/sec5Pic2.svg" alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                    <h4 className={`${marcellus.className} text-white  text-[24px] leading-tight`}>Saranya Mohan</h4>
                                    <p className="text-white/80 text-[12px] mt-0.5">B.Sc Cardiac Care Technology</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote Card */}
                        <div className="relative border border-slate-300/80 rounded-[24px] p-8 lg:p-10 h-full flex flex-col justify-center bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] overflow-hidden group">
                            {/* Quotes Blocks */}
                            <div className="absolute top-10 left-10 flex gap-[12px] z-0">
                                <img src="sec5SVG.svg" alt="" />
                                <img src="sec5SVG.svg" alt="" />
                            </div>
                            <div className="relative z-10">
                                <p className="text-[#64748B] text-[15px] lg:text-[15.5px] leading-[1.8] mb-8 group-hover:text-slate-700 transition-colors w-full sm:w-[95%]">
                                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur.
                                </p>
                                <div className="flex flex-col mt-auto">
                                    <span className={`${marcellus.className} text-[#3695EB] text-[22px] font-medium mb-0.5`}>Swetha</span>
                                    <span className="text-slate-500 text-[14.5px]">B.Sc Cardiac Care Technology</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}