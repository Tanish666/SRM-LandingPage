'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptSection2 = () => {
    return (
        <section className="py-12 md:py-20 w-full flex justify-center px-4 md:px-10 lg:px-20">

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 max-w-7xl">
                {/* Left Side  */}
                <div className="shrink-0 w-full md:w-auto">
                    <div className="relative w-full max-w-[462px] aspect-[462/480] mx-auto lg:mx-0">
                        {/* Blue background rectangle  */}
                        <div
                            className="absolute rounded-[20px] bg-[#008EED] w-[95%] h-[95%] top-[5%] left-[5%]"
                        />

                        {/* Main Image  */}
                        <div
                            className="relative overflow-hidden z-10 w-[95%] h-[95%] rounded-[10.72px]"
                        >
                            <img src='/deptsecpic2.png' className='w-full h-full object-cover' alt="Department students" />
                        </div>
                    </div>
                </div>

                {/* Right Side*/}
                <div className="flex flex-col items-start lg:pt-5">
                    {/* Title*/}
                    <h2
                        className={`${marcellus.className} text-3xl md:text-4xl lg:text-[45px] text-black capitalize mb-6 leading-tight lg:max-w-[687px]`}
                    >
                        Department Of Cardiac Care Technology
                    </h2>

                    {/* Body text  */}
                    <div
                        className="font-light text-base md:text-[18px] text-black flex flex-col gap-5 leading-relaxed lg:max-w-[705px] text-justify"
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <p>
                            ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>

                    {/* Explore Program Button */}
                    <button
                        className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors mt-8 cursor-pointer w-[224px] h-[47px] rounded-[33.57px] border border-[#E5E5E5] pl-5 pr-1 self-center lg:self-start"
                    >  <span className="text-lg font-normal text-black leading-none">Explore Program</span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px]"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default DeptSection2;
