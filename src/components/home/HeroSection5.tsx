'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const insights = [
    {
        name: "Saranya Mohan",
        program: "B.Sc Cardiac Care Technology",
        image: "/sec5Pic1.svg",
        quote: "The curriculum at SRM is designed to push your boundaries. My journey in Cardiac Care Technology has been transformative, blending rigorous theory with invaluable clinical exposure."
    },
    {
        name: "Rahul Kumar",
        program: "B.Sc Medical Imaging",
        image: "/sec5Pic3.svg",
        quote: "Access to state-of-the-art diagnostic equipment has made a world of difference. The hands-on training ensures we are industry-ready from day one."
    },
    {
        name: "Swetha",
        program: "B.Sc Cardiac Care Technology",
        image: "/sec5Pic2.svg",
        quote: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip."
    }
];

const newsData = [
    "SRM Institute of Science and Technology marks a new milestone in medical research excellence.",
    "Admissions open for the 2026 academic year in Allied Health Sciences.",
    "New international collaboration announced for Cardiac Care Technology student exchange.",
    "Student success: Allied Health graduates secure placements in top global hospitals.",
    "Upcoming seminar: Innovations in Modern Diagnostic Imaging and Patient Care.",
    "Campus news: New state-of-the-art simulation lab inaugurated for medical students."
];

export default function HeroSection5() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [newsScrollY, setNewsScrollY] = useState(0);
    const newsRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % insights.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + insights.length) % insights.length);
    };

    // Auto-scroll Latest News
    useEffect(() => {
        const interval = setInterval(() => {
            if (newsRef.current) {
                const container = newsRef.current;
                const firstChild = container.firstElementChild as HTMLElement;
                if (firstChild) {
                    const itemHeight = firstChild.offsetHeight + 20; // height + mb-5 (20px)

                    container.scrollTo({
                        top: container.scrollTop + itemHeight,
                        behavior: 'smooth'
                    });

                    // If reached the end, reset to top
                    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
                        setTimeout(() => {
                            container.scrollTo({ top: 0, behavior: 'auto' });
                        }, 500);
                    }
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Helper to get image at relative index
    const getInsightAt = (offset: number) => {
        const index = (activeIndex + offset + insights.length) % insights.length;
        return insights[index];
    };

    return (
        <section className="py-24 px-6 md:px-20 max-w-[1450px] mx-auto overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-10 lg:gap-14 max-w-7xl mx-auto items-start">

                {/* Left Column: Latest News */}
                <div className="bg-[#FFFDF1] rounded-lg overflow-hidden flex flex-col lg:h-[520px] h-[450px] pb-4">
                    <div className="bg-[#FFD700] rounded-lg py-2 text-center shadow-sm z-10 mx-1">
                        <h3 className={`${marcellus.className} text-[28px] text-black tracking-wide`}>Latest News</h3>
                    </div>
                    <div
                        ref={newsRef}
                        className="flex-1 overflow-y-auto px-7 py-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FFD700] [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        {[...newsData, ...newsData].map((text, index) => (
                            <div key={index} className={`mb-5 pb-5 ${index !== (newsData.length * 2 - 1) ? 'border-b border-yellow-200/60' : ''}`}>
                                <p className="text-sm text-slate-600 mb-2.5 leading-relaxed pr-2">
                                    {text}
                                </p>
                                <button className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors group">
                                    Read More
                                    <span className="bg-[#FFD700] rounded-full p-[2px] ml-1 group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="size-[10px] text-slate-900" strokeWidth={2} />
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Insights */}
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                        <h2 className={`${marcellus.className} text-[38px] lg:text-[44px] text-slate-900 leading-[1.1]`}>
                            Insights From Our Learners
                        </h2>
                        <div className="flex gap-3 pb-1">
                            <button
                                onClick={handlePrev}
                                className="bg-[#FFD700] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors shrink-0"
                            >
                                <IconArrowNarrowLeft className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-[#0073CF] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shrink-0"
                            >
                                <IconArrowNarrowRight className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6 lg:h-[400px] h-auto">

                        {/* Stacked Images - Hidden on Mobile */}
                        <div className="hidden md:flex flex-col gap-3 h-full overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {/* Top Slot */}
                                <motion.div
                                    key={`top-${getInsightAt(-1).name}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-[90px] rounded-[20px] overflow-hidden group cursor-pointer"
                                    onClick={handlePrev}
                                >
                                    <Image src={getInsightAt(-1).image} alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                        <h4 className={`${marcellus.className} text-white font-extralight text-xl leading-tight`}>{getInsightAt(-1).name}</h4>
                                        <p className="text-white/80 text-[10px] mt-0.5 truncate">{getInsightAt(-1).program}</p>
                                    </div>
                                </motion.div>

                                {/* Middle Slot (Active) */}
                                <motion.div
                                    key={`mid-${getInsightAt(0).name}`}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-sm border border-slate-100 "
                                >
                                    <Image src={getInsightAt(0).image} alt="Student" fill className="object-cover" />
                                </motion.div>

                                {/* Bottom Slot */}
                                <motion.div
                                    key={`bot-${getInsightAt(1).name}`}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-[90px] rounded-2xl overflow-hidden group cursor-pointer"
                                    onClick={handleNext}
                                >
                                    <Image src={getInsightAt(1).image} alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                                        <h4 className={`${marcellus.className} text-white  text-xl leading-tight`}>{getInsightAt(1).name}</h4>
                                        <p className="text-white/80 text-[10px] mt-0.5 truncate">{getInsightAt(1).program}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Quote Card */}
                        <motion.div
                            onClick={handleNext}
                            className="relative border border-slate-300/80 rounded-[24px] p-5 sm:p-8 lg:p-10 h-full flex flex-col justify-start md:justify-center bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] overflow-hidden group cursor-pointer"
                        >
                            {/* Quotes Blocks - Background Watermark on Mobile */}
                            <motion.div
                                key={`quotes-${activeIndex}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute top-[55%] md:top-10 left-10 md:left-10 flex gap-[6px] md:gap-[12px] z-0"
                            >
                                <img loading="lazy" decoding="async" src="sec5SVG.svg" alt="" className="w-12 md:w-auto md:opacity-100" />
                                <img loading="lazy" decoding="async" src="sec5SVG.svg" alt="" className="w-12 md:w-auto md:opacity-100" />
                            </motion.div>

                            <div className="relative z-10 h-full flex flex-col">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex-1 flex flex-col justify-center p-2"
                                    >
                                        {/* Mobile Image */}
                                        <div className="md:hidden relative w-full aspect-[3/1.9] rounded-[20px] overflow-hidden mb-6 shadow-sm">
                                            <Image
                                                src={insights[activeIndex].image}
                                                alt={insights[activeIndex].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-[#64748B] text-[15px] lg:text-[15.5px] leading-[1.8] mb-8 group-hover:text-slate-700 transition-colors w-full sm:w-[95%]">
                                            {insights[activeIndex].quote}
                                        </p>
                                        <div className="flex flex-col mt-auto">
                                            <span className={`${marcellus.className} text-[#3695EB] text-[22px] font-medium mb-0.5`}>
                                                {insights[activeIndex].name}
                                            </span>
                                            <span className="text-slate-500 text-[14.5px]">
                                                {insights[activeIndex].program}
                                            </span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    )
}
