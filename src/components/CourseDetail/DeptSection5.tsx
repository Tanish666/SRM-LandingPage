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
            icon: "/section5logo1.png", iconW: 83, iconH: 69,
            num: "150+", label: "Industry Tie-Ups",
            desc: "Collaborations With Reputed Hospitals, Diagnostic Centers Internships",
            width: '295px', height: '345px', top: '182px', left: '0px',
            descWidth: '283px'
        },
        {
            icon: "/section5logo2.png", iconW: 57, iconH: 58,
            num: "100%", label: "Internship Assurance",
            desc: "Guaranteed Hands-On Clinical Training In SRM AHS",
            width: '295px', height: '227px', top: '300px', left: '314px',
            descWidth: '247px'
        },
        {
            icon: "/section5logo3.png", iconW: 66, iconH: 66,
            num: "25+", label: "Specialization Tracks",
            desc: "Offering Diverse Career Pathways Through Specialized Programs",
            width: '295px', height: '227px', top: '300px', left: '628px',
            descWidth: '247px'
        },
        {
            icon: "/section5logo4.png", iconW: 84, iconH: 84,
            num: "1550", label: "Bedded Hospital",
            desc: "Our On-Campus Hospital Provides Real-Time Clinical Exposure",
            width: '303px', height: '345px', top: '182px', left: '942px',
            descWidth: '247px'
        }
    ]

    return (
        <section className="w-full bg-white flex justify-center py-12 md:py-20 4xl:py-36 px-4 md:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 4xl:mb-24">
                    <SectionPill text="Career Opportunities" className="mb-6 4xl:mb-12" />

                    <h1 className="text-headingText text-navy-900 capitalize mb-6 4xl:mb-12 max-w-4xl 4xl:max-w-7xl font-heading font-normal">
                        Empowering The Next Generation Of Healthcare Leaders
                    </h1>

                    <h2 className={`${inter.className} text-navy-800/70 text-subText text-center capitalize max-w-2xl 4xl:max-w-5xl mb-8 4xl:mb-16`}>
                        At SRM Allied Health, we blend academic excellence with real-world applications to prepare our students for an impactful career.
                    </h2>

                    <CTAButton text='Explore Our Research' />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 4xl:gap-16 w-full">
                    {stats.map((stat, index) => {
                        const isInner = index === 1 || index === 2;
                        return (
                            <div
                                key={index}
                                className={`group relative rounded-3xl 4xl:rounded-brand-md p-[1px] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-slate-400 to-brand-blue flex ${isInner ? 'lg:mt-12 xl:mt-26 4xl:mt-32' : ''}`}
                            >
                                <div
                                    className="h-full w-full rounded-3xl 4xl:rounded-brand-md p-8 xl:p-10 4xl:p-16 flex flex-col items-start justify-between min-h-[320px] 3xl:min-h-[400px] 4xl:min-h-[550px] bg-gradient-to-b from-white to-brand-lightBlue-soft"
                                >
                                    <div className="w-full flex justify-end mb-4 4xl:mb-8">
                                        <div className="4xl:scale-[2] transform-origin-right">
                                            <Image
                                                src={stat.icon}
                                                alt={stat.label}
                                                width={stat.iconW}
                                                height={stat.iconH}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <h1 className="text-headText leading-tight text-brand-blue-dark mb-4 4xl:mb-8 font-heading font-light">
                                            {stat.num}
                                        </h1>
                                        <h2 className="font-heading text-subText text-navy-900 capitalize mb-2 4xl:mb-4">
                                            {stat.label}
                                        </h2>
                                        <h3 className={`${inter.className} text-subText text-navy-800/70 capitalize`}>
                                            {stat.desc}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default DeptSection5