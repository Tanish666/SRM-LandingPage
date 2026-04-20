'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'
import CTAButton from '../ui/CTA'

interface Props {
    courseData?: any;
}

const DeptSection6 = ({ courseData }: Props) => {
    const courseName = courseData?.name || "B.Sc. Cardiac Care Technology";
    const courseDesc = courseData?.about_the_course || "The B.Sc. Cardiac Care Technology Program Is Designed To Provide Broad Theoretical And Skill-Based Knowledge Related To How Well A Heart Is Functioning And Can Monitor Heart Rate.";
    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex justify-center px-4 md:px-10 lg:px-20">
            {/* Container */}
            <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full border border-brand-blue-bright rounded-3xl 4xl:rounded-2xl overflow-hidden shadow-lg bg-brand-lightBlue-tint">
                {/* Left image*/}
                <div className="relative w-full lg:w-5/12 min-h-80 md:min-h-100 lg:min-h-128 3xl:min-h-160 4xl:min-h-200 flex-shrink-0">
                    <Image
                        src="/depsecpic3.jpg"
                        alt="B.Sc. Cardiac Care Technology students"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Content card  */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center items-center lg:items-start px-8 py-12 md:px-14 lg:px-20 3xl:px-24 4xl:px-32 text-center lg:text-left">
                    {/* Tag */}
                    <SectionPill text="Programs Offered" className="mb-5 4xl:mb-10 self-center lg:self-start bg-white" />

                    {/* Title */}
                    <h2 className="text-heroText text-navy-900 capitalize mb-4 4xl:mb-10 leading-tight font-heading font-normal">
                        {courseName}
                    </h2>

                    {/* Description */}
                    <p className="text-subText text-navy-800/70 capitalize mb-8 4xl:mb-16 leading-relaxed max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl text-justify lg:text-left font-light">
                        {courseDesc}
                    </p>

                    {/* Button */}
                    <CTAButton text='Explore Program' />
                </div>
            </div>
        </section>
    )
}

export default DeptSection6
