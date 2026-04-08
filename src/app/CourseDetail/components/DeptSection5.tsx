'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] })
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
        <section className="w-full bg-white flex justify-center py-12 lg:py-20 px-4 lg:px-0 overflow-hidden mb-[30px] lg:mb-[-80px]">

            {/* MOBILE LAYOUT */}
            <div className="flex flex-col items-center w-full lg:hidden">
                {/* Pill Badge */}
                <SectionPill text="Career Opportunities" className="mb-4" />

                {/* Main Heading */}
                <h2 className={`${marcellus.className} text-center text-[28px] leading-[36px] text-black capitalize mt-4 max-w-[90%]`}>
                    Empowering The Next Generation Of Healthcare Leaders
                </h2>

                {/* Subtitle */}
                <p className={`${inter.className} text-center text-[#515151] text-sm leading-[22px] capitalize mt-3 max-w-[90%]`}>
                    Research At SRM Allied Health We Blend Academic Excellence With Real-World Applications To Prepare Our Students For Impactful Career.
                </p>

                {/* CTA Button */}
                <button
                    className="inline-flex items-center justify-between bg-[#FFD812] transition-colors cursor-pointer mt-6"
                    style={{
                        width: '267px',
                        height: '47px',
                        borderRadius: '33.57px',
                        border: '1.12px solid #E5E5E5',
                        paddingLeft: '20px',
                        paddingRight: '4px',
                    }}
                >
                    <span className={`${inter.className} text-lg font-normal text-black capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                    <span className="rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="19" x2="19" y2="5" />
                            <polyline points="9 5 19 5 19 15" />
                        </svg>
                    </span>
                </button>

                {/* Mobile Stat Cards */}
                <div className="flex flex-col gap-4 mt-8 w-full max-w-[400px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-full rounded-[20px] p-[1px]"
                            style={{ background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)' }}
                        >
                            <div
                                className="w-full rounded-[19px] p-5"
                                style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)' }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`${marcellus.className} text-4xl leading-[36px] text-[#0071BC]`}>
                                        {stat.num}
                                    </h3>
                                    <Image
                                        src={stat.icon}
                                        alt={stat.label}
                                        width={stat.iconW}
                                        height={stat.iconH}
                                        className="object-contain max-w-[50px] max-h-[50px]"
                                    />
                                </div>
                                <p className={`${marcellus.className} text-lg leading-[24px] text-black capitalize mb-1`}>
                                    {stat.label}
                                </p>
                                <p className={`${inter.className} text-sm leading-[22px] text-[#515151] capitalize`}>
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT  */}
            <div className="relative hidden lg:block" style={{ width: '1245px', height: '650px' }}>
                {/* Pill Badge */}
                <div
                    className="absolute"
                    style={{ left: '514px', top: '0px' }}
                >
                    <SectionPill text="Career Opportunities" />
                </div>

                {/* Main Heading */}
                <h2
                    className={`${marcellus.className} absolute text-center text-[45px] leading-[56px] text-black capitalize`}
                    style={{ width: '1166px', left: '41.5px', top: '65px' }}
                >
                    Empowering The Next Generation Of Healthcare Leaders
                </h2>

                {/* Subtitle */}
                <p
                    className={`${inter.className} absolute text-center text-[#515151] text-[15px] leading-[25px] capitalize`}
                    style={{ width: '623px', left: '312.5px', top: '135px' }}
                >
                    Research At SRM Allied Health We Blend Academic Excellence With Real-World Applications To Prepare Our Students For Impactful Career.
                </p>

                {/* CTA Button */}
                <div className="absolute z-50 cursor-pointer" style={{ left: '507.5px', top: '210px' }}>
                    <button
                        className="inline-flex items-center justify-between bg-[#FFD812] transition-colors cursor-pointer"
                        style={{
                            width: '267px',
                            height: '47px',
                            borderRadius: '33.57px',
                            border: '1.12px solid #E5E5E5',
                            paddingLeft: '20px',
                            paddingRight: '4px',
                        }}
                    >
                        <span className={`${inter.className} text-lg font-normal text-black capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                        <span className="rounded-full bg-white flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5" />
                                <polyline points="9 5 19 5 19 15" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Desktop Stat Cards*/}
                <div className="absolute w-full" style={{ top: '0px' }}>
                    {stats.map((stat, index) => {
                        const isShortCard = index === 1 || index === 2
                        return (
                            <div key={index} className="absolute rounded-[20px] p-[1px]" style={{
                                width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)'
                            }}>
                                <div className="w-full h-full rounded-[19px] relative overflow-hidden" style={{
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)',
                                }}>
                                    <div className={`absolute ${isShortCard ? 'top-[27px] right-[18px]' : 'top-[66px] left-[17px]'}`}>
                                        <Image src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                    </div>
                                    <h3
                                        className={`${marcellus.className} absolute text-5xl leading-[40px] text-[#0071BC]`}
                                        style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                    >
                                        {stat.num}
                                    </h3>
                                    <p
                                        className={`${marcellus.className} absolute text-xl leading-[25px] text-black capitalize`}
                                        style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                    >
                                        {stat.label}
                                    </p>
                                    <p
                                        className={`${inter.className} absolute text-[15px] leading-[25px] text-[#515151] capitalize`}
                                        style={{ width: stat.descWidth, left: '12px', top: isShortCard ? '153px' : '271px' }}
                                    >
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DeptSection5