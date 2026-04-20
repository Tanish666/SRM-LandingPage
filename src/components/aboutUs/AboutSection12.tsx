'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const inter = Inter({ subsets: ['latin'], weight: '400' })

const AboutSection12 = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full bg-gradient-to-br from-brand-blue-dark to-brand-blue-bright rounded-brand-md 4xl:rounded-brand-lg p-10 lg:p-14 3xl:p-20 4xl:p-32 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">

                {/* Accent blobs */}
                <div className="absolute -top-32 -left-20 w-100 4xl:w-200 h-100 4xl:h-200 bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute -bottom-32 -right-20 w-100 4xl:w-200 h-100 4xl:h-200 bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>

                {/* Left Text */}
                <div className="flex flex-col relative z-10 w-full lg:w-4/6">
                    <SectionPill text="Enquiry" className="mb-6 4xl:mb-10" />

                    <h1 className="text-headText text-white leading-tight mb-6 4xl:mb-12 font-heading font-normal">
                        Shape The Future Of Healthcare — Start Your Journey Today!
                    </h1>

                    <h2 className={`${inter.className} text-white text-subText leading-relaxed max-w-2xl 4xl:max-w-5xl `}>
                        Curious About Our Cutting-Edge Programs, Research, Or Campus Life? Connect With SRM College Of Allied Health Sciences To Explore How We Can Guide Your Career In The Dynamic World Of Healthcare And Medical Sciences.
                    </h2>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto shrink-0 mt-6 lg:mt-0 4xl:gap-8 font-heading uppercase">
                    <div className="flex flex-col gap-4 4xl:gap-8">
                        <button className="bg-white hover:bg-white transition-colors text-navy-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-semibold w-full min-w-[18rem] 3xl:min-w-[22rem] 4xl:min-w-[32rem] text-15px 3xl:text-18px 4xl:text-24px tracking-wide">
                            Connect With Us
                        </button>

                        <button className="bg-brand-yellow-light hover:bg-brand-yellow-light/95 transition-colors text-navy-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-semibold w-full min-w-[18rem] 3xl:min-w-[22rem] 4xl:min-w-[32rem] text-15px 3xl:text-18px 4xl:text-24px tracking-wide">
                            Course Enquiry
                        </button>

                        <button className="bg-brand-yellow hover:bg-brand-yellow/95 transition-colors text-navy-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-bold w-full min-w-[18rem] 3xl:min-w-[22rem] 4xl:min-w-[32rem] text-15px 3xl:text-18px 4xl:text-24px tracking-wide">
                            Apply Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection12
