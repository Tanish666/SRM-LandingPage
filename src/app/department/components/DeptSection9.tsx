'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'

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

const DeptSection9 = () => {
    return (
        <section className="py-16 px-6 md:px-20 max-w-[1440px] mx-auto w-full bg-white">
            {/* Title */}
            <h2
                className={`${marcellus.className} text-[45px] text-black text-center capitalize`}
                style={{ lineHeight: '56px' }}
            >
                Students &nbsp;Awards & Achievements
            </h2>

            {/* Navigation Arrows - Fixed with Sharp Tail Radius */}
            <div className="flex items-center justify-end gap-[15px] mt-8 mb-6 pr-[10px]">
                
                {/* Left Arrow Button (Yellow) */}
                <button 
                    className="flex items-center justify-center bg-[#FFD812] rounded-[22px] transition-all hover:brightness-95 active:scale-95" 
                    style={{ width: '43px', height: '42px' }}
                >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" 
                         strokeWidth="3" 
                         strokeLinecap="square" 
                         strokeLinejoin="miter">
                        {/* Left Tail */}
                        <line x1="20" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>

                {/* Right Arrow Button (Blue) */}
                <button 
                    className="flex items-center justify-center bg-[#0071BC] rounded-[22px] transition-all hover:brightness-110 active:scale-95" 
                    style={{ width: '43px', height: '42px' }}
                >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" 
                         strokeWidth="3" 
                         strokeLinecap="square" 
                         strokeLinejoin="miter">
                        {/* Right Tail */}
                        <line x1="4" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>

            {/* 3 Cards Row */}
            <div className="flex gap-[54px] justify-center overflow-x-auto pb-4">
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: '373px' }}>
                        {/* Image Placeholder */}
                        <div 
                            className="bg-[#D9D9D9] rounded-[10px] w-full" 
                            style={{ height: '225px' }} 
                        />

                        {/* Date Label with Yellow Bar */}
                        <div className="flex items-center gap-[6px] mt-[14px] mb-1">
                            <span style={{ width: '10px', height: '16px', background: '#FFD812' }} />
                            <span className={`${inter.className} text-[16px] font-normal text-[#333333]`} style={{ lineHeight: '26px' }}>
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
                            className={`${inter.className} text-[16px] text-[#0071BC] font-medium hover:underline cursor-pointer bg-transparent border-none p-0`}
                            style={{ lineHeight: '26px' }}
                        >
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DeptSection9