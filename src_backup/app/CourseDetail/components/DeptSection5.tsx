'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/SectionPill'

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
        <section className="w-full bg-background flex justify-center py-12 lg:py-20 px-4 lg:px-0 overflow-hidden mb-8 lg:-mb-20">

            {/* MOBILE LAYOUT */}
            <div className="flex flex-col items-center w-full lg:hidden">
                {/* Pill Badge */}
                <SectionPill text="Career Opportunities" className="mb-4" />

                {/* Main Heading */}
                <h2 className={`font-display text-center text-3xl leading-[36px] text-foreground capitalize mt-4 max-w-[90%]`}>
                    Empowering The Next Generation Of Healthcare Leaders
                </h2>

                {/* Subtitle */}
                <p className={`${inter.className} text-center text-muted-foreground text-sm leading-[22px] capitalize mt-3 max-w-[90%]`}>
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
                    <span className={`${inter.className} text-lg font-normal text-foreground capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                    <span className="rounded-full bg-background flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
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
                            className="w-full rounded-3xl p-px"
                            style={{ background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)' }}
                        >
                            <div
                                className="w-full rounded-3xl p-5"
                                style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)' }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`font-display text-4xl leading-[36px] text-[#0071BC]`}>
                                        {stat.num}
                                    </h3>
                                    <Image
                                        src={stat.icon}
                                        alt={stat.label}
                                        width={stat.iconW}
                                        height={stat.iconH}
                                        className="object-contain max-w-14 max-h-14"
                                    />
                                </div>
                                <p className={`font-display text-lg leading-[24px] text-foreground capitalize mb-1`}>
                                    {stat.label}
                                </p>
                                <p className={`${inter.className} text-sm leading-[22px] text-muted-foreground capitalize`}>
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
                    className={`font-display absolute text-center text-5xl leading-[56px] text-foreground capitalize`}
                    style={{ width: '1166px', left: '41.5px', top: '65px' }}
                >
                    Empowering The Next Generation Of Healthcare Leaders
                </h2>

                {/* Subtitle */}
                <p
                    className={`${inter.className} absolute text-center text-muted-foreground text-base leading-[25px] capitalize`}
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
                        <span className={`${inter.className} text-lg font-normal text-foreground capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                        <span className="rounded-full bg-background flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
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
                            <div key={index} className="absolute rounded-3xl p-px" style={{
                                width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)'
                            }}>
                                <div className="w-full h-full rounded-3xl relative overflow-hidden" style={{
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)',
                                }}>
                                    <div className={`absolute ${isShortCard ? 'top-7 right-5' : 'top-20 left-5'}`}>
                                        <Image src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                    </div>
                                    <h3
                                        className={`font-display absolute text-5xl leading-[40px] text-[#0071BC]`}
                                        style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                    >
                                        {stat.num}
                                    </h3>
                                    <p
                                        className={`font-display absolute text-xl leading-[25px] text-foreground capitalize`}
                                        style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                    >
                                        {stat.label}
                                    </p>
                                    <p
                                        className={`${inter.className} absolute text-base leading-[25px] text-muted-foreground capitalize`}
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