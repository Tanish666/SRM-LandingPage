'use client'
import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const AboutSection9 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const facilities = [
        { title: "Central Library", img: "/ASec9Pic1.svg" },
        { title: "Smart Classrooms", img: "/ASec9Pic2.svg" },
        { title: "Advanced Labs", img: "/ASec9Pic3.svg" },
        { title: "Sports Complex", img: "/ASec9Pic4.svg" },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % facilities.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [facilities.length])

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + facilities.length) % facilities.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % facilities.length)
    }

    return (
        <section className="bg-[url('/ASec9Bg.svg')] bg-cover bg-center py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 relative overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col min-h-[700px] 3xl:min-h-[850px] 4xl:min-h-[1100px]">

                {/* Header Content */}
                <div className="flex flex-col items-center mb-12 4xl:mb-24 relative z-10">
                    <SectionPill text="Our Facility" className="mb-6 4xl:mb-10" />
                    <h2 className={"text-white text-3xl md:text-[45px] lg:text-5xl 3xl:text-6xl 4xl:text-[5.5rem] leading-tight max-w-4xl 3xl:max-w-6xl 4xl:max-w-7xl text-center"}>
                        Empowering Future Healthcare Professionals
                    </h2>
                </div>

                {/* Navigation Arrows Container - Positioned above cards on the right */}
                <div className="flex sm:hidden justify-end gap-3 mb-8 relative z-20 w-full max-w-[1300px] mx-auto px-4 lg:px-0">
                    <button
                        onClick={handlePrevious}
                        className="w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                        <ArrowLeft size={20} strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-[#0051A4] flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-110 active:scale-95 transition-all"
                    >
                        <ArrowRight size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Desktop Cards Grid */}
                <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-6 4xl:gap-12 gap-y-10 relative z-10 mb-8 w-full max-w-[1300px] 3xl:max-w-[1600px] 4xl:max-w-[2000px] mx-auto px-4 lg:px-0">
                    {facilities.map((item, idx) => (
                        <div 
                            key={idx} 
                            style={{ backgroundImage: `url(${item.img})` }}
                            className="relative h-[335px] 3xl:h-[450px] 4xl:h-[600px] w-full max-w-[313px] 3xl:max-w-[400px] 4xl:max-w-[480px] mx-auto rounded-[15px] 4xl:rounded-[30px] overflow-hidden bg-cover bg-center bg-no-repeat group cursor-pointer shadow-2xl hover:-translate-y-2 transition-transform duration-500 isolate"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 4xl:h-24 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4 4xl:px-8">
                                    <div className="h-[1.5px] w-7 4xl:w-12 shrink-0 bg-[#FFD812]" />
                                    <span className="font-heading text-white text-[13px] lg:text-sm 3xl:text-base 4xl:text-2xl tracking-wide uppercase whitespace-nowrap">
                                        {item.title}
                                    </span>
                                    <div className="h-[1.5px] flex-grow bg-[#FFD812]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Single card with transition */}
                <div className="flex sm:hidden items-center justify-center w-full relative z-10 mb-8 h-[335px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ backgroundImage: `url(${facilities[currentIndex].img})` }}
                            className="relative h-[335px] w-full max-w-[313px] mx-auto rounded-[15px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl isolate"
                        >
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4">
                                    <div className="h-[1.5px] w-7 shrink-0 bg-[#FFD812]" />
                                    <span className="font-heading text-white text-[13px] lg:text-sm tracking-wide uppercase whitespace-nowrap">
                                        {facilities[currentIndex].title}
                                    </span>
                                    <div className="h-[1.5px] flex-grow bg-[#FFD812]" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default AboutSection9
