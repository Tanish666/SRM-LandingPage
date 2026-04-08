'use client'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'

interface Props {
    courseData?: any;
}

const DeptSection2 = ({ courseData }: Props) => {
    const title = courseData?.about_sections?.[0]?.heading || "Department Of Cardiac Care Technology";
    const contentHtml = courseData?.about_sections?.[0]?.content || "";
    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex justify-center px-4 md:px-10 lg:px-20">

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 4xl:gap-36 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px]">
                {/* Left Side  */}
                <div className="shrink-0 w-full md:w-auto">
                    <div className="relative w-full max-w-[462px] 3xl:max-w-[600px] 4xl:max-w-[800px] aspect-[462/480] mx-auto lg:mx-0">
                        {/* Blue background rectangle  */}
                        <div
                            className="absolute rounded-3xl 4xl:rounded-brand-md bg-brand-blue w-[95%] h-[95%] top-[5%] left-[5%]"
                        />

                        {/* Main Image  */}
                        <div
                            className="relative overflow-hidden z-10 w-[95%] h-[95%] rounded-xl 4xl:rounded-3xl"
                        >
                            <img loading="lazy" decoding="async" src='/deptsecpic2.png' className='w-full h-full object-cover' alt="Department students" />
                        </div>
                    </div>
                </div>

                {/* Right Side*/}
                <div className="flex flex-col items-start lg:pt-5 w-full">
                    <SectionPill text="About Us" className="mb-6 4xl:mb-20" />
                    {/* Title*/}
                    <h2
                        className={"text-h2 md:text-h1 lg:text-h1 3xl:text-6xl 4xl:text-display-1 text-navy-900 capitalize mb-6 4xl:mb-16 leading-[1.1] lg:max-w-[800px] 4xl:max-w-[1400px] font-heading font-normal"}
                    >
                        {title}
                    </h2>

                    {/* Body text  */}
                    <div
                        className="font-light text-body md:text-body-lg 3xl:text-2xl 4xl:text-4xl text-navy-900/80 flex flex-col gap-5 4xl:gap-12 leading-relaxed lg:max-w-[800px] 4xl:max-w-[1300px] text-justify"
                    >
                        {contentHtml ? (
                            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                        ) : (
                            <>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                </p>
                                <p>
                                    ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur
                                </p>
                            </>
                        )}
                    </div>


                    {/* Explore Program Button */}
                    <button
                        className="inline-flex items-center justify-between bg-brand-yellow transition-colors mt-8 4xl:mt-16 cursor-pointer w-56 4xl:w-100 h-12 4xl:h-24 rounded-full border border-brandBorder pl-5 4xl:pl-10 pr-1 4xl:pr-2 self-center lg:self-start group"
                    >  <span className="text-lg 4xl:text-3xl font-normal text-navy-900 leading-none font-heading">Explore Program</span>
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
        </section>
    )
}

export default DeptSection2;
