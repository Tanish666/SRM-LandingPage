'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection6 = ({ courseData }: Props) => {
    const courseName = courseData?.name || "B.Sc. Cardiac Care Technology";
    const courseDesc = courseData?.about_the_course || "The B.Sc. Cardiac Care Technology Program Is Designed To Provide Broad Theoretical And Skill-Based Knowledge Related To How Well A Heart Is Functioning And Can Monitor Heart Rate.";
    return (
        <section className="py-12 w-full flex justify-center mt-10 px-4 md:px-10 lg:px-20">
            {/* Container */}
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center max-w-7xl w-full">
                {/* Left image*/}
                <div
                    className="relative overflow-hidden z-10 w-full lg:w-[497px] min-h-[300px] md:min-h-[400px] lg:h-[510px] rounded-[30px] flex-shrink-0"
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
                    className="rounded-[30px] w-full lg:w-[840px] lg:h-[510px] p-[2px] bg-gradient-to-b from-[#0071BC] to-[#17A1FA] mt-[-50px] lg:mt-0 lg:ml-[-100px] flex-shrink-0"
                >
                    <div
                        className="bg-[#F4F7FD] w-full h-full rounded-[28px] flex flex-col justify-center items-center lg:items-start px-6 py-12 md:px-12 lg:pl-40 lg:pr-15 text-center lg:text-left"
                    >
                        {/* Tag */}
                        <SectionPill text="Programs offered" className="mb-5 self-center lg:self-start mt-4 lg:mt-0" />

                        {/* Title */}
                        <h2 className={`${marcellus.className} text-3xl md:text-4xl lg:text-[40px] text-black capitalize mb-4 leading-tight`}>
                            {courseName}
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-[15px] text-[#515151] capitalize mb-8 leading-relaxed max-w-xl text-justify">
                            {courseDesc}
                        </p>

                        {/* Button */}
                        <button
                            className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors cursor-pointer w-[230px] h-[47px] rounded-[33.57px] border border-[#E5E5E5] pl-6 pr-1 self-center lg:self-start"
                        >
                            <span className="text-lg font-normal text-black capitalize leading-none">Explore Program</span>
                            <span
                                className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px] rounded-[33.57px]"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
