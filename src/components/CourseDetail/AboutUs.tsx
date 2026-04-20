'use client'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'
import CTAButton from '../ui/CTA';

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
                    <h1
                        className="text-headText text-navy-900 capitalize mb-6 4xl:mb-16 leading-tight lg:max-w-[800px] 4xl:max-w-[1400px] font-heading font-normal"
                    >
                        {title}
                    </h1>

                    {/* Body text  */}
                    <div
                        className="font-light text-subText text-navy-900/80 flex flex-col gap-5 4xl:gap-12 leading-relaxed lg:max-w-[800px] 4xl:max-w-[1300px] text-justify"
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
                    <CTAButton text='Explore Program' className='mt-8 4xl:mt-16 self-center lg:self-start' />
                </div>
            </div>
        </section>
    )
}

export default DeptSection2;
