'use client'
import React from 'react'
import SectionPill from '@/components/home/SectionPill'

const AboutSection12 = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full bg-gradient-to-br from-[#0071BC] to-[#0096F8] rounded-[30px] 4xl:rounded-[60px] p-10 lg:p-14 3xl:p-20 4xl:p-32 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">

                {/* Accent blobs */}
                <div className="absolute -top-32 -left-20 w-[400px] 4xl:w-[800px] h-[400px] 4xl:h-[800px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute -bottom-32 -right-20 w-[400px] 4xl:w-[800px] h-[400px] 4xl:h-[800px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>

                {/* Left Text */}
                <div className="flex flex-col relative z-10 w-full lg:w-3/5">
                    <SectionPill text="Enquiry" className="mb-6 4xl:mb-10" />

                    <h2 className={"text-4xl md:text-5xl 3xl:text-6xl 4xl:text-[5rem] text-white leading-[1.2] mb-6 4xl:mb-12 font-heading"}>
                        Shape The Future Of Healthcare — Start Your Journey Today!
                    </h2>

                    <p className="text-white text-base 3xl:text-xl 4xl:text-3xl leading-[1.6] max-w-2xl 4xl:max-w-5xl opacity-90 font-medium">
                        Curious About Our Cutting-Edge Programs, Research, Or Campus Life? Connect With SRM College Of Allied Health Sciences To Explore How We Can Guide Your Career In The Dynamic World Of Healthcare And Medical Sciences.
                    </p>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto shrink-0 mt-6 lg:mt-0 4xl:gap-8">
                    <div className="flex flex-col gap-4 4xl:gap-8">
                        <button className="bg-white hover:bg-white/95 transition-colors text-slate-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-semibold w-full min-w-[280px] 3xl:min-w-[350px] 4xl:min-w-[500px] text-[15px] 3xl:text-lg 4xl:text-2xl tracking-wide uppercase">
                            Connect With Us
                        </button>

                        <button className="bg-[#FFF4B5] hover:bg-[#FFF4B5]/95 transition-colors text-slate-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-semibold w-full min-w-[280px] 3xl:min-w-[350px] 4xl:min-w-[500px] text-[15px] 3xl:text-lg 4xl:text-2xl tracking-wide uppercase">
                            Course Enquiry
                        </button>

                        <button className="bg-[#FFCC00] hover:bg-[#FFCC00]/95 transition-colors text-slate-900 rounded-full px-12 py-4 3xl:px-16 3xl:py-6 4xl:px-24 4xl:py-10 flex items-center justify-center shadow-sm font-bold w-full min-w-[280px] 3xl:min-w-[350px] 4xl:min-w-[500px] text-[15px] 3xl:text-lg 4xl:text-2xl tracking-wide uppercase">
                            Apply Now
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection12
