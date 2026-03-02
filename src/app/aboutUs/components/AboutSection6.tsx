'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection6 = () => {
    const leaders = [
        {
            name: "Dr. T. R. Paarivendhar",
            role: "Founder",
            desc: "SRM Institute Of Science And Technology",
            imgSrc: "ASec6Pic1.svg", // Placeholders
        },
        {
            name: "Dr. R. Shivakumar",
            role: "Chairman",
            desc: "SRM Group Of Institutions, Ramapuram & Trichy",
            imgSrc: "ASec6Pic2.svg",
        },
        {
            name: "Mr. S. Niranjan",
            role: "Co-Chairman",
            desc: "SRM Group Of Institutions, Ramapuram & Trichy",
            imgSrc: "ASec6Pic3.svg",
        }
    ]

    return (
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <div className="flex items-center gap-2.5 border border-slate-200 px-5 py-2 rounded-full mb-6 bg-white shrink-0 shadow-sm w-max">
                        <span className="size-2 bg-[#FFD100] rounded-full"></span>
                        <span className="text-sm font-medium text-slate-600 tracking-wide">our Leadership</span>
                    </div>

                    <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 leading-tight max-w-2xl`}>
                        Meet The Leaders Driving Academic Innovation And Institutional Growth
                    </h2>
                </div>

                <button className="bg-[#FFD100] hover:bg-[#f2d600] transition-colors text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-sm shrink-0">
                    <span className="text-[15px] font-medium">Meet the Leaders</span>
                    <div className="bg-white rounded-full p-2 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leaders.map((leader, idx) => (
                    <div key={idx} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform">
                        <div className="w-full aspect-square rounded-[2rem] bg-slate-200 overflow-hidden mb-6 relative">
                            {/* Replace with leader image */}
                            <Image
                                src={leader.imgSrc}
                                alt={leader.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h3 className={`${marcellus.className} text-[26px] text-slate-900 mb-1`}>{leader.name}</h3>
                        <p className="text-[#006BB3] font-medium text-[15px] mb-1">{leader.role}</p>
                        <p className="text-slate-500 text-[13.5px] leading-relaxed max-w-[90%]">{leader.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AboutSection6
