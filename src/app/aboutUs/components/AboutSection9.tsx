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
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col min-h-[44rem] 3xl:min-h-[54rem] 4xl:min-h-[70rem]">

                {/* Header Content */}
                <div className="flex flex-col items-center mb-12 4xl:mb-24 relative z-10">
                    <SectionPill text="Our Facility" className="mb-6 4xl:mb-10" />
                    <h2 className="text-white text-h2 md:text-h1 3xl:text-65px 4xl:text-display-1 leading-tight max-w-4xl 3xl:max-w-6xl 4xl:max-w-7xl text-center font-heading font-normal">
                        Empowering Future Healthcare Professionals
                    </h2>
                </div>

                {/* Navigation Arrows Container - Positioned above cards on the right */}
                <div className="flex sm:hidden justify-end gap-3 mb-8 relative z-20 w-full max-w-[1300px] mx-auto px-4 lg:px-0">
                    <button
                        onClick={handlePrevious}
                        className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-navy-900 shadow-lg hover:scale-110 active:scale-95 transition-all"
                    >
                        <ArrowLeft size={20} strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-brand-blue-dark flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-110 active:scale-95 transition-all"
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
                            className="relative h-80 3xl:h-[28rem] 4xl:h-[38rem] w-full max-w-[20rem] 3xl:max-w-[25rem] 4xl:max-w-[30rem] mx-auto rounded-2xl 4xl:rounded-brand-pill overflow-hidden bg-cover bg-center bg-no-repeat group cursor-pointer shadow-2xl hover:-translate-y-2 transition-transform duration-500 isolate"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 4xl:h-24 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4 4xl:px-8">
                                    <div className="h-px w-7 4xl:w-12 shrink-0 bg-brand-yellow" />
                                    <span className="font-heading text-white text-13px lg:text-15px 3xl:text-body 4xl:text-24px tracking-wide uppercase whitespace-nowrap">
                                        {item.title}
                                    </span>
                                    <div className="h-px flex-grow bg-brand-yellow" />
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
                            className="relative h-80 w-full max-w-[20rem] mx-auto rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl isolate"
                        >
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4">
                                    <div className="h-[1.5px] w-7 shrink-0 bg-brand-yellow" />
                                    <span className="font-heading text-white text-13px lg:text-15px tracking-wide uppercase whitespace-nowrap">
                                        {facilities[currentIndex].title}
                                    </span>
                                    <div className="h-[1.5px] flex-grow bg-brand-yellow" />
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
