'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection9 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-[1450px] mx-auto w-full relative">
            <div className="bg-[#0073B4] rounded-[2.5rem] w-full p-12 lg:p-16 flex flex-col relative overflow-hidden shadow-xl">

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl mix-blend-overlay"></div>

                <div className="flex flex-col items-center mb-16 relative z-10">
                    <div className="flex items-center gap-2.5 bg-white/10 px-5 py-2 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
                        <span className="size-2 bg-[#FFD100] rounded-full"></span>
                        <span className="text-sm font-medium text-white tracking-wide uppercase">Campus life</span>
                    </div>
                    <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-white leading-tight max-w-3xl text-center`}>
                        Empowering Future Healthcare Professionals
                    </h2>
                </div>

                {/* Cards Grid / Carousel placeholder */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 mb-8 w-[98%] max-w-[1300px] mx-auto opacity-1">
                    {[
                        { title: "Library", img: "bg-slate-300" },
                        { title: "Class Rooms", img: "bg-slate-400" },
                        { title: "Labs", img: "bg-slate-500" },
                        { title: "Campus", img: "bg-slate-600" },
                    ].map((item, idx) => (
                        <div key={idx} className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden ${item.img} group cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            {/* Inner Card Name Tag */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 flex">
                                <div className="bg-gradient-to-r from-white/95 to-white/80 backdrop-blur-md rounded-md p-3 px-4 shadow-sm min-w-[120px] font-medium text-slate-800">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 flex gap-3">
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-lg hover:scale-105 transition-transform">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-end max-w-[1300px] mx-auto z-10 text-white/70">
                    <span className="font-semibold text-[15px]"><span className="text-[#FFD100]">2</span> / 4</span>
                </div>

            </div>
        </section>
    )
}

export default AboutSection9
