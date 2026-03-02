'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection12 = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-[1450px] mx-auto w-full">
            <div className="bg-[#0073B4] rounded-[2.5rem] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">

                {/* Accent blobs */}
                <div className="absolute -top-32 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>

                {/* Left Text */}
                <div className="flex flex-col relative z-10 w-full lg:w-3/5">
                    <div className="flex items-center gap-2.5 bg-white/10 px-5 py-2 rounded-full mb-8 border border-white/20 backdrop-blur-sm w-max">
                        <span className="size-2 bg-[#FFD100] rounded-full"></span>
                        <span className="text-sm font-medium text-white tracking-wide uppercase">Join Us</span>
                    </div>

                    <h2 className={`${marcellus.className} text-4xl md:text-[48px] text-white leading-[1.2] mb-6`}>
                        Shape The Future Of Healthcare — Start Your Journey Today!
                    </h2>

                    <p className="text-white/80 text-[16px] leading-relaxed max-w-xl">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                    </p>
                </div>

                {/* Right Buttons */}
                <div className="flex flex-col gap-4 relative z-10 w-full lg:w-auto shrink-0 mt-6 lg:mt-0">
                    <div className="flex flex-col gap-4">
                        <button className="bg-white hover:bg-slate-50 transition-colors text-slate-800 rounded-full px-8 py-3.5 flex items-center justify-between gap-6 shadow-sm font-semibold w-full min-w-[280px]">
                            <span>Contact Us</span>
                            <ArrowUpRight className="w-5 h-5 text-slate-800" strokeWidth={2} />
                        </button>

                        <button className="bg-white hover:bg-slate-50 transition-colors text-slate-800 rounded-full px-8 py-3.5 flex items-center justify-between gap-6 shadow-sm font-semibold w-full min-w-[280px]">
                            <span>Course Enquiry</span>
                            <ArrowUpRight className="w-5 h-5 text-slate-800" strokeWidth={2} />
                        </button>

                        <button className="bg-[#FFD100] hover:bg-[#e6bd00] transition-colors text-slate-900 rounded-full px-8 py-3.5 flex items-center justify-between gap-6 shadow-sm font-semibold w-full min-w-[280px]">
                            <span>Apply Now</span>
                            <div className="bg-white rounded-full p-2 flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-slate-900" strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection12
