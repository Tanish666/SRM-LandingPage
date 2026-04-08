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
                <h2 className={"text-h2 md:text-h1 lg:text-h1 3xl:text-6xl 4xl:text-display-2 text-navy-900 text-center capitalize leading-tight mb-6 4xl:mb-12 font-heading font-normal"}>
                    Our Faculty
                </h2>

                {/* Description */}
                <p className={`${inter.className} font-light text-body md:text-body-lg 3xl:text-xl 4xl:text-3xl text-navy-800 text-center max-w-3xl 4xl:max-w-5xl mx-auto mb-10 4xl:mb-20`}>
                    Our dedicated faculty members bring years of clinical and academic experience to mentor and guide the next generation of healthcare professionals.
                </p>

                {/* Faculty Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-16 w-full">
                    {faculty.map((member, index) => (
                        <div key={index} className="w-full">
                            {/* Image */}
                            <div className="overflow-hidden rounded-3xl 4xl:rounded-brand-md w-full h-75 lg:h-[24.625rem] 3xl:h-125 4xl:h-175 relative bg-slate-100 border border-brandBorder">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover scale-[1.05]"
                                    style={{ objectPosition: 'center top' }}
                                />
                            </div>

                            {/* Info below image */}
                            <div className="flex items-start gap-1.5 4xl:gap-4 mt-4 4xl:mt-8">
                                <span className="mt-2 w-2 h-5.5 4xl:w-4 4xl:h-11 bg-brand-yellow flex-shrink-0" />
                                <div className="flex flex-col">
                                    <div className="flex items-baseline gap-[6px] 4xl:gap-3 flex-wrap">
                                        <span
                                            className="font-heading text-xl lg:text-2xl 3xl:text-3xl 4xl:text-6xl text-navy-900"
                                            style={{
                                                lineHeight: '1.2',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.name}
                                        </span>
                                        <span
                                            className="font-heading text-sm lg:text-base 3xl:text-lg 4xl:text-3xl text-navy-800"
                                            style={{
                                                lineHeight: '1.2',
                                                letterSpacing: '-0.03em',
                                            }}
                                        >
                                            {member.qualification}
                                        </span>
                                    </div>
                                    <span
                                        className={`${inder.className} font-normal text-brand-blue-dark text-lg 3xl:text-2xl 4xl:text-4xl mt-1`}
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
                        className="inline-flex items-center justify-between bg-brand-yellow hover:bg-brand-yellow/90 transition-all cursor-pointer w-54 4xl:w-110 h-12 4xl:h-24 rounded-full border border-brandBorder pl-6 4xl:pl-12 pr-1 4xl:pr-2 group shadow-md"
                    >
                        <span
                            className={`${inter.className} font-normal text-lg 4xl:text-3xl text-navy-900 capitalize`}
                            style={{ lineHeight: '1.2' }}
                        >
                            View All Faculty
                        </span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-10 h-10 4xl:w-20 4xl:h-20"
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