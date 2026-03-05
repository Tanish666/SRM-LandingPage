'use client'
import React from "react";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const HomeSection8 = () => {
    return (
        <section className="relative w-full py-16 px-4 md:px-8 max-w-[1300px] mx-auto overflow-hidden">
            <div className="relative bg-[#B9E3FF] rounded-[20px] px-8 py-8 md:px-12 md:py-12 lg:px-8 lg:py-8 flex flex-col md:flex-row items-center justify-between overflow-hidden ">

                {/* Left Content */}
                <div className="relative z-10 w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <h2 className={`text-[38px] md:text-5xl lg:text-[45px] ${marcellus.className} text-[#1e2a33] leading-[1.1] mb-5 lg:whitespace-nowrap`}>
                        Discover The Right Course For You
                    </h2>
                    <p className="text-[#3b4e5c] text-[15px] md:text-[15px] leading-[1.6] w-full lg:w-[721px] max-w-full">
                        Start Your Journey In Healthcare With Programs Designed To Empower You With Academic Excellence And Hands-On Experience.
                    </p>
                </div>

                {/* Right Content - Card */}
                <div className="relative w-full md:w-[360px] bg-white rounded-[15px] p-7 md:p-2">
                    {/* Toggle Buttons */}
                    <div className="relative bg-[#FFEA00] rounded-full p-1.5 flex justify-between items-center mb-10 z-20">
                        <button className="flex-1 bg-white text-[#111] font-medium py-3 rounded-full text-center text-[14px] shadow-sm">
                            Under Graduate
                        </button>
                        <button className="flex-1 text-[#222] font-medium py-3 rounded-full text-center text-[14px]">
                            Post Graduate
                        </button>
                    </div>

                    {/* Divider & Select */}
                    <div className="relative flex items-center gap-5 mx-1 z-20">
                        <div className="flex-1 h-[1px] bg-[#000000]"></div>
                        <span className="text-[#000000] text-[16px] font-medium tracking-wider">SELECT COURSE</span>
                        <div className="flex-1 h-[1px] bg-[#000000]"></div>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 cursor-pointer">
                            <path d="M1 1L6 6L11 1" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className="h-[1px] w-full bg-[#E6E6E6] my-3" />

                    {/* Explore Now Button */}
                    <div className="relative flex justify-center my-5 z-20">
                        <button className="bg-[#FFD100] hover:bg-[#f0c500] text-black font-semibold py-3 px-12 rounded-full text-[15px] transition-colors shadow-sm">
                            Explore Now
                        </button>
                    </div>
                </div>
                <img className="absolute bottom-0 left-0 z-20 opacity-20 shadow-xl" src="sec8Svg1.svg" alt="" />
                <img className="absolute bottom-0 left-0 z-10 opacity-40 shadow-xl" src="sec8Svg2.svg" alt="" />
                <img className="absolute bottom-0 left-0 z-2 opacity-30 shadow-xl" src="sec8Svg3.svg" alt="" />
            </div>
        </section>
    );
};

export default HomeSection8;