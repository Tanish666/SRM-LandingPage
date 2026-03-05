'use client'

import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import CTAButton from './ui/CTA'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const programs = [
    { id: 1, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 2, name: 'B.Sc Clinical Psychology' },
    { id: 3, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 4, name: 'B.Sc Medical Imaging Technology' },
    { id: 5, name: 'B.Sc Physician Assistant' },
]

export default function HomeSection3() {
    const [activeTab, setActiveTab] = useState('Under Graduate')
    const [activeProgram, setActiveProgram] = useState(2)

    return (
        <section className="py-24 px-6 md:px-20 max-w-[1450px] mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr_1.5fr] gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2.5 border border-slate-200 px-5 py-2 rounded-full mb-8 bg-white text-sm shadow-sm">
                        <span className="size-2 bg-[#0066FF] rounded-full"></span>
                        <span className="text-[#000000]">Program Offered</span>
                    </div>

                    <h2 className={`${marcellus.className} text-4xl md:text-5xl lg:text-[45px] text-slate-900 leading-[1.2] mb-10 w-[80%] text-nowrap`}>
                        Our Allied Health<br className="hidden lg:block" /> Sciences Programs
                    </h2>
                    <CTAButton
                        text="Explore Now"
                        onClick={() => console.log('Explore button clicked')}
                    />
                </div>

                {/* Middle Column */}
                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg group">
                        <Image
                            src="/sec3Pic1.svg"
                            alt="Programs"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 pt-16">
                            <p className="text-white/90 text-sm leading-relaxed mb-3">
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod
                            </p>
                            <p className="text-[#FCF01E] text-sm font-medium">
                                Duration : 3 Year
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col pl-0 lg:pl-10">
                    {/* Tabs */}
                    <div className="flex bg-[#FCF01E] rounded-full p-2 mb-8 w-fit shrink-0">
                        <button
                            className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${activeTab === 'Under Graduate' ? 'bg-white text-slate-900 shadow-sm leading-none' : 'text-slate-800 hover:bg-white/50 leading-none'}`}
                            onClick={() => setActiveTab('Under Graduate')}
                        >
                            Under Graduate
                        </button>
                        <button
                            className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${activeTab === 'Post Graduate' ? 'bg-white text-slate-900 shadow-sm leading-none' : 'text-slate-800 hover:bg-white/50 leading-none'}`}
                            onClick={() => setActiveTab('Post Graduate')}
                        >
                            Post Graduate
                        </button>
                    </div>

                    {/* Programs List */}
                    <div className="relative">
                        <div className="flex flex-col h-[320px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FCF01E] [&::-webkit-scrollbar-thumb]:rounded-full">
                            {programs.map((program) => (
                                <div
                                    key={program.id}
                                    onClick={() => setActiveProgram(program.id)}
                                    className={`group flex items-center justify-between py-5 border-b cursor-pointer transition-colors ${activeProgram === program.id ? 'border-slate-800 text-[#0066FF]' : 'border-slate-200 text-slate-700 hover:text-[#0066FF]'
                                        }`}
                                >
                                    <span className={`${marcellus.className} text-[22px] transition-colors whitespace-nowrap text-[#000000]`}>{program.name}</span>
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`size-7 transition-colors ${activeProgram === program.id ? 'text-[#0066FF]' : 'text-slate-300 group-hover:text-[#0066FF]'}`}
                                    >
                                        <line x1="5" y1="19" x2="19" y2="5"></line>
                                        <polyline points="9 5 19 5 19 15"></polyline>
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
