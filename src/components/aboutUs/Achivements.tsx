'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const AboutSection10 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const achievements = [
        {
            img: "/ASec10Svg1.svg",
            title: ""
        },
        {
            img: "/ASec10Svg2.webp",
            title: ""
        },
        {
            img: "/ASec10Svg3.svg",
            title: ""
        },
        {
            img: "/ASec10Svg4.svg",
            title: ""
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [achievements.length])

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }

    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center relative">
                <SectionPill text="Achievements" className="mb-8 4xl:mb-16" />

                <h1 className="text-headText text-navy-900 mb-16 4xl:mb-32 text-center leading-tight max-w-2xl 3xl:max-w-4xl 4xl:max-w-6xl font-heading font-normal">
                    Achievements & Awards
                </h1>

                <div className="w-full flex items-center justify-between gap-6 relative">

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevious}
                        className="absolute -left-4 lg:-left-5 3xl:-left-12 4xl:-left-24 top-1/2 -translate-y-1/2 w-10 h-10 3xl:w-16 3xl:h-16 4xl:w-24 4xl:h-24 rounded-full bg-brand-yellow flex items-center justify-center text-navy-900 shadow-md hover:-translate-x-1 transition-transform z-10"
                    >
                        <ArrowLeft size={20} className="3xl:size-8 4xl:size-12" />
                    </button>

                    {/* Desktop Cards Grid */}
                    <div className="hidden md:grid grid-cols-4 gap-6 4xl:gap-12 w-full max-w-6xl 3xl:max-w-[1400px] 4xl:max-w-7xl mx-auto flex-1">
                        {achievements.map((num, idx) => (
                            <div key={idx} className="bg-brand-yellow-light border border-brand-yellow/30 rounded-xl 4xl:rounded-3xl p-8 4xl:p-12 flex flex-col items-center justify-center text-center shadow-sm relative group hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden w-full max-w-[16rem] 3xl:max-w-[20rem] 4xl:max-w-[26rem] h-48 3xl:h-60 4xl:h-80 mx-auto">
                                <img loading="lazy" decoding="async" src={num.img} alt="" className="max-w-full h-auto 3xl:scale-110 4xl:scale-125" />
                            </div>
                        ))}
                    </div>

                    {/* Mobile View: Single card with transition */}
                    <div className="flex md:hidden items-center justify-center w-full relative h-[191px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-brand-yellow-light border border-brand-yellow/30 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm relative w-full max-w-[16rem] h-48 mx-auto"
                            >
                                <img loading="lazy" decoding="async" src={achievements[currentIndex].img} alt="" className="max-w-full h-auto" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute -right-4 lg:-right-5 3xl:-right-12 4xl:-right-24 top-1/2 -translate-y-1/2 w-10 h-10 3xl:w-16 3xl:h-16 4xl:w-24 4xl:h-24 rounded-full bg-brand-blue-dark flex items-center justify-center text-white shadow-md hover:translate-x-1 transition-transform z-10"
                    >
                        <ArrowRight size={20} className="3xl:size-8 4xl:size-12" />
                    </button>

                </div>
            </div>
        </section>
    )
}

export default AboutSection10
