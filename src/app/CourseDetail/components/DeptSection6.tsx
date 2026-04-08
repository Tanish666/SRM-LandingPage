'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'

interface Props {
    courseData?: any;
}

const DeptSection6 = ({ courseData }: Props) => {
    const courseName = courseData?.name || "B.Sc. Cardiac Care Technology";
    const courseDesc = courseData?.about_the_course || "The B.Sc. Cardiac Care Technology Program Is Designed To Provide Broad Theoretical And Skill-Based Knowledge Related To How Well A Heart Is Functioning And Can Monitor Heart Rate.";
    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex justify-center px-4 md:px-10 lg:px-20">
            {/* Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
                {/* Left image*/}
                <div
                    className="relative overflow-hidden z-20 w-full lg:w-124 3xl:w-160 4xl:w-200 min-h-80 md:min-h-100 lg:h-128 3xl:h-160 4xl:h-200 rounded-brand-md 4xl:rounded-brand-lg flex-shrink-0 shadow-2xl"
                >
                    <Image
                        src="/depsecpic3.jpg"
                        alt="B.Sc. Cardiac Care Technology students"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Content card  */}
                <div
                    className="rounded-brand-md 4xl:rounded-brand-lg w-full lg:w-[52.5rem] 3xl:w-[68.75rem] 4xl:w-[90.625rem] lg:h-128 3xl:h-160 4xl:h-200 p-[2px] bg-gradient-to-b from-brand-blue-dark to-brand-blue-bright mt-[-12] lg:mt-0 lg:ml-[-25] flex-shrink-0 z-10"
                >
                    <div
                        className="bg-brand-lightBlue-tint w-full h-full rounded-brand-md 4xl:rounded-brand-lg flex flex-col justify-center items-center lg:items-start px-6 py-12 md:px-12 lg:pl-40 3xl:pl-48 4xl:pl-64 lg:pr-15 text-center lg:text-left shadow-xl"
                    >
                        {/* Tag */}
                        <SectionPill text="Programs offered" className="mb-5 4xl:mb-10 self-center lg:self-start mt-4 lg:mt-0" />

                        {/* Title */}
                        <h2 className={"text-h2 md:text-h1 lg:text-h1 3xl:text-6xl 4xl:text-display-2 text-navy-900 capitalize mb-4 4xl:mb-10 leading-tight font-heading font-normal"}>
                            {courseName}
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base 3xl:text-xl 4xl:text-3xl text-navy-800/70 capitalize mb-8 4xl:mb-16 leading-relaxed max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl text-justify font-light">
                            {courseDesc}
                        </p>

                        {/* Button */}
                        <button
                            className="inline-flex items-center justify-between bg-brand-yellow transition-colors cursor-pointer w-60 4xl:w-110 h-12 4xl:h-24 rounded-full border border-brandBorder pl-6 4xl:pl-12 pr-1 4xl:pr-2 self-center lg:self-start group"
                        >
                            <span className="text-lg 4xl:text-3xl font-normal text-navy-900 capitalize leading-none font-heading">Explore Program</span>
                            <span
                                className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-10 h-10 4xl:w-20 4xl:h-20"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="4xl:w-10 4xl:h-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-navy-900">
                                    <line x1="5" y1="19" x2="19" y2="5" />
                                    <polyline points="9 5 19 5 19 15" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection6
