'use client'
import React, { useEffect, useRef, useState } from 'react'
import SectionPill from '@/components/home/SectionPill'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

const AboutSection8 = () => {
    const sectionRef = useRef(null);
    const [currentYear, setCurrentYear] = useState<number>(2001);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        if (latest < 0.25) {
            setCurrentYear(2001);
        } else if (latest < 0.5) {
            setCurrentYear(2003);
        } else if (latest < 0.75) {
            setCurrentYear(2008);
        } else {
            setCurrentYear(2011);
        }
    });

    return (
        <section ref={sectionRef} className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden text-black">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Our History" className="mb-8 4xl:mb-16" />

                <h1 className="text-headText text-navy-900 mb-24 4xl:mb-48 text-center leading-tight max-w-4xl 3xl:max-w-6xl 4xl:max-w-7xl whitespace-normal font-heading font-normal">
                    A Legacy Of Excellence In Engineering Education
                </h1>

                <div className="relative w-full max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl flex flex-col items-center">
                    {/* Vertical Dotted Line */}
                    <div className="absolute top-10 bottom-0 left-4 md:left-1/2 -translate-x-1/2 border-l-2 border-dashed border-brandBorder h-[85%]"></div>

                    {/* Timeline Items */}
                    {/* 2001 */}
                    <div className="w-full relative flex flex-col md:flex-row mb-24 3xl:mb-32 4xl:mb-48 font-heading">
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                            <h3 className="text-28px 3xl:text-48px 4xl:text-70px text-navy-900 font-normal">2001</h3>
                        </div>
                        {/* Yellow Circle */}
                        <motion.div
                            animate={{ backgroundColor: currentYear === 2001 ? "#FFEC22" : "#17A1FA" }}
                            transition={{ duration: 0.5 }}
                            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16 rounded-full border-[5px] border-white ring-2 ring-brand-blue-bright z-10 shadow-md"
                        ></motion.div>
                        <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                            <h4 className="text-22px 3xl:text-28px 4xl:text-48px text-navy-900 font-normal mb-3 4xl:mb-6 font-heading">Empowering Generations</h4>
                            <p className="text-navy-800/60 font-sans text-15px 3xl:text-20px 4xl:text-24px leading-relaxed max-w-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* 2003 */}
                    <div className="w-full relative flex flex-col md:flex-row-reverse mb-24 3xl:mb-32 4xl:mb-48 font-heading">
                        <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                            <h3 className="text-28px 3xl:text-48px 4xl:text-70px text-navy-900 font-normal">2003</h3>
                        </div>
                        {/* Blue Circle */}
                        <motion.div
                            animate={{ backgroundColor: currentYear === 2003 ? "#FFEC22" : "#17A1FA" }}
                            transition={{ duration: 0.5 }}
                            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16 rounded-full border-[5px] border-white ring-2 ring-brand-blue-bright z-10 shadow-md"
                        ></motion.div>
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                            <h4 className="text-22px 3xl:text-28px 4xl:text-48px text-navy-900 font-normal mb-3 4xl:mb-6 font-heading">Empowering Generations</h4>
                            <p className="text-navy-800/60 font-sans text-15px 3xl:text-20px 4xl:text-24px leading-relaxed max-w-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* 2008 */}
                    <div className="w-full relative flex flex-col md:flex-row mb-24 3xl:mb-32 4xl:mb-48 font-heading">
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                            <h3 className="text-28px 3xl:text-48px 4xl:text-70px text-navy-900 font-normal">2008</h3>
                        </div>
                        {/* Blue Circle */}
                        <motion.div
                            animate={{ backgroundColor: currentYear === 2008 ? "#FFEC22" : "#17A1FA" }}
                            transition={{ duration: 0.5 }}
                            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16 rounded-full border-[5px] border-white ring-2 ring-brand-blue-bright z-10 shadow-md"
                        ></motion.div>
                        <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                            <h4 className="text-22px 3xl:text-28px 4xl:text-48px text-navy-900 font-normal mb-3 4xl:mb-6 font-heading">Empowering Generations</h4>
                            <p className="text-navy-800/60 font-sans text-15px 3xl:text-20px 4xl:text-24px leading-relaxed max-w-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* 2011 */}
                    <div className="w-full relative flex flex-col md:flex-row-reverse font-heading">
                        <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                            <h3 className="text-28px 3xl:text-48px 4xl:text-70px text-navy-900 font-normal">2011</h3>
                        </div>
                        {/* Blue Circle */}
                        <motion.div
                            animate={{ backgroundColor: currentYear === 2011 ? "#FFEC22" : "#17A1FA" }}
                            transition={{ duration: 0.5 }}
                            className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 4xl:w-16 4xl:h-16 rounded-full border-[5px] border-white ring-2 ring-brand-blue-bright z-10 shadow-md"
                        ></motion.div>
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                            <h4 className="text-22px 3xl:text-28px 4xl:text-48px text-navy-900 font-normal mb-3 4xl:mb-6 font-heading">Empowering Generations</h4>
                            <p className="text-navy-800/60 font-sans text-15px 3xl:text-20px 4xl:text-24px leading-relaxed max-w-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default AboutSection8
