'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'

const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] })
const inter = Inter({ subsets: ['latin'], weight: ['400'] })

const DeptSection5 = () => {
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
    ];

    return (
        <section className="w-full bg-white flex justify-center py-20 overflow-hidden">
            <div className="relative" style={{ width: '1245px', height: '650px' }}>

                {/* 1. Pill Badge */}
                <div
                    className="absolute flex items-center justify-center border border-[#DBDBDB] bg-[#F9F9F9] rounded-[20px]"
                    style={{ width: '217px', height: '41px', left: '514px', top: '0px' }}
                >
                    <div className="bg-[#3C9E53] rounded-full mr-2" style={{ width: '10.48px', height: '10px' }}></div>
                    <span className={`${inter.className} text-[16px] text-black capitalize`}>Career Opportunities</span>
                </div>

                {/* 2. Main Heading */}
                <h2
                    className={`${marcellus.className} absolute text-center text-[45px] leading-[56px] text-black capitalize`}
                    style={{ width: '1166px', left: '41.5px', top: '65px' }}
                >
                    Empowering The Next Generation Of Healthcare Leaders
                </h2>

                {/* 3. Subtitle */}
                <p
                    className={`${inter.className} absolute text-center text-[#515151] text-[15px] leading-[25px] capitalize`}
                    style={{ width: '623px', left: '312.5px', top: '135px' }}
                >
                    Research At SRM Allied Health We Blend Academic Excellence With Real-World Applications To Prepare Our Students For Impactful Career.
                </p>

                {/* 4. CTA Button */}
                <div className="absolute z-50 cursor-pointer" style={{ left: '507.5px', top: '210px' }}>
                    <a
                        href="#"
                        className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors"
                        style={{
                            width: '230px',
                            height: '47px',
                            borderRadius: '33.57px',
                            border: '1.12px solid #E5E5E5',
                            paddingLeft: '26px',
                            paddingRight: '4px',
                        }}
                    >
                        <span className={`${inter.className} text-[18px] font-normal text-black capitalize`} style={{ lineHeight: '28px' }}>Explore Program</span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                            style={{ width: '39px', height: '38px' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5" />
                                <polyline points="9 5 19 5 19 15" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* 5. Stat Cards */}
                <div className="absolute w-full" style={{ top: '0px' }}>
                    {stats.map((stat, index) => {
                        const isShortCard = index === 1 || index === 2;
                        return (
                            <div key={index} className="absolute rounded-[20px] p-[1px]" style={{
                                width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)'
                            }}>
                                <div className="w-full h-full rounded-[19px] relative overflow-hidden" style={{
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)',
                                }}>
                                    {/* Icon Positioning */}
                                    <div className={`absolute ${isShortCard ? 'top-[27px] right-[18px]' : 'top-[66px] left-[17px]'}`}>
                                        <Image src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                    </div>

                                    {/* Number */}
                                    <h3
                                        className={`${marcellus.className} absolute text-[40px] leading-[40px] text-[#0071BC]`}
                                        style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                    >
                                        {stat.num}
                                    </h3>

                                    {/* Label */}
                                    <p
                                        className={`${marcellus.className} absolute text-[20px] leading-[25px] text-black capitalize`}
                                        style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                    >
                                        {stat.label}
                                    </p>

                                    {/* Description with fixed width for precise wrapping */}
                                    <p
                                        className={`${inter.className} absolute text-[15px] leading-[25px] text-[#515151] capitalize`}
                                        style={{ width: stat.descWidth, left: '12px', top: isShortCard ? '153px' : '271px' }}
                                    >
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DeptSection5;