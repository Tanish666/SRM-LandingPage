'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

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
                    
                    <h2 className={"text-3xl md:text-4xl lg:text-[45px] 3xl:text-6xl 4xl:text-[85px] leading-tight text-black capitalize mb-6 4xl:mb-12 max-w-4xl 4xl:max-w-7xl font-heading"}>
                        Empowering The Next Generation Of Healthcare Leaders
                    </h2>

                    <p className={`${inter.className} text-[#515151] text-sm md:text-base 3xl:text-xl 4xl:text-3xl leading-relaxed capitalize max-w-2xl 4xl:max-w-5xl mb-8 4xl:mb-16`}>
                        At SRM Allied Health, we blend academic excellence with real-world applications to prepare our students for an impactful career.
                    </p>

                    <button
                        className="inline-flex items-center justify-between bg-[#FFD812] transition-colors cursor-pointer w-[267px] 4xl:w-[480px] h-[47px] 4xl:h-[100px] rounded-full border border-[#E5E5E5] pl-6 4xl:pl-12 pr-1 4xl:pr-2 group"
                    >
                        <span className={`${inter.className} text-lg 4xl:text-3xl font-normal text-black capitalize`}>Explore Our Research</span>
                        <span className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px] 4xl:w-[85px] 4xl:h-[85px]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="4xl:w-10 4xl:h-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                <line x1="5" y1="19" x2="19" y2="5" />
                                <polyline points="9 5 19 5 19 15" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 4xl:gap-16 w-full">
                    {stats.map((stat, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <div
                                key={index}
                                className={`group relative rounded-[20px] 4xl:rounded-[40px] p-[1px] transition-all duration-300 hover:-translate-y-2 ${isEven ? 'lg:mt-12 4xl:mt-24' : ''}`}
                                style={{ background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)' }}
                            >
                                <div
                                    className="h-full w-full rounded-[19px] 4xl:rounded-[39px] p-8 xl:p-10 4xl:p-16 flex flex-col items-start justify-between min-h-[320px] 3xl:min-h-[400px] 4xl:min-h-[550px]"
                                    style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)' }}
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
                                        <h3 className={"text-4xl md:text-5xl 3xl:text-6xl 4xl:text-[100px] leading-tight text-[#0071BC] mb-4 4xl:mb-8 font-heading"}>
                                            {stat.num}
                                        </h3>
                                        <p className="font-heading text-lg md:text-xl 3xl:text-2xl 4xl:text-[2.5rem] leading-tight text-black capitalize mb-2 4xl:mb-4">
                                            {stat.label}
                                        </p>
                                        <p className={`${inter.className} text-sm md:text-[15px] 3xl:text-lg 4xl:text-3xl leading-relaxed text-[#515151] capitalize`}>
                                            {stat.desc}
                                        </p>
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