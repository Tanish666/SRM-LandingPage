'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'
import CTAButton from '../ui/CTA'

const inter = Inter({ subsets: ['latin'], weight: ['400'] })

interface Props {
    courseData?: any;
}

const DeptSection5 = ({ courseData }: Props) => {
    const stats = [
        {
            icon: "/section5logo1.webp", iconW: 83, iconH: 69,
            num: "150+", label: "Industry Tie-Ups",
            desc: "Collaborations With Reputed Hospitals, Diagnostic Centers Internships",
            width: '295px', height: '345px', top: '182px', left: '0px',
            descWidth: '283px'
        },
        {
            icon: "/section5logo2.webp", iconW: 57, iconH: 58,
            num: "100%", label: "Internship Assurance",
            desc: "Guaranteed Hands-On Clinical Training In SRM AHS",
            width: '295px', height: '227px', top: '300px', left: '314px',
            descWidth: '247px'
        },
        {
            icon: "/section5logo3.webp", iconW: 66, iconH: 66,
            num: "25+", label: "Specialization Tracks",
            desc: "Offering Diverse Career Pathways Through Specialized Programs",
            width: '295px', height: '227px', top: '300px', left: '628px',
            descWidth: '247px'
        },
        {
            icon: "/section5logo4.webp", iconW: 84, iconH: 84,
            num: "1550", label: "Bedded Hospital",
            desc: "Our On-Campus Hospital Provides Real-Time Clinical Exposure",
            width: '303px', height: '345px', top: '182px', left: '942px',
            descWidth: '247px'
        }
    ]

    return (
        <section className="w-full bg-white flex justify-center py-12 lg:py-20 px-4 lg:px-0 overflow-hidden mb-[30px] lg:mb-[-80px] 3xl:py-16 4xl:py-24 3xl:px-32 4xl:px-48">

            {/* MOBILE LAYOUT */}
            <div className="flex flex-col items-center w-full lg:hidden">
                <SectionPill text="Career Opportunities" className="uppercase" />

                {/* Main Heading */}
                <h1 className="font-heading text-center text-[28px] leading-[36px] text-navy-900 capitalize mt-4 max-w-[90%]">
                    Empowering The Next Generation Of Healthcare Leaders
                </h1>

                {/* Subtitle */}
                <h2 className={`${inter.className} text-center text-navy-800/70 text-[14px] leading-[22px] capitalize mt-3 max-w-[90%]`}>
                    At SRM Allied Health, we blend academic excellence with real-world applications to prepare our students for an impactful career.
                </h2>

                {/* CTA Button */}
                <div className="mt-6 flex justify-center w-full">
                    <CTAButton text='Explore Our Research' />
                </div>

                {/* Mobile Stat Cards */}
                <div className="flex flex-col gap-4 mt-8 w-full max-w-[400px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-full rounded-[20px] p-[1px] bg-gradient-to-b from-slate-400 to-brand-blue"
                        >
                            <div
                                className="w-full rounded-[19px] p-5 bg-gradient-to-b from-white to-brand-lightBlue-soft"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h1 className="font-heading font-light text-[36px] leading-[36px] text-brand-blue-dark">
                                        {stat.num}
                                    </h1>
                                    <Image
                                        src={stat.icon}
                                        alt={stat.label}
                                        width={stat.iconW}
                                        height={stat.iconH}
                                        className="object-contain max-w-[50px] max-h-[50px]"
                                    />
                                </div>
                                <h2 className="font-heading text-[18px] leading-[24px] text-navy-900 capitalize mb-1">
                                    {stat.label}
                                </h2>
                                <h3 className={`${inter.className} text-[14px] leading-[22px] text-navy-800/70 capitalize`}>
                                    {stat.desc}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT  */}
            <div className="hidden lg:flex flex-col items-center w-full 4xl:mt-12 3xl:mt-8 4xl:mb-[400px] 3xl:mb-[250px]">
                <SectionPill text="Career Opportunities" className="" />

                <div className="relative 4xl:scale-[1.75] 3xl:scale-[1.4] transition-all duration-500 transform-gpu origin-top" style={{ width: '1245px', height: '650px' }}>
                    {/* Main Heading */}
                    <h1
                        className="font-heading absolute text-center text-[45px] leading-[56px] text-navy-900 capitalize"
                        style={{ width: '1166px', left: '41.5px', top: '65px' }}
                    >
                        Empowering The Next Generation Of Healthcare Leaders
                    </h1>

                    {/* Subtitle */}
                    <h2
                        className={`${inter.className} absolute text-center text-navy-800/70 text-[15px] leading-[25px] capitalize`}
                        style={{ width: '623px', left: '312.5px', top: '135px' }}
                    >
                        At SRM Allied Health, we blend academic excellence with real-world applications to prepare our students for an impactful career.
                    </h2>

                    {/* CTA Button */}
                    <div className="absolute z-50 cursor-pointer flex justify-center items-center" style={{ left: '507.5px', top: '210px', width: '267px' }}>
                        <CTAButton text='Explore Our Research' />
                    </div>

                    {/* Desktop Stat Cards*/}
                    <div className="absolute w-full" style={{ top: '0px' }}>
                        {stats.map((stat, index) => {
                            const isShortCard = index === 1 || index === 2
                            return (
                                <div key={index} className="absolute rounded-[20px] p-[1px] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-slate-400 to-brand-blue" style={{
                                    width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                }}>
                                    <div className="w-full h-full rounded-[19px] relative overflow-hidden bg-gradient-to-b from-white to-brand-lightBlue-soft">
                                        <div className={`absolute ${isShortCard ? 'top-[27px] right-[18px]' : 'top-[66px] left-[17px]'}`}>
                                            <Image src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                        </div>
                                        <h1
                                            className="font-heading font-light absolute text-[40px] leading-[40px] text-brand-blue-dark"
                                            style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                        >
                                            {stat.num}
                                        </h1>
                                        <h2
                                            className="font-heading absolute text-[20px] leading-[25px] text-navy-900 capitalize"
                                            style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                        >
                                            {stat.label}
                                        </h2>
                                        <h3
                                            className={`${inter.className} absolute text-[15px] leading-[25px] text-navy-800/70 capitalize`}
                                            style={{ width: stat.descWidth, left: '12px', top: isShortCard ? '153px' : '271px' }}
                                        >
                                            {stat.desc}
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection5