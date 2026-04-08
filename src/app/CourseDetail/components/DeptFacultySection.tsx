'use client'
import React from 'react'
import { Marcellus, Inter, Inder } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

const inder = Inder({
    subsets: ['latin'],
    weight: ['400'],
})

const faculty = [
    {
        name: 'Dr.Kumar Ebenezer',
        qualification: 'M.Sc., Ph.D.',
        designation: 'Professor & Principal',
        image: '/deptimagefinal.png',
    },
    {
        name: 'Dr.G.Rohini',
        qualification: 'M.Sc., Ph.D. Biochemistry / PDF',
        designation: 'Associate Professor',
        image: '/deptimagefinal.png',
    },
    {
        name: 'Dr.A.Vijayan',
        qualification: 'MSc., Ph.D.',
        designation: 'Assistant Professor',
        image: '/deptimagefinal.png',
    },
]

interface Props {
    courseData?: any;
}

const DeptFacultySection = ({ courseData }: Props) => {
    return (
        <section className="w-full bg-white mt-[88px]">
            <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-0 flex flex-col items-center">
                <SectionPill text="Our Faculty" className="mb-8" />
                {/* Title */}
                <h2
                    className={`${marcellus.className} text-[28px] lg:text-[45px] text-black text-center capitalize`}
                    style={{ lineHeight: '56px' }}
                >
                    Our Faculty
                </h2>

                {/* Description */}
                <p
                    className={`${inter.className} font-light text-base lg:text-lg text-black text-center max-w-[1005px] mx-auto mt-4`}
                    style={{ lineHeight: '27px' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut laboreLorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>

                {/* Faculty Cards Grid */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-[57px] mt-8 lg:mt-[40px] max-w-[1239px] mx-auto">
                    {faculty.map((member, index) => (
                        <div key={index} className="w-full lg:w-[375px]">
                            {/* Image */}
                            <div className="overflow-hidden rounded-[20px] w-full h-[300px] lg:h-[394px] relative bg-[#e8e8ed] border border-[#e0e0e0]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover scale-[1.05]"
                                    style={{ objectPosition: 'center top' }}
                                />
                            </div>

                            {/* Info below image */}
                            <div className="flex items-start gap-[6px] mt-4">
                                <span
                                    className="mt-2 flex-shrink-0"
                                    style={{
                                        width: '9px',
                                        height: '22px',
                                        backgroundColor: '#FFD812',
                                    }}
                                />
                                <div>
                                    <div className="flex items-baseline gap-[6px] flex-wrap">
                                        <span
                                            className={`${marcellus.className} text-2xl lg:text-3xl text-black`}
                                            style={{
                                                lineHeight: '38px',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.name}
                                        </span>
                                        <span
                                            className={`${marcellus.className} text-sm lg:text-base text-black`}
                                            style={{
                                                lineHeight: '20px',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.qualification}
                                        </span>
                                    </div>
                                    <span
                                        className={`${inder.className} font-normal text-[#0071BC]`}
                                        style={{
                                            fontSize: '19.3089px',
                                            lineHeight: '26px',
                                            letterSpacing: '-0.03em',
                                        }}
                                    >
                                        {member.designation}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Faculty Button */}
                <div className="flex justify-center mt-10">
                    <button
                        className="inline-flex items-center justify-between bg-[#FFEC22] hover:brightness-95 transition-all cursor-pointer"
                        style={{
                            width: '216px',
                            height: '47px',
                            border: '1.12px solid #E5E5E5',
                            borderRadius: '33.57px',
                            paddingLeft: '20px',
                            paddingRight: '4px',
                        }}
                    >
                        <span
                            className={`${inter.className} font-normal text-lg text-black capitalize`}
                            style={{ lineHeight: '28px' }}
                        >
                            View All Faculty
                        </span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                            style={{ width: '39px', height: '38px' }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="19" x2="19" y2="5" />
                                <polyline points="9 5 19 5 19 15" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DeptFacultySection;