'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTA'
import SectionPill from '@/components/SectionPill'

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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <SectionPill text="Our Leadership" className="mb-6" />

                    <div className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 leading-tight max-w-2xl whitespace-normal`}>
                        <p>Meet The Leaders Driving Academic Innovation And Institutional Growth</p>
                    </div>
                </div>

                <CTAButton
                    text="Meet the Leaders"
                    onClick={() => console.log('Meet the Leaders button clicked')}
                />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leaders.map((leader, idx) => (
                    <div key={idx} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform">
                        <div className="w-full aspect-square rounded-[2rem] bg-slate-200 overflow-hidden mb-6 relative h-[563px]">
                            {/* Replace with leader image */}
                            <Image
                                src={leader.imgSrc}
                                alt={leader.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='w-[9px] h-[22px] bg-[#FFD812]' />
                            <h3 className={`${marcellus.className} text-[26px] text-slate-900`}>{leader.name}</h3>
                        </div>
                        <div>
                            <p className="text-[#0071BC] font-medium text-[19.31px]">{leader.role}</p>
                            <p className="text-[#333333] text-[19.31px] leading-relaxed max-w-[90%]">{leader.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default AboutSection6
