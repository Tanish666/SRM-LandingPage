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
        <section className="relative w-full h-[300px] md:h-[450px] 3xl:h-[550px] 4xl:h-[750px] flex items-center overflow-hidden px-4 md:px-10 lg:px-20 mt-5">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden mx-2 md:mx-5 rounded-[20px] 4xl:rounded-[40px]">
                {/* Fallback pattern or image could go here */}
                <img loading="lazy" decoding="async" src={courseData?.banners?.[0]?.image_url || "/ASec1Pic1.svg"} className="w-full h-full object-cover opacity-80" alt="Department Hero" />
            </div>

            <div className="relative z-20 w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] mx-auto">
                <div className="flex flex-col items-start px-4 md:px-0">
                    <h1 className={"text-white text-4xl md:text-5xl lg:text-7xl 3xl:text-8xl 4xl:text-[150px] mb-4 md:mb-6 4xl:mb-14 font-light text-left capitalize font-heading leading-tight"}>
                        {courseData?.name?.toLowerCase() || "Cardiac Care Technology"}
                    </h1>
                    <div className={`${inter.className} inline-flex flex-wrap items-center justify-start gap-x-2 gap-y-1 4xl:gap-x-6 bg-white/95 rounded-full px-4 py-2 md:px-5 md:py-3 4xl:px-12 4xl:py-8 shadow-sm font-normal text-xs md:text-base 3xl:text-lg 4xl:text-3xl max-w-[280px] md:max-w-none`}>
                        <span className="text-black font-normal">HOME</span>
                        <span className="hidden md:inline-block size-[8px] md:size-[16px] 4xl:size-6 rounded-full bg-[#FFD812]" />
                        <span className="text-black font-normal uppercase">{courseData?.name || "CARDIAC CARE TECHNOLOGY"}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptHeroSection;