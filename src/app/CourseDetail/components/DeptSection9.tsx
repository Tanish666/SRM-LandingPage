'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="pt-20 px-6  max-w-[1440px] mx-auto w-full bg-white flex flex-col items-center">
            <SectionPill text="Achievements" className="mb-8" />
            {/* Title */}
            <h2
                className={`${marcellus.className} text-[45px] text-black text-center capitalize`}
                style={{ lineHeight: '56px' }}
            >
                Students &nbsp;Awards & Achievements
            </h2>

            {/* Cards + Arrows wrapper */}
            <div className="mx-auto w-full lg:w-[1227px]">
                {/* Navigation Arrows */}
                <div className="flex items-center justify-end gap-[15px] mt-6 mb-6">
                    {/* Left Arrow Button  */}
                    <button
                        className="p-0 border-none bg-transparent hover:brightness-95 active:scale-95 transition-all cursor-pointer"
                        style={{ width: '43px', height: '42px' }}
                    >
                        <img loading="lazy" decoding="async" src="/left_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>

                    {/* Right Arrow Button  */}
                    <button
                        className="p-0 border-none bg-transparent hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                        style={{ width: '43px', height: '42px' }}
                    >
                        <img loading="lazy" decoding="async" src="/right_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>
                </div>

                {/* 3 Cards Row */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 pb-4">
                    {cards.map((card, index) => (
                        <div key={index} className="w-full lg:w-[373px]">
                            {/* Image Placeholder */}
                            <div
                                className="bg-[#D9D9D9] rounded-[10px] w-full"
                                style={{ height: '225px' }}
                            />

                            {/* Date Label with Yellow Bar */}
                            <div className="flex items-center gap-[6px] mt-[14px] mb-1">
                                <span style={{ width: '10px', height: '16px', background: '#FFD812' }} />
                                <span className={`${inter.className} text-base font-normal text-[#333333]`} style={{ lineHeight: '26px' }}>
                                    {card.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className={`${marcellus.className} text-[22px] font-normal text-black capitalize mb-1`} style={{ lineHeight: '28px' }}>
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className={`${inter.className} text-[15px] font-normal text-[#333333] mb-2`} style={{ lineHeight: '26px' }}>
                                {card.description}
                            </p>

                            {/* Action Link */}
                            <button
                                className={`${inter.className} text-base text-[#0071BC] font-normal hover:underline cursor-pointer bg-transparent border-none p-0`}
                                style={{ lineHeight: '26px' }}
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeptSection9