'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTA'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection6 = () => {
    const leaders = [
        {
            name: "Dr. T. R. Paarivendhar",
            role: "Founder",
            desc: "SRM Institution",
            imgSrc: "ASec6Pic1.svg", // Placeholders
        },
        {
            name: "Dr. R. Shivakumar",
            role: "Chairman",
            desc: "SRM Ramapuram & Trichy Campus",
            imgSrc: "ASec6Pic2.svg",
        },
        {
            name: "Mr. S. Niranjan",
            role: "Co-Chairman",
            desc: "SRM Ramapuram & Trichy Campus",
            imgSrc: "ASec6Pic3.svg",
        }
    ]

    return (
        <section className=" px-6 md:px-20 w-full mx-auto">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-16 gap-6">
                <div>
                    <SectionPill text="Our Leadership" className="mb-6" />

                    <div className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 leading-tight max-w-2xl whitespace-normal`}>
                        <p>Meet The Leaders Driving Academic Innovation And Institutional Growth</p>
                    </div>
                </div>

                <div className="shrink-0">
                    <CTAButton
                        text="Meet the Leaders"
                        onClick={() => console.log('Meet the Leaders button clicked')}
                    />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1450px] mx-auto">
                {leaders.map((leader, idx) => (
                    <div key={idx} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform">
                        <div className="w-full aspect-[3/4] xl:aspect-auto xl:h-[563px] rounded-[2rem] bg-slate-200 overflow-hidden mb-6 relative">
                            {/* Replace with leader image */}
                            <Image
                                src={leader.imgSrc}
                                alt={leader.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <div className='w-[7px] h-[18px] lg:w-[9px] lg:h-[22px] bg-[#FFD812] shrink-0' />
                            <h3 className={`${marcellus.className} text-xl lg:text-[26px] text-slate-900 leading-tight`}>{leader.name}</h3>
                        </div>
                        <div className="mt-2">
                            <p className="text-[#0071BC] font-medium text-[15px] lg:text-[19.31px]">{leader.role}</p>
                            <p className="text-[#333333] text-sm lg:text-[19.31px] leading-relaxed max-w-[95%]">{leader.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AboutSection6
