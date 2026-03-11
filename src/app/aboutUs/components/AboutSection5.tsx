'use client'
import React, { useState, useEffect } from 'react'
import { Marcellus } from 'next/font/google'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">

            <SectionPill text="Accreditations" className="mb-6" />

            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-16 text-center leading-tight max-w-2xl`}>
                Accredited For Excellence In Technical Education
            </h2>

            <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 gap-4">
                <button 
                    onClick={handlePrevious}
                    className="flex items-center justify-center text-[#000000] hover:text-blue-600 transition-colors shrink-0"
                >
                    <ChevronLeft className="size-10 font-thin" strokeWidth={1.5} />
                </button>

                <div className="flex-1 flex justify-center items-center py-4 relative h-[190px] overflow-hidden">
                    {/* Desktop View: All logos */}
                    <div className="hidden md:flex flex-wrap justify-center items-center gap-10 md:gap-24">
                        {marqueeLogos.map((logo, idx) => (
                            <div key={idx} className="w-[200px] flex items-center justify-center">
                                <img src={`/${logo}`} alt={`Logo ${idx}`} className="max-w-full max-h-[190px] object-contain" />
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
                                className="w-[140px] flex items-center justify-center"
                            >
                                <img 
                                    src={`/${marqueeLogos[currentIndex]}`} 
                                    alt={`Logo ${currentIndex}`} 
                                    className="max-w-full max-h-[160px] object-contain" 
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <button 
                    onClick={handleNext}
                    className="flex items-center justify-center text-[#000000] hover:text-blue-600 transition-colors shrink-0"
                >
                    <ChevronRight className="size-10 font-extralight" strokeWidth={1.5} />
                </button>
            </div>
        </section>
    )
}

export default AboutSection5

