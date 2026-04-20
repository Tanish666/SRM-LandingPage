'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

const cards = [
    {
        date: 'August 25.2025',
        title: 'Guest Lecture On Hemophilia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        date: 'August 25.2025',
        title: 'Guest Lecture On Hemophilia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        date: 'August 25.2025',
        title: 'Guest Lecture On Hemophilia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
]

interface Props {
    courseData?: any;
}

const DeptSection9 = ({ courseData }: Props) => {
    return (
        <section className="py-12 md:py-20 4xl:py-36 px-4 md:px-10 lg:px-20 w-full bg-white flex flex-col items-center">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Achievements" className="mb-8 4xl:mb-16" />
                {/* Title */}
                <h1 className="text-heroText text-navy-900 text-center capitalize leading-tight mb-8 4xl:mb-16 font-heading font-normal">
                    Students Awards & Achievements
                </h1>

                {/* Cards + Arrows wrapper */}
                <div className="w-full">
                    {/* Navigation Arrows */}
                    <div className="flex items-center justify-end gap-[15px] 4xl:gap-8 mb-8 4xl:mb-16">
                        {/* Left Arrow Button  */}
                        <button
                            className="p-0 border-none bg-transparent hover:brightness-95 active:scale-95 transition-all cursor-pointer size-11 4xl:size-22"
                        >
                            <img loading="lazy" decoding="async" src="/left_arrow.svg" alt="Previous" className="w-full h-full" />
                        </button>

                        {/* Right Arrow Button  */}
                        <button
                            className="p-0 border-none bg-transparent hover:brightness-110 active:scale-95 transition-all cursor-pointer size-11 4xl:size-22"
                        >
                            <img loading="lazy" decoding="async" src="/right_arrow.svg" alt="Next" className="w-full h-full" />
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-16 pb-4">
                        {cards.map((card, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Image Placeholder */}
                                <div className="bg-[#D9D9D9] rounded-xl 4xl:rounded-3xl w-full aspect-[373/225]" />

                                {/* Date Label with Yellow Bar */}
                                <div className="flex items-center gap-1.5 4xl:gap-3 mt-4 4xl:mt-8 mb-2 4xl:mb-4">
                                    <span className="w-2.5 h-4 4xl:w-5 4xl:h-8 bg-brand-yellow flex-shrink-0" />
                                    <span className={`${inter.className} text-body 3xl:text-20px 4xl:text-28px font-normal text-navy-800/80`}>
                                        {card.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-20px lg:text-24px 3xl:text-28px 4xl:text-65px font-normal text-navy-900 capitalize mb-2 4xl:mb-6 leading-tight font-heading">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className={`${inter.className} text-15px md:text-body 3xl:text-18px 4xl:text-28px font-normal text-navy-800/70 mb-4 4xl:mb-10 leading-relaxed`}>
                                    {card.description}
                                </p>

                                {/* Action Link */}
                                <button className={`${inter.className} text-body 3xl:text-18px 4xl:text-28px text-brand-blue-dark font-normal hover:underline cursor-pointer bg-transparent border-none p-0 text-left transition-colors`}>
                                    Read More
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection9