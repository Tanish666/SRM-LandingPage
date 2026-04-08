'use client'
import React, { useState, useEffect } from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="pb-16 mt-[134px] md:mt-[134px] w-full bg-white">
            <div className="mx-auto flex flex-col items-center" style={{ maxWidth: '1440px' }}>
                <SectionPill text="Testimonials" className="mb-8" />
                {/* Title */}
                <h2
                    className={`${marcellus.className} text-[28px] xl:text-[45px] text-black text-center capitalize px-4 xl:px-0 leading-[36px] xl:leading-[56px]`}
                >
                    <span className="block xl:inline" style={{ maxWidth: '545px', margin: '0 auto' }}>
                        Insights From Our Learners
                    </span>
                </h2>

                {/* MOBILE LAYOUT  */}
                <div className="block xl:hidden px-4 mt-8 w-full max-w-[800px] mx-auto">
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
                                    className="absolute inset-0 rounded-[20px] overflow-hidden shadow-xl"
                                >
                                    <Image
                                        src={active.image}
                                        alt={active.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-12 md:px-6 md:pb-6 md:pt-16">
                                        <p
                                            className={`${marcellus.className} text-white capitalize text-lg md:text-2xl leading-[22px] md:leading-[28px]`}
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
                        className="relative bg-[#FDFDFD] rounded-[16px] md:rounded-[24px] mt-5 md:mt-8 p-5 md:p-8 mx-auto overflow-hidden w-full max-w-[340px] md:max-w-[550px]"
                        style={{
                            border: '1.5px solid #E8E8E8',
                        }}
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
                                    className={`${inter.className} font-normal text-[#4B4B4B] capitalize text-[13px] md:text-base leading-[21px] md:leading-[26px]`}
                                >
                                    {active.quote}
                                </p>
                                <p
                                    className={`${marcellus.className} text-[#0071BC] mt-4 md:mt-6 text-lg md:text-2xl leading-[24px] md:leading-[32px]`}
                                >
                                    {active.name}
                                </p>
                                <p
                                    className={`${inter.className} font-normal text-[#4B4B4B] capitalize mt-0.5 text-[13px] md:text-[15px] leading-[20px] md:leading-[24px]`}
                                >
                                    {active.department}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div
                    className="relative mx-auto hidden xl:block"
                    style={{ width: '1281px', height: '533px', marginTop: '-55px' }}
                >
                    {testimonials.map((t, index) => {
                        let position = 'hidden';
                        if (index === activeIndex) position = 'center';
                        else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = 'left';
                        else if (index === (activeIndex + 1) % testimonials.length) position = 'right';

                        const isCenter = position === 'center';

                        let style: React.CSSProperties = {
                            position: 'absolute',
                            transition: 'all 0.5s ease-in-out',
                            opacity: 0,
                            pointerEvents: 'none',
                            zIndex: 0,
                            width: '208.05px', height: '270px', left: '540px', top: '218px'
                        };

                        if (position === 'center') {
                            style = {
                                ...style,
                                width: '309px',
                                height: '401px',
                                left: '255px',
                                top: '132px',
                                zIndex: 30,
                                opacity: 1,
                                pointerEvents: 'auto',
                            };
                        } else if (position === 'left') {
                            style = {
                                ...style,
                                width: '208.05px',
                                height: '270px',
                                left: '22px',
                                top: '218px',
                                zIndex: 10,
                                opacity: 1,
                            };
                        } else if (position === 'right') {
                            style = {
                                ...style,
                                width: '208.05px',
                                height: '270px',
                                left: '1052px',
                                top: '214px',
                                zIndex: 10,
                                opacity: 1,
                            };
                        }

                        return (
                            <div key={`desktop-card-${index}`} style={style}>
                                <div className={`relative w-full h-full rounded-[15.38px] overflow-hidden shadow-md transition-all duration-500 bg-black`}>
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className={`object-cover transition-all duration-500 ${!isCenter ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'}`}
                                    />
                                    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${isCenter ? 'px-5 pb-5 pt-16' : 'px-4 pb-3 pt-12'}`}>
                                        <p
                                            className={`${marcellus.className} text-white capitalize transition-all duration-500`}
                                            style={{ fontSize: isCenter ? '24px' : '18.45px', lineHeight: isCenter ? '25px' : '19px' }}
                                        >
                                            {t.name}
                                        </p>
                                        <p
                                            className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap transition-all duration-500`}
                                            style={{ fontSize: isCenter ? '16px' : '12.3px', lineHeight: isCenter ? '25px' : '19px' }}
                                        >
                                            {t.department}
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                            className="absolute bg-[#FDFDFD] rounded-[18.64px] z-20 overflow-hidden"
                            style={{
                                width: '584px',
                                height: '330px',
                                left: '444px',
                                top: '168px',
                                border: '1.86px solid #E8E8E8',
                            }}
                        >
                            <img loading="lazy" decoding="async"
                                src="/quoteicon.svg"
                                alt=""
                                aria-hidden="true"
                                className="absolute"
                                style={{
                                    width: '125px',
                                    height: '125px',
                                    top: '11px',
                                    left: '153px',
                                    zIndex: 0,
                                }}
                            />
                            <div
                                className="flex flex-col justify-center h-full relative"
                                style={{ paddingLeft: '153px', paddingRight: '32px', paddingTop: '30px', zIndex: 1 }}
                            >
                                <p
                                    className={`${inter.className} font-normal text-[#4B4B4B] capitalize mb-18`}
                                    style={{ fontSize: '15px', lineHeight: '25px', width: '423px' }}
                                >
                                    {active.quote}
                                </p>
                                <p
                                    className={`${marcellus.className} text-2xl text-[#0071BC] mt-5`}
                                    style={{ lineHeight: '30px' }}
                                >
                                    {active.name}
                                </p>
                                <p
                                    className={`${inter.className} font-normal text-base text-[#4B4B4B] capitalize mt-1`}
                                    style={{ lineHeight: '25px' }}
                                >
                                    {active.department}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{ width: '43px', height: '42px', left: '0px', top: '322px' }}
                        aria-label="Previous testimonial"
                    >
                        <img loading="lazy" decoding="async" src="/left_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{ width: '43px', height: '42px', left: '1238px', top: '322px' }}
                        aria-label="Next testimonial"
                    >
                        <img loading="lazy" decoding="async" src="/right_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>
                </div>

                {/* Pagination Pills */}
                <div
                    className="flex items-center justify-center mt-8 xl:mt-12 gap-2 mr-0 xl:mr-[40px]"
                >
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            style={{
                                width: i === activeIndex ? '88px' : '30px',
                                height: '10px',
                                background: i === activeIndex ? '#FFE45E' : '#D9D9D9',
                                borderRadius: '8px',
                                transition: 'width 0.3s ease',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeptSection11