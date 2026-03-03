'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptSection2 = () => {
    return (
        <section className="py-20 w-full flex justify-center">

            <div className="flex items-start" style={{ gap: '86px' }}>
                {/* Left Side  */}
                <div className="shrink-0">
                    <div className="relative" style={{ width: '462px', height: '480px' }}>
                        {/* Blue background rectangle  */}
                        <div
                            className="absolute rounded-[20px] bg-[#008EED]"
                            style={{ width: '447px', height: '469px', top: '11px', left: '15px' }}
                        />

                        {/* Main Image  */}
                        <div
                            className="relative overflow-hidden z-10"
                            style={{ width: '447px', height: '464px', borderRadius: '10.72px' }}
                        >
                            <img src='/deptsecpic2.png' className='w-full h-full object-cover' alt="Department students" />
                        </div>
                    </div>
                </div>

                {/* Right Side*/}
                <div className="flex flex-col items-start" style={{ paddingTop: '22px' }}>
                    {/* Title*/}
                    <h2
                        className={`${marcellus.className} text-[45px] text-black capitalize`}
                        style={{ width: '687px', lineHeight: '100%', letterSpacing: '0%', marginBottom: '24px' }}
                    >
                        Department Of Cardiac Care Technology
                    </h2>

                    {/* Body text  */}
                    <div
                        className="font-light text-[18px] text-black flex flex-col gap-5"
                        style={{ width: '705px', lineHeight: '27px', textAlign: 'justify', letterSpacing: '0%' }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <p>
                            ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>

                    {/* Explore Program Button */}
                    <a
                        href="#"
                        className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors mt-8"
                        style={{
                            width: '224px',
                            height: '47px',
                            borderRadius: '33.57px',
                            border: '1.12px solid #E5E5E5',
                            paddingLeft: '20px',
                            paddingRight: '4px',
                        }}
                    >
                        <span className="text-[18px] font-normal text-black" style={{ lineHeight: '28.2px' }}>Explore Program</span>
                        <span
                            className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                            style={{ width: '39px', height: '38px' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5" />
                                <polyline points="9 5 19 5 19 15" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default DeptSection2;
