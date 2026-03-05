'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection8 = () => {
    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2.5 mb-8 shrink-0 w-max">
                <div className='w-2 h-5 bg-[#FFD812]' />
                <p className='text-[#000000] text-[16px] uppercase'>Our History</p>
            </div>

            <div className={`${marcellus.className} text-3xl md:text-[54px] text-slate-900 mb-24 text-center leading-tight max-w-4xl text-[#000000] whitespace-normal`}>
                <p>A Legacy Of Excellence In Engineering Education</p>
            </div>

            <div className="relative w-full max-w-5xl flex flex-col items-center">
                {/* Vertical Dotted Line */}
                <div className="absolute top-10 bottom-0 left-4 md:left-1/2 -translate-x-1/2 border-l-2 border-dashed border-gray-400 h-[85%]"></div>

                {/* Timeline Items */}
                {/* 2001 */}
                <div className="w-full relative flex flex-col md:flex-row mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                        <h3 className={`text-[30px] text-[#000000]`}>2001</h3>
                    </div>
                    {/* Yellow Circle */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#FFD812] rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"></div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                        <h4 className="text-[22px] text-[#000000] font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2003 */}
                <div className="w-full relative flex flex-col md:flex-row-reverse mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                        <h3 className={`text-[30px] text-[#000000]`}>2003</h3>
                    </div>
                    {/* Blue Circle */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#38BDF8] rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"></div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                        <h4 className="text-[22px] text-[#000000] font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2008 */}
                <div className="w-full relative flex flex-col md:flex-row mb-24">
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right">
                        <h3 className={`text-[30px] text-[#000000]`}>2008</h3>
                    </div>
                    {/* Blue Circle */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#38BDF8] rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"></div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 mt-4 md:mt-0">
                        <h4 className="text-[22px] text-[#000000] font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                {/* 2011 */}
                <div className="w-full relative flex flex-col md:flex-row-reverse">
                    <div className="w-full md:w-1/2 pl-12 md:pl-14 text-left">
                        <h3 className={`text-[30px] text-[#000000]`}>2011</h3>
                    </div>
                    {/* Blue Circle */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#38BDF8] rounded-full border-[5px] border-white ring-2 ring-[#38BDF8] z-10 shadow-md"></div>
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-14 text-left md:text-right mt-4 md:mt-0">
                        <h4 className="text-[22px] text-[#000000] font-normal mb-3" style={marcellus.style}>Empowering Generations</h4>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-5xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default AboutSection8
