'use client'
import React, { useState, useEffect } from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionPill from '@/components/SectionPill'
import { motion, AnimatePresence } from 'framer-motion'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection10 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const achievements = [
        {
            img: "/ASec10Svg1.svg",
            title: ""
        },
        {
            img: "/ASec10Svg2.png",
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
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center relative overflow-hidden">
            <SectionPill text="Achievements" className="mb-8" />

            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-16 text-center leading-tight max-w-2xl`}>
                Achievements & Awards
            </h2>

            <div className="w-full flex items-center justify-between gap-6 relative">

                {/* Left Arrow */}
                <button 
                    onClick={handlePrevious}
                    className="absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center text-[#ffffff]  shadow-md hover:-translate-x-1 transition-transform z-10"
                >
                    <ArrowLeft size={20} />
                </button>

                {/* Desktop Cards Grid */}
                <div className="hidden md:grid grid-cols-4 gap-6 w-full max-w-6xl mx-auto flex-1">
                    {achievements.map((num, idx) => (
                        <div key={idx} className="bg-[#FFF7C7] border border-[#FDEB96] rounded-[10px] p-8 flex flex-col items-center justify-center text-center shadow-sm relative group hover:-translate-y-1 transition-transform cursor-pointer overflow-hidden w-full max-w-[260px] h-[191px] mx-auto">
                            <img src={num.img} alt="" className="max-w-full h-auto" />
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
                            className="bg-[#FFF7C7] border border-[#FDEB96] rounded-[10px] p-8 flex flex-col items-center justify-center text-center shadow-sm relative w-full max-w-[260px] h-[191px] mx-auto"
                        >
                            <img src={achievements[currentIndex].img} alt="" className="max-w-full h-auto" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button 
                    onClick={handleNext}
                    className="absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0073B4] flex items-center justify-center text-white shadow-md hover:translate-x-1 transition-transform z-10"
                >
                    <ArrowRight size={20} />
                </button>

            </div>

        </section>
    )
}

export default AboutSection10
