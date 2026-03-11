'use client'
import React, { useState, useEffect } from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection9 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const facilities = [
        { title: "Central Library", img: "bg-[url('/ASec9Pic1.svg')]" },
        { title: "Central Library", img: "bg-[url('/ASec9Pic2.svg')]" },
        { title: "Central Library", img: "bg-[url('/ASec9Pic3.svg')]" },
        { title: "Central Library", img: "bg-[url('/ASec9Pic4.svg')]" },
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
        <section className="bg-[url('/ASec9Bg.svg')] bg-cover bg-center py-24 w-full mx-auto relative overflow-hidden">
            <div className="relative w-full p-12 lg:p-16 flex flex-col min-h-[700px]">

                {/* Header Content */}
                <div className="flex flex-col items-center mb-12 relative z-10">
                    <SectionPill text="Our Facility" className="mb-6" />
                    <h2 className={`${marcellus.className} text-[#FFFFFF] text-3xl md:text-[45px] lg:text-[48px] leading-tight max-w-4xl text-center`}>
                        Empowering Future Healthcare Professionals
                    </h2>
                </div>

                {/* Navigation Arrows Container - Positioned above cards on the right */}
                <div className="flex justify-end gap-3 mb-8 relative z-20 w-full max-w-[1300px] mx-auto px-4 lg:px-0">
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
                <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 mb-8 w-full max-w-[1300px] mx-auto px-4 lg:px-0">
                    {facilities.map((item, idx) => (
                        <div key={idx} className={`relative h-[335px] w-full max-w-[313px] mx-auto rounded-[15px] overflow-hidden ${item.img} group cursor-pointer shadow-2xl hover:-translate-y-2 transition-transform duration-500`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4">
                                    <div className="h-[1.5px] w-7 shrink-0 bg-[#FFD812]" />
                                    <span className={`${marcellus.className} text-white text-[13px] lg:text-[14px]  tracking-wide uppercase whitespace-nowrap`}>
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
                            className={`relative h-[335px] w-full max-w-[313px] mx-auto rounded-[15px] overflow-hidden ${facilities[currentIndex].img} shadow-2xl`}
                        >
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-300"></div>

                            {/* Inner Card Name Tag with Line Logic */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 h-16 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="flex items-center gap-3 w-full px-4">
                                    <div className="h-[1.5px] w-7 shrink-0 bg-[#FFD812]" />
                                    <span className={`${marcellus.className} text-white text-[13px] lg:text-[14px]  tracking-wide uppercase whitespace-nowrap`}>
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
