'use client'
import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

interface Testimonial {
    name: string
    program: string
    image: string
    testimonial: string
}

const DeptSection10 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials: Testimonial[] = [
        {
            name: 'Saranya Mohan',
            program: 'B.Sc Cardiac Care Technology',
            image: '/depsecpic5.jpg',
            testimonial:
                'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
        },
        {
            name: 'Swetha',
            program: 'B.Sc Cardiac Care Technology',
            image: '/depsecpic5.jpg',
            testimonial:
                'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
        },
        {
            name: 'Priya',
            program: 'B.Sc Cardiac Care Technology',
            image: '/depsecpic5.jpg',
            testimonial:
                'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
        },
    ]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const prevIdx = (currentIndex - 1 + testimonials.length) % testimonials.length
    const nextIdx = (currentIndex + 1) % testimonials.length
    const farNextIdx = (currentIndex + 2) % testimonials.length

    const current = testimonials[currentIndex]
    const next = testimonials[nextIdx]

    return (
        <section className="py-12 px-6 md:px-20 max-w-8xl mx-auto w-full">
            {/* Container */}
            <div
                className="relative mx-auto rounded-[20px]"
                style={{
                    width: '1281px',
                    padding: '1.86px',
                    background: 'linear-gradient(180deg, #E2E2E2, #B8B8B8)',
                }}
            >
                <div className="bg-white rounded-[18px] overflow-hidden">
                    {/* Title */}
                    <h2 className={`${marcellus.className} text-[40px] text-[#0D1B2A] leading-tight text-center pt-8 pb-6`}>
                        Insights From Our Learners
                    </h2>

                    {/* Carousel area */}
                    <div className="relative flex items-stretch" style={{ height: '380px' }}>

                        {/* Left peeking card  */}
                        <div className="w-[140px] flex-shrink-0 relative overflow-hidden">
                            <img
                                src={testimonials[prevIdx].image}
                                alt="Previous"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                            {/* Name overlay */}
                            <div className="absolute bottom-4 left-3 right-3 z-10">
                                <p className="text-white text-[13px] font-semibold">{testimonials[prevIdx].name}</p>
                                <p className="text-white/70 text-[11px]">{testimonials[prevIdx].program}</p>
                            </div>
                        </div>

                        {/* Center: Main student image */}
                        <div className="relative flex-shrink-0 overflow-hidden" style={{ width: '280px' }}>
                            <img
                                src={current.image}
                                alt={current.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Name overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <p className="text-white font-semibold text-[15px]">{current.name}</p>
                                <p className="text-white/80 text-[12px]">{current.program}</p>
                            </div>
                        </div>

                        {/* Right: Testimonial text area */}
                        <div className="flex-1 flex flex-col justify-center px-10 py-6">
                            {/* Quote marks */}
                            <div className="flex gap-1 mb-4">
                                <div className="w-[6px] h-[20px] bg-[#0071BC] rounded-sm" />
                                <div className="w-[6px] h-[20px] bg-[#0071BC] rounded-sm" />
                            </div>

                            <p className="text-[15px] text-slate-600 leading-[1.8] mb-6">
                                {next.testimonial}
                            </p>
                            <p className="text-[#0071BC] font-semibold text-[17px] mb-1">{next.name}</p>
                            <p className="text-slate-500 text-[14px]">{next.program}</p>
                        </div>

                        {/* Right peeking card */}
                        <div className="w-[140px] flex-shrink-0 relative overflow-hidden">
                            <img
                                src={testimonials[farNextIdx].image}
                                alt="Next"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50" />
                            {/* Name overlay */}
                            <div className="absolute bottom-4 left-3 right-3 z-10">
                                <p className="text-white text-[13px] font-semibold">{testimonials[farNextIdx].name}</p>
                                <p className="text-white/70 text-[11px]">{testimonials[farNextIdx].program}</p>
                            </div>
                        </div>

                        {/* Left arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-[120px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center hover:bg-[#FFC800] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        {/* Right arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-[120px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0071BC] flex items-center justify-center hover:bg-[#005a96] transition-colors"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center gap-2 py-5">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-[6px] rounded-full transition-all ${
                                    idx === currentIndex ? 'w-[30px] bg-[#0071BC]' : 'w-[10px] bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection10;
