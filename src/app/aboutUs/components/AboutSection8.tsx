'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Marcellus } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section ref={sectionRef} className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center">
            <SectionPill text="Our History" className="mb-8" />

            <div className={`${marcellus.className} text-3xl md:text-[54px] text-slate-900 mb-24 text-center leading-tight max-w-4xl text-black whitespace-normal`}>
                <p>A Legacy Of Excellence In Engineering Education</p>
            </div>

            <div className="relative w-full max-w-5xl flex flex-col items-center">
                {/* Vertical Dotted Line */}
                <div className="absolute top-10 bottom-0 left-4 md:left-1/2 -translate-x-1/2 border-l-2 border-dashed border-gray-400 h-[85%]"></div>

                {/* Timeline Items */}
                {/* 2001 */}
                <div className="w-full relative flex flex-col md:flex-row mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                        <h3 className={`text-3xl text-black`}>2001</h3>
                    </div>
                    {/* Yellow Circle */}
                    <motion.div 
                        animate={{ backgroundColor: currentYear === 2001 ? "#FFD812" : "#38BDF8" }} 
                        transition={{ duration: 0.5 }}
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"
                    ></motion.div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                        <h4 className="text-[22px] text-black font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2003 */}
                <div className="w-full relative flex flex-col md:flex-row-reverse mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                        <h3 className={`text-3xl text-black`}>2003</h3>
                    </div>
                    {/* Blue Circle */}
                    <motion.div 
                        animate={{ backgroundColor: currentYear === 2003 ? "#FFD812" : "#38BDF8" }} 
                        transition={{ duration: 0.5 }}
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"
                    ></motion.div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                        <h4 className="text-[22px] text-black font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2008 */}
                <div className="w-full relative flex flex-col md:flex-row mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                        <h3 className={`text-3xl text-black`}>2008</h3>
                    </div>
                    {/* Blue Circle */}
                    <motion.div 
                        animate={{ backgroundColor: currentYear === 2008 ? "#FFD812" : "#38BDF8" }} 
                        transition={{ duration: 0.5 }}
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"
                    ></motion.div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                        <h4 className="text-[22px] text-black font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2011 */}
                <div className="w-full relative flex flex-col md:flex-row-reverse">
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                        <h3 className={`text-3xl text-black`}>2011</h3>
                    </div>
                    {/* Blue Circle */}
                    <motion.div 
                        animate={{ backgroundColor: currentYear === 2011 ? "#FFD812" : "#38BDF8" }} 
                        transition={{ duration: 0.5 }}
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"
                    ></motion.div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                        <h4 className="text-[22px] text-black font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default AboutSection8
