'use client'
import React from 'react'

interface Props {
    courseData?: any;
}

const DeptHeroSection = ({ courseData }: Props) => {
    return (
        <section className="relative w-full h-100 3xl:h-160 4xl:h-200 flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 mt-5">
            {/* Background */}
            <div className="absolute inset-0 bg-navy-900 overflow-hidden mx-4 md:mx-10 rounded-brand-pill 3xl:rounded-brand-md 4xl:rounded-brand-lg">
                {/* Fallback pattern or image could go here */}
                <img loading="lazy" decoding="async" src={courseData?.banners?.[0]?.image_url || "/ASec1Pic1.svg"} className="w-full h-full object-cover" alt="Department Hero" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent"></div>
            </div>

            <div className="relative z-20 flex flex-col items-start max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full h-full justify-end pb-12 3xl:pb-24 4xl:pb-32 pl-10 lg:pl-0 pr-10">
                <h1 className="text-white text-headText 4xl:text-display-1 mb-6 4xl:mb-10 font-light font-heading leading-tight">
                    {courseData?.name || "Cardiac Care Technology"}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 3xl:gap-4 4xl:gap-6 bg-white rounded-full px-4 py-2 md:px-5 md:py-3 3xl:px-8 3xl:py-5 4xl:px-14 4xl:py-8 shadow-sm text-subText">
                    <span className="text-navy-900 uppercase">HOME</span>
                    <span className="size-2 md:size-4 3xl:size-6 4xl:size-8 rounded-full bg-brand-yellow" />
                    <span className="text-navy-900 uppercase">DEPARTMENT PAGE</span>
                    <span className="size-2 md:size-4 3xl:size-6 4xl:size-8 rounded-full bg-brand-yellow" />
                    <span className="text-navy-900 uppercase">{courseData?.name || "CARDIAC CARE TECHNOLOGY"}</span>
                </div>
            </div>
        </section>
    )
}

export default DeptHeroSection;