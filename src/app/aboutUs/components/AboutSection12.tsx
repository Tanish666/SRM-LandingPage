'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection12 = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-[1450px] mx-auto w-full">
            <div className="bg-gradient-to-br from-[#0071BC] to-[#0096F8] rounded-[30px] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">

                {/* Accent blobs */}
                <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>

                {/* Left Text */}
                <div className="flex flex-col relative z-10 w-full lg:w-3/5">
                    <SectionPill text="Enquiry" className="mb-6" />

                    <h2 className={`${marcellus.className} text-4xl md:text-5xl text-white leading-[1.2] mb-6`}>
                        Shape The Future Of Healthcare — Start Your Journey Today!
                    </h2>

                    <p className="text-white text-base leading-[1.6] max-w-2xl opacity-90">
                        Curious About Our Cutting-Edge Programs, Research, Or Campus Life? Connect With SRM College Of Allied Health Sciences To Explore How We Can Guide Your Career In The Dynamic World Of Healthcare And Medical Sciences.
                    </p>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto shrink-0 mt-6 lg:mt-0">
                    <div className="flex flex-col gap-4">
                        <button className="bg-white hover:bg-white/95 transition-colors text-slate-900 rounded-full px-12 py-4 flex items-center justify-center shadow-sm font-semibold w-full min-w-[280px] text-[15px] tracking-wide uppercase">
                            Connect With Us
                        </button>

                        <button className="bg-[#FFF4B5] hover:bg-[#FFF4B5]/95 transition-colors text-slate-900 rounded-full px-12 py-4 flex items-center justify-center shadow-sm font-semibold w-full min-w-[280px] text-[15px] tracking-wide uppercase">
                            Course Enquiry
                        </button>

                        <button className="bg-[#FFCC00] hover:bg-[#FFCC00]/95 transition-colors text-slate-900 rounded-full px-12 py-4 flex items-center justify-center shadow-sm font-bold w-full min-w-[280px] text-[15px] tracking-wide uppercase">
                            Apply Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection12
