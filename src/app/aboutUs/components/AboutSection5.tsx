'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const AboutSection5 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const marqueeLogos = [
        "ASec5Logo1.svg",
        "ASec5Logo2.svg",
        "ASec5Logo3.svg",
        "ASec5Logo4.svg",
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % marqueeLogos.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [marqueeLogos.length])

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + marqueeLogos.length) % marqueeLogos.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % marqueeLogos.length)
    }

    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Accreditations" className="mb-6 4xl:mb-12" />

                <h2 className="text-h2 md:text-h1 3xl:text-65px 4xl:text-display-1 text-navy-900 mb-16 4xl:mb-32 text-center max-w-2xl 3xl:max-w-4xl 4xl:max-w-6xl font-heading font-normal">
                    Accredited For Excellence In Technical Education
                </h2>

                <div className="flex items-center justify-between w-full gap-4 3xl:gap-8 4xl:gap-12 px-4 overflow-visible">
                    <button
                        onClick={handlePrevious}
                        className="flex items-center justify-center text-navy-900 hover:text-brand-blue-dark transition-colors shrink-0"
                    >
                        <ChevronLeft className="size-10 3xl:size-16 4xl:size-24 font-thin" strokeWidth={1.5} />
                    </button>

                    <div className="flex-1 flex justify-center items-center py-4 relative h-48 3xl:h-64 4xl:h-90">
                        {/* Desktop View: All logos */}
                        <div className="hidden md:flex flex-nowrap justify-center items-center gap-10 md:gap-20 3xl:gap-32 4xl:gap-32">
                            {marqueeLogos.map((logo, idx) => (
                                <div key={idx} className="w-44 3xl:w-64 4xl:w-80 flex items-center justify-center shrink-0">
                                    <img loading="lazy" decoding="async" src={`/${logo}`} alt={`Logo ${idx}`} className="max-w-full max-h-48 3xl:max-h-64 4xl:max-h-80 object-contain" />
                                </div>
                            ))}
                        </div>

                        {/* Mobile View: Single logo with transition */}
                        <div className="flex md:hidden items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-36 flex items-center justify-center"
                                >
                                    <img loading="lazy" decoding="async"
                                        src={`/${marqueeLogos[currentIndex]}`}
                                        alt={`Logo ${currentIndex}`}
                                        className="max-w-full max-h-40 object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center text-navy-900 hover:text-brand-blue-dark transition-colors shrink-0"
                    >
                        <ChevronRight className="size-10 3xl:size-16 4xl:size-24 font-extralight" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection5

