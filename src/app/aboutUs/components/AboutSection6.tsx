'use client'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import CTAButton from '@/components/ui/CTA'
import SectionPill from '@/components/home/SectionPill'

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
        <section className="py-12 md:py-20 3xl:py-28 4xl:py-36 w-full flex justify-center px-4 md:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-16 4xl:mb-24 gap-6">
                <div>
                    <SectionPill text="Our Leadership" className="mb-6 4xl:mb-10" />

                    <div className="font-heading text-h2 md:text-h1 3xl:text-6xl 4xl:text-display-2 text-navy-900 leading-tight max-w-2xl 3xl:max-w-4xl font-normal whitespace-normal">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 4xl:gap-12 w-full">
                {leaders.map((leader, idx) => (
                    <div key={idx} className="flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform">
                        <div className="w-full aspect-[3/4] xl:aspect-auto xl:h-140 3xl:h-160 4xl:h-200 rounded-brand-pill bg-slate-200 overflow-hidden mb-6 4xl:mb-10 relative">
                            {/* Replace with leader image */}
                            <Image
                                src={leader.imgSrc}
                                alt={leader.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className='flex items-center gap-1.5'>
                            <div className='w-1.5 h-4.5 lg:w-2 lg:h-5 4xl:w-3 4xl:h-8 bg-brand-yellow shrink-0' />
                            <h3 className={"text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl text-navy-900 leading-tight font-heading font-normal"}>{leader.name}</h3>
                        </div>
                        <div className="mt-2 4xl:mt-4">
                            <p className="text-brand-blue-dark font-medium text-sm lg:text-lg 3xl:text-xl 4xl:text-2xl font-heading">{leader.role}</p>
                            <p className="text-navy-800/70 text-sm lg:text-lg 3xl:text-xl 4xl:text-2xl leading-relaxed max-w-[95%]">{leader.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default AboutSection6
