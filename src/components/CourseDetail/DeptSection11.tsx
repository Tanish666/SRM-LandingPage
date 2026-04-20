'use client'
import React, { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionPill from '@/components/home/SectionPill'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

interface Testimonial {
    name: string
    department: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Saranya Mohan',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
    {
        name: 'Swetha',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
    {
        name: 'Saranya Mohan',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
]

interface Props {
    courseData?: any;
}

const DeptSection11 = ({ courseData }: Props) => {
    const [activeIndex, setActiveIndex] = useState(1)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const active = testimonials[activeIndex]
    const left = testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length]
    const right = testimonials[(activeIndex + 1) % testimonials.length]

    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full bg-white flex justify-center px-4 md:px-10 lg:px-20">
            <div className="w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] mx-auto flex flex-col items-center">
                <SectionPill text="Testimonials" className="mb-8 4xl:mb-16" />
                {/* Title */}
                <h2 className="text-h2 md:text-h1 lg:text-h1 3xl:text-65px 4xl:text-display-2 text-navy-900 text-center capitalize leading-tight mb-8 4xl:mb-16 font-heading font-normal">
                    Insights From Our Learners
                </h2>

                {/* MOBILE LAYOUT  */}
                <div className="block xl:hidden px-4 mt-8 w-full max-w-[800px] mx-auto">
                    {/* ... (Unchanged mobile code) */}
                    <div className="relative flex items-center justify-center w-full">
                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 md:left-[5%] lg:left-[8%] z-40 p-0 border-none bg-transparent cursor-pointer w-[36px] h-[36px] md:w-[48px] md:h-[48px] hover:scale-110 transition-transform"
                            aria-label="Previous testimonial"
                        >
                            <img loading="lazy" decoding="async" src="/left_arrow.svg" alt="" className="w-full h-full" />
                        </button>

                        {/* Single Card */}
                        <div className="relative mx-auto w-[220px] h-[290px] md:w-[350px] md:h-[460px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`mobile-card-${activeIndex}`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
                                >
                                    <Image
                                        src={active.image}
                                        alt={active.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-12 md:px-6 md:pb-6 md:pt-16">
                                        <p
                                            className="font-heading text-white capitalize text-lg md:text-2xl leading-[22px] md:leading-[28px]"
                                        >
                                            {active.name}
                                        </p>
                                        <p
                                            className={`${inter.className} text-white font-normal capitalize mt-0.5 text-xs md:text-[15px] leading-[18px] md:leading-[22px]`}
                                        >
                                            {active.department}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            className="absolute right-0 md:right-[5%] lg:right-[8%] z-40 p-0 border-none bg-transparent cursor-pointer w-[36px] h-[36px] md:w-[48px] md:h-[48px] hover:scale-110 transition-transform"
                            aria-label="Next testimonial"
                        >
                            <img loading="lazy" decoding="async" src="/right_arrow.svg" alt="" className="w-full h-full" />
                        </button>
                    </div>

                    {/* Testimonial Text Below Card */}
                    <div
                        className="relative bg-white rounded-2xl md:rounded-3xl mt-5 md:mt-8 p-5 md:p-8 mx-auto overflow-hidden w-full max-w-[340px] md:max-w-[550px] border border-brandBorder shadow-sm"
                    >
                        <img loading="lazy" decoding="async"
                            src="/quoteicon.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute"
                            style={{
                                width: '60px',
                                height: '60px',
                                top: '8px',
                                left: '8px',
                                opacity: 0.15,
                                zIndex: 0,
                            }}
                        />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`mobile-text-${activeIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                                style={{ zIndex: 1 }}
                            >
                                <p
                                    className={`${inter.className} font-normal text-navy-800/70 capitalize text-13px md:text-body leading-[21px] md:leading-[26px]`}
                                >
                                    {active.quote}
                                </p>
                                <p
                                    className="font-heading text-brand-blue-dark mt-4 md:mt-6 text-18px md:text-24px leading-[24px] md:leading-[32px]"
                                >
                                    {active.name}
                                </p>
                                <p
                                    className={`${inter.className} font-normal text-navy-800/60 capitalize mt-0.5 text-13px md:text-15px leading-[20px] md:leading-[24px]`}
                                >
                                    {active.department}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div
                    className="relative mx-auto hidden xl:block w-full max-w-[1281px] aspect-[1281/533] mt-[-14] 3xl:max-w-[1600px] 4xl:max-w-[2200px] 4xl:mt-12"
                >
                    {testimonials.map((t, index) => {
                        let position = 'hidden';
                        if (index === activeIndex) position = 'center';
                        else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = 'left';
                        else if (index === (activeIndex + 1) % testimonials.length) position = 'right';

                        const isCenter = position === 'center';

                        // Percentage based values for fluidity
                        let leftPos = '42%';
                        let topPos = '40%';
                        let widthVal = '16%';
                        let heightVal = '50%';
                        let opacityVal = 0;
                        let zIndexVal = 0;

                        if (position === 'center') {
                            widthVal = '24%'; heightVal = '75%'; leftPos = '20%'; topPos = '25%'; zIndexVal = 30; opacityVal = 1;
                        } else if (position === 'left') {
                            widthVal = '16%'; heightVal = '50%'; leftPos = '2%'; topPos = '41%'; zIndexVal = 10; opacityVal = 1;
                        } else if (position === 'right') {
                            widthVal = '16%'; heightVal = '50%'; leftPos = '82%'; topPos = '40%'; zIndexVal = 10; opacityVal = 1;
                        }

                        return (
                            <motion.div
                                key={`desktop-card-${index}`}
                                className="absolute transition-all duration-500 ease-in-out"
                                animate={{
                                    width: widthVal,
                                    height: heightVal,
                                    left: leftPos,
                                    top: topPos,
                                    opacity: opacityVal,
                                    zIndex: zIndexVal,
                                }}
                            >
                                <div className={`relative w-full h-full rounded-2xl 4xl:rounded-brand-md overflow-hidden shadow-md transition-all duration-500 bg-black`}>
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className={`object-cover transition-all duration-500 ${!isCenter ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'}`}
                                    />
                                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${isCenter ? 'px-5 pb-5 pt-16' : 'px-4 pb-3 pt-12'}`}>
                                        <p
                                            className="font-heading text-white capitalize transition-all duration-500 text-24px 3xl:text-28px 4xl:text-65px"
                                            style={{ lineHeight: '1.2' }}
                                        >
                                            {t.name}
                                        </p>
                                        <p
                                            className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap transition-all duration-500 text-15px 3xl:text-18px 4xl:text-24px`}
                                            style={{ lineHeight: '1.2' }}
                                        >
                                            {t.department}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Testimonial Text Box */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`desktop-text-${activeIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bg-white rounded-3xl 4xl:rounded-brand-md z-20 overflow-hidden w-[45%] h-[62%] left-[34.6%] top-[31.5%] border border-brandBorder shadow-lg"
                        >
                            <img loading="lazy" decoding="async"
                                src="/quoteicon.svg"
                                alt=""
                                aria-hidden="true"
                                className="absolute w-[21%] aspect-square top-[3%] left-[26%] opacity-20"
                                style={{ zIndex: 0 }}
                            />
                            <div
                                className="flex flex-col justify-center h-full relative pl-[26%] pr-[5%] pt-[5%]"
                                style={{ zIndex: 1 }}
                            >
                                <p
                                    className={`${inter.className} font-normal text-navy-800/70 capitalize mb-4 3xl:mb-6 4xl:mb-8 text-15px 3xl:text-18px 4xl:text-28px leading-relaxed 4xl:leading-normal`}
                                >
                                    {active.quote}
                                </p>
                                <p
                                    className="font-heading text-brand-blue-dark mt-2 3xl:mt-4 text-24px 3xl:text-38px 4xl:text-50px"
                                    style={{ lineHeight: '1.2' }}
                                >
                                    {active.name}
                                </p>
                                <p
                                    className={`${inter.className} font-normal text-navy-800/60 capitalize mt-1 text-body 3xl:text-20px 4xl:text-38px`}
                                    style={{ lineHeight: '1.2' }}
                                >
                                    {active.department}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer w-[3.4%] aspect-[43/42] left-0 top-[60%]"
                        aria-label="Previous testimonial"
                    >
                        <img loading="lazy" decoding="async" src="/left_arrow.svg" alt="" className="w-full h-full" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer w-[3.4%] aspect-[43/42] right-0 top-[60%]"
                        aria-label="Next testimonial"
                    >
                        <img loading="lazy" decoding="async" src="/right_arrow.svg" alt="" className="w-full h-full" />
                    </button>
                </div>


                {/* Pagination Pills */}
                <div
                    className="flex items-center justify-center mt-8 xl:mt-12 4xl:mt-24 gap-2 4xl:gap-4 mr-0 xl:mr-[40px]"
                >
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2.5 4xl:h-5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-brand-yellow w-22' : 'bg-slate-200 w-7.5'}`}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default DeptSection11