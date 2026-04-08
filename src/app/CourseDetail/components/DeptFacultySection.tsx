'use client'
import React from 'react'
import { Inter, Inder } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

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
        <section className="w-full bg-white py-12 md:py-20 4xl:py-36 flex justify-center px-4 md:px-10 lg:px-20">
            <div className="w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] flex flex-col items-center">
                <SectionPill text="Our Faculty" className="mb-8 4xl:mb-16" />
                {/* Title */}
                <h2 className={"text-3xl md:text-4xl lg:text-[45px] 3xl:text-6xl 4xl:text-[85px] text-black text-center capitalize leading-tight mb-6 4xl:mb-12 font-heading"}>
                    Our Faculty
                </h2>

                {/* Description */}
                <p className={`${inter.className} font-light text-base md:text-lg 3xl:text-xl 4xl:text-3xl text-black text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-10 4xl:mb-20`}>
                    Our dedicated faculty members bring years of clinical and academic experience to mentor and guide the next generation of healthcare professionals.
                </p>

                {/* Faculty Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-16 w-full">
                    {faculty.map((member, index) => (
                        <div key={index} className="w-full">
                            {/* Image */}
                            <div className="overflow-hidden rounded-[20px] 4xl:rounded-[40px] w-full h-[300px] lg:h-[394px] 3xl:h-[500px] 4xl:h-[700px] relative bg-[#e8e8ed] border border-[#e0e0e0]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover scale-[1.05]"
                                    style={{ objectPosition: 'center top' }}
                                />
                            </div>

                            {/* Info below image */}
                            <div className="flex items-start gap-[6px] 4xl:gap-4 mt-4 4xl:mt-8">
                                <span
                                    className="mt-2 flex-shrink-0"
                                    style={{
                                        width: '9px',
                                        height: '22px',
                                        backgroundColor: '#FFD812',
                                    }}
                                />
                                <div className="flex flex-col">
                                    <div className="flex items-baseline gap-[6px] 4xl:gap-3 flex-wrap">
                                        <span
                                            className="font-heading text-2xl lg:text-3xl 3xl:text-4xl 4xl:text-6xl text-black"
                                            style={{
                                                lineHeight: '1.2',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.name}
                                        </span>
                                        <span
                                            className="font-heading text-sm lg:text-base 3xl:text-lg 4xl:text-3xl text-black"
                                            style={{
                                                lineHeight: '1.2',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.qualification}
                                        </span>
                                    </div>
                                    <span
                                        className={`${inder.className} font-normal text-[#0071BC] text-[19px] 3xl:text-2xl 4xl:text-4xl mt-1`}
                                        style={{
                                            lineHeight: '1.2',
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
                <div className="flex justify-center mt-12 4xl:mt-24">
                    <button
                        className="inline-flex items-center justify-between bg-[#FFEC22] hover:brightness-95 transition-all cursor-pointer w-[216px] 4xl:w-[450px] h-[47px] 4xl:h-[100px] rounded-[33.57px] 4xl:rounded-[50px] border border-[#E5E5E5] pl-6 4xl:pl-12 pr-1 4xl:pr-2 group"
                    >
                        <span
                            className={`${inter.className} font-normal text-lg 4xl:text-3xl text-black capitalize`}
                            style={{ lineHeight: '1.2' }}
                        >
                            View All Faculty
                        </span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px] 4xl:w-[85px] 4xl:h-[85px]"
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
                                className="4xl:w-10 4xl:h-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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