'use client'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptHeroSection = ({ courseData }: Props) => {
    return (
        <section className="relative w-full h-80 md:h-120 3xl:h-140 4xl:h-180 flex items-center overflow-hidden px-4 md:px-10 lg:px-20 mt-5">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-2 md:mx-5 rounded-3xl 4xl:rounded-brand-md">
                {/* Fallback pattern or image could go here */}
                <img loading="lazy" decoding="async" src={courseData?.banners?.[0]?.image_url || "/ASec1Pic1.svg"} className="w-full h-full object-cover opacity-80" alt="Department Hero" />
            </div>

            <div className="relative z-20 w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] mx-auto">
                <div className="flex flex-col items-start px-4 md:px-0">
                    <h1 className={"text-white text-h1 md:text-display-2 lg:text-display-1 3xl:text-8xl 4xl:text-display-1 mb-4 md:mb-6 4xl:mb-14 font-light text-left capitalize font-heading leading-tight"}>
                        {courseData?.name?.toLowerCase() || "Cardiac Care Technology"}
                    </h1>
                    <div className={`${inter.className} inline-flex flex-wrap items-center justify-start gap-x-2 gap-y-1 4xl:gap-x-6 bg-white/95 rounded-full px-4 py-2 md:px-5 md:py-3 4xl:px-12 4xl:py-8 shadow-sm font-normal text-xs md:text-base 3xl:text-lg 4xl:text-3xl max-w-[280px] md:max-w-none`}>
                        <span className="text-navy-900 font-normal">HOME</span>
                        <span className="hidden md:inline-block size-2 md:size-4 4xl:size-8 rounded-full bg-brand-yellow" />
                        <span className="text-navy-900 font-normal uppercase">{courseData?.name || "CARDIAC CARE TECHNOLOGY"}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptHeroSection;