'use client'
import React, { useState } from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'

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

const DeptSection11 = () => {
    const [activeIndex, setActiveIndex] = useState(1)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const active = testimonials[activeIndex]
    const left = testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length]
    const right = testimonials[(activeIndex + 1) % testimonials.length]

    return (
        <section className="pb-16 mt-[134px] md:mt-[134px] w-full bg-white">
            <div className="mx-auto" style={{ maxWidth: '1440px' }}>
                {/* Title */}
                <h2
                    className={`${marcellus.className} text-[28px] md:text-[45px] text-black text-center capitalize px-4 md:px-0`}
                    style={{
                        lineHeight: window?.innerWidth < 768 ? '36px' : '56px',
                    }}
                >
                    <span className="block md:inline" style={{ maxWidth: '545px', margin: '0 auto' }}>
                        Insights From Our Learners
                    </span>
                </h2>

                {/* MOBILE LAYOUT  */}
                <div className="block md:hidden px-4 mt-8">
                    <div className="relative flex items-center justify-center">
                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 z-40 p-0 border-none bg-transparent cursor-pointer"
                            aria-label="Previous testimonial"
                            style={{ width: '36px', height: '36px' }}
                        >
                            <img src="/left_arrow.svg" alt="" style={{ width: '36px', height: '36px' }} />
                        </button>

                        {/* Single Card */}
                        <div
                            className="relative rounded-[20px] overflow-hidden shadow-xl mx-auto"
                            style={{ width: '220px', height: '290px' }}
                        >
                            <Image
                                src={active.image}
                                alt={active.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-4 pt-12">
                                <p
                                    className={`${marcellus.className} text-white capitalize`}
                                    style={{ fontSize: '18px', lineHeight: '22px' }}
                                >
                                    {active.name}
                                </p>
                                <p
                                    className={`${inter.className} text-white font-normal capitalize mt-0.5`}
                                    style={{ fontSize: '12px', lineHeight: '18px' }}
                                >
                                    {active.department}
                                </p>
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            className="absolute right-0 z-40 p-0 border-none bg-transparent cursor-pointer"
                            aria-label="Next testimonial"
                            style={{ width: '36px', height: '36px' }}
                        >
                            <img src="/right_arrow.svg" alt="" style={{ width: '36px', height: '36px' }} />
                        </button>
                    </div>

                    {/* Testimonial Text Below Card */}
                    <div
                        className="relative bg-[#FDFDFD] rounded-[16px] mt-5 p-5 mx-auto"
                        style={{
                            border: '1.5px solid #E8E8E8',
                            maxWidth: '340px',
                        }}
                    >
                        <img
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
                        <div className="relative" style={{ zIndex: 1 }}>
                            <p
                                className={`${inter.className} font-normal text-[#4B4B4B] capitalize`}
                                style={{ fontSize: '13px', lineHeight: '21px' }}
                            >
                                {active.quote}
                            </p>
                            <p
                                className={`${marcellus.className} text-[18px] text-[#0071BC] mt-4`}
                                style={{ lineHeight: '24px' }}
                            >
                                {active.name}
                            </p>
                            <p
                                className={`${inter.className} font-normal text-[13px] text-[#4B4B4B] capitalize mt-0.5`}
                                style={{ lineHeight: '20px' }}
                            >
                                {active.department}
                            </p>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT */}
                <div
                    className="relative mx-auto hidden md:block"
                    style={{ width: '1281px', height: '533px', marginTop: '-55px' }}
                >
                    {/* Left Side Card */}
                    <div
                        className="absolute z-10"
                        style={{
                            width: '208.05px',
                            height: '270px',
                            left: '22px',
                            top: '218px',
                        }}
                    >
                        <div className="relative w-full h-full rounded-[15.38px] overflow-hidden shadow-md">
                            <Image
                                src={left.image}
                                alt={left.name}
                                fill
                                className="object-cover grayscale brightness-40"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-12">
                                <p
                                    className={`${marcellus.className} text-white capitalize`}
                                    style={{ fontSize: '18.4524px', lineHeight: '19px' }}
                                >
                                    {left.name}
                                </p>
                                <p
                                    className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap`}
                                    style={{ fontSize: '12.3016px', lineHeight: '19px' }}
                                >
                                    {left.department}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Text Box */}
                    <div
                        className="absolute bg-[#FDFDFD] rounded-[18.64px] z-20 overflow-hidden"
                        style={{
                            width: '584px',
                            height: '330px',
                            left: '444px',
                            top: '168px',
                            border: '1.86px solid #E8E8E8',
                        }}
                    >
                        <img
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
                                className={`${marcellus.className} text-[24px] text-[#0071BC] mt-5`}
                                style={{ lineHeight: '30px' }}
                            >
                                {active.name}
                            </p>
                            <p
                                className={`${inter.className} font-normal text-[16px] text-[#4B4B4B] capitalize mt-1`}
                                style={{ lineHeight: '25px' }}
                            >
                                {active.department}
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div
                        className="absolute z-30 rounded-[20px] overflow-hidden shadow-xl"
                        style={{
                            width: '309px',
                            height: '401px',
                            left: '255px',
                            top: '132px',
                        }}
                    >
                        <Image
                            src={active.image}
                            alt={active.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pb-5 pt-16">
                            <p
                                className={`${marcellus.className} text-white font-normal capitalize`}
                                style={{ fontSize: '24px', lineHeight: '25px' }}
                            >
                                {active.name}
                            </p>
                            <p
                                className={`${inter.className} text-white font-normal capitalize mt-0.5`}
                                style={{ fontSize: '16px', lineHeight: '25px' }}
                            >
                                {active.department}
                            </p>
                        </div>
                    </div>

                    {/* Right Side Card */}
                    <div
                        className="absolute z-10"
                        style={{
                            width: '208.05px',
                            height: '270px',
                            left: '1052px',
                            top: '214px',
                        }}
                    >
                        <div className="relative w-full h-full rounded-[15.38px] overflow-hidden shadow-md">
                            <Image
                                src={right.image}
                                alt={right.name}
                                fill
                                className="object-cover grayscale brightness-40"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-12">
                                <p
                                    className={`${marcellus.className} text-white capitalize`}
                                    style={{ fontSize: '18.4524px', lineHeight: '19px' }}
                                >
                                    {right.name}
                                </p>
                                <p
                                    className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap`}
                                    style={{ fontSize: '12.3016px', lineHeight: '19px' }}
                                >
                                    {right.department}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{ width: '43px', height: '42px', left: '0px', top: '322px' }}
                        aria-label="Previous testimonial"
                    >
                        <img src="/left_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{ width: '43px', height: '42px', left: '1238px', top: '322px' }}
                        aria-label="Next testimonial"
                    >
                        <img src="/right_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>
                </div>

                {/* Pagination Pills */}
                <div
                    className="flex items-center justify-center mt-8 md:mt-12 gap-2"
                    style={{ marginRight: window?.innerWidth >= 768 ? '40px' : '0' }}
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