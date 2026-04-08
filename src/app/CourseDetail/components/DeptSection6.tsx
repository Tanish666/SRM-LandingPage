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
                    className="relative overflow-hidden z-20 w-full lg:w-[497px] 3xl:w-[650px] 4xl:w-[850px] min-h-[300px] md:min-h-[400px] lg:h-[510px] 3xl:h-[650px] 4xl:h-[850px] rounded-[30px] 4xl:rounded-[60px] flex-shrink-0 shadow-2xl"
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
                    className="rounded-[30px] 4xl:rounded-[60px] w-full lg:w-[840px] 3xl:w-[1100px] 4xl:w-[1450px] lg:h-[510px] 3xl:h-[650px] 4xl:h-[850px] p-[2px] bg-gradient-to-b from-[#0071BC] to-[#17A1FA] mt-[-50px] lg:mt-0 lg:ml-[-100px] flex-shrink-0 z-10"
                >
                    <div
                        className="bg-[#F4F7FD] w-full h-full rounded-[28px] 4xl:rounded-[58px] flex flex-col justify-center items-center lg:items-start px-6 py-12 md:px-12 lg:pl-40 3xl:pl-48 4xl:pl-64 lg:pr-15 text-center lg:text-left shadow-xl"
                    >
                        {/* Tag */}
                        <SectionPill text="Programs offered" className="mb-5 4xl:mb-10 self-center lg:self-start mt-4 lg:mt-0" />

                        {/* Title */}
                        <h2 className={"text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl 4xl:text-[85px] text-black capitalize mb-4 4xl:mb-10 leading-tight font-heading font-normal"}>
                            {courseName}
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-[15px] 3xl:text-xl 4xl:text-3xl text-[#515151] capitalize mb-8 4xl:mb-16 leading-relaxed max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl text-justify font-light">
                            {courseDesc}
                        </p>

                        {/* Button */}
                        <button
                            className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors cursor-pointer w-[230px] 4xl:w-[450px] h-[47px] 4xl:h-[100px] rounded-[33.57px] 4xl:rounded-[50px] border border-[#E5E5E5] pl-6 4xl:pl-12 pr-1 4xl:pr-2 self-center lg:self-start group"
                        >
                            <span className="text-lg 4xl:text-3xl font-normal text-black capitalize leading-none font-heading">Explore Program</span>
                            <span
                                className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px] 4xl:w-[85px] 4xl:h-[85px]"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="4xl:w-10 4xl:h-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
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
