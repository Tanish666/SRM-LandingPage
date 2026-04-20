'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full bg-white flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] 3xl:grid-cols-[450px_minmax(0,1fr)] 4xl:grid-cols-[600px_minmax(0,1fr)] gap-10 lg:gap-14 4xl:gap-24 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full items-start">

                {/* Left Column: Latest News */}
                <div className="bg-brand-yellow-light2 rounded-lg overflow-hidden flex flex-col lg:h-[520px] 3xl:h-[650px] 4xl:h-[850px] h-[450px] pb-4 shadow-sm border border-brandBorder">
                    <div className="bg-brand-yellow rounded-lg py-2 3xl:py-4 text-center shadow-sm z-10">
                        <h3 className="text-h3 3xl:text-h2 4xl:text-h1 text-navy-900 tracking-wide font-heading">Latest News</h3>
                    </div>
                    <div
                        ref={newsRef}
                        className="flex-1 overflow-y-auto px-7 4xl:px-12 py-6 4xl:py-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-yellow [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        {[...newsData, ...newsData].map((text, index) => (
                            <div key={index} className={`mb-5 pb-5 4xl:mb-8 4xl:pb-8 ${index !== (newsData.length * 2 - 1) ? 'border-b border-yellow-200/60' : ''}`}>
                                <p className="text-sm 3xl:text-base 4xl:text-xl text-slate-600 mb-2.5 4xl:mb-4 leading-relaxed pr-2">
                                    {text}
                                </p>
                                <button className="flex items-center gap-1.5 4xl:gap-3 text-xs 3xl:text-sm 4xl:text-lg text-navy-800/60 hover:text-navy-900 transition-colors group">
                                    Read More
                                    <span className="bg-brand-yellow rounded-full p-[2px] 4xl:p-1 ml-1 group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="size-[10px] 4xl:size-4 text-navy-900" strokeWidth={2} />
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Insights */}
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 4xl:mb-16 gap-4">
                        <h1 className="text-headText text-navy-900 leading-[1.1] font-heading font-normal">
                            Insights From Our Learners
                        </h1>
                        <div className="flex gap-3 pb-1 4xl:scale-125 4xl:origin-bottom-right">
                            <button
                                onClick={handlePrev}
                                className="bg-brand-yellow w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-brand-yellow/90 transition-colors shrink-0"
                            >
                                <IconArrowNarrowLeft className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-brand-blue-dark w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-brand-blue-dark/90 transition-colors shrink-0"
                            >
                                <IconArrowNarrowRight className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] 3xl:grid-cols-[320px_minmax(0,1fr)] 4xl:grid-cols-[450px_minmax(0,1fr)] gap-6 4xl:gap-12 lg:h-[400px] 3xl:h-[500px] 4xl:h-[650px] h-auto">

                        {/* Stacked Images - Hidden on Mobile */}
                        <div className="hidden md:flex flex-col gap-3 4xl:gap-6 h-full overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {/* Top Slot */}
                                <motion.div
                                    key={`top-${getInsightAt(-1).name}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-[90px] 3xl:h-[110px] 4xl:h-[150px] rounded-20px overflow-hidden group cursor-pointer"
                                    onClick={handlePrev}
                                >
                                    <Image src={getInsightAt(-1).image} alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 4xl:p-8 flex flex-col justify-end">
                                        <h4 className="text-white font-extralight text-xl 3xl:text-2xl 4xl:text-4xl leading-tight">{getInsightAt(-1).name}</h4>
                                        <p className="text-white/80 text-10px 3xl:text-xs 4xl:text-lg mt-0.5 truncate">{getInsightAt(-1).program}</p>
                                    </div>
                                </motion.div>

                                {/* Middle Slot (Active) */}
                                <motion.div
                                    key={`mid-${getInsightAt(0).name}`}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.95, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative w-full flex-1 rounded-20px overflow-hidden shadow-sm border border-slate-100 "
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
                                    className="relative w-full h-[90px] 3xl:h-[110px] 4xl:h-[150px] rounded-20px overflow-hidden group cursor-pointer"
                                    onClick={handleNext}
                                >
                                    <Image src={getInsightAt(1).image} alt="Student" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 4xl:p-8 flex flex-col justify-end">
                                        <h4 className="text-white text-xl 3xl:text-2xl 4xl:text-4xl leading-tight">{getInsightAt(1).name}</h4>
                                        <p className="text-white/80 text-10px 3xl:text-xs 4xl:text-lg mt-0.5 truncate">{getInsightAt(1).program}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Quote Card */}
                        <motion.div
                            onClick={handleNext}
                            className="relative border border-slate-300/80 rounded-20px 4xl:rounded-brand-md p-5 sm:p-8 lg:p-10 4xl:p-20 h-full flex flex-col justify-start md:justify-center bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] overflow-hidden group cursor-pointer"
                        >
                            {/* Quotes Blocks - Background Watermark on Mobile */}
                            <motion.div
                                key={`quotes-${activeIndex}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="absolute top-[55%] md:top-10 left-10 md:left-10 flex gap-[6px] md:gap-[12px] 4xl:gap-8 z-0"
                            >
                                <img loading="lazy" decoding="async" src="sec5SVG.svg" alt="" className="w-12 md:w-auto 4xl:w-[120px] md:opacity-100" />
                                <img loading="lazy" decoding="async" src="sec5SVG.svg" alt="" className="w-12 md:w-auto 4xl:w-[120px] md:opacity-100" />
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
                                        <div className="md:hidden relative w-full aspect-[3/1.9] rounded-brand-pill overflow-hidden mb-6 shadow-sm">
                                            <Image
                                                src={insights[activeIndex].image}
                                                alt={insights[activeIndex].name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-navy-800/60 text-sm lg:text-base 3xl:text-xl 4xl:text-2-25rem 3xl:leading-[1.8] 4xl:leading-[1.4] mb-8 4xl:mb-16 group-hover:text-navy-900 transition-colors w-full sm:w-[95%]">
                                            {insights[activeIndex].quote}
                                        </p>
                                        <div className="flex flex-col mt-auto">
                                            <span className="font-heading text-brand-blue text-xl lg:text-2xl 3xl:text-h3 4xl:text-h1 font-medium mb-0.5 4xl:mb-3">
                                                {insights[activeIndex].name}
                                            </span>
                                            <span className="text-navy-800/50 text-xs md:text-sm 3xl:text-lg 4xl:text-2xl">
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
