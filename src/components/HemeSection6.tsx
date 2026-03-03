'use client'
import React from 'react';
import { Marcellus } from 'next/font/google';
import { IconArrowNarrowRight } from '@tabler/icons-react';
const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})
const HemeSection6 = () => {
    return (
        <section className="w-full py-16 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    {/* Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#DBDBDB] bg-[#F9F9F9] shadow-sm mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#0066CC]"></div>
                        <span className="text-sm text-gray-700 font-medium">Research</span>
                    </div>

                    {/* Title */}
                    <h2 className={`${marcellus.className} text-center text-[40px] md:text-[46px] leading-[1.2] text-gray-900 mb-4 tracking-normal`}>
                        Driving Innovation In Allied Health Research
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-gray-500 text-[15px] md:text-base max-w-2xl mx-auto leading-relaxed">
                        Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical
                        Practice, Diagnostics, And Public Health Outcomes.
                    </p>
                </div>

                {/* Mobile Button (shown above cards on mobile) */}
                <div className="flex justify-center mb-8 md:hidden">
                    <button className="bg-[#FFD000] text-black font-medium py-3 px-8 rounded-full flex items-center gap-3 hover:bg-[#F2C500] transition-all shadow-sm">
                        Explore Our Research
                        <span className="bg-white rounded-full p-1 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Cards Grid Container */}
                <div className="relative">
                    {/* Desktop Button - Absolutely positioned above Grid center */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 w-auto">
                        <button className="bg-[#FFCE00] text-black font-medium py-1 px-1 pl-8 rounded-full flex items-center gap-3 hover:bg-[#E6BA00] transition-colors shadow-sm">
                            Explore Our Research
                            <span className="bg-white rounded-full p-1.5 flex items-center justify-center">
                                <IconArrowNarrowRight stroke={1.5} className='-rotate-[30deg]' size={35} />
                            </span>
                        </button>
                    </div>

                    {/* The Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

                        {/* Card 1 */}
                        <div className="rounded-[30px] p-[2.3px] bg-gradient-to-b from-[#C0C0C0] to-[#17A1FA] shadow-sm mt-8 md:mt-0">
                            <div className="h-auto md:h-[340px] w-full rounded-[30px] bg-gradient-to-b from-[#FFFFFF] to-[#D2EDFF] p-7 flex flex-col justify-between">

                                <div className="mb-6 md:mb-0">
                                    <img src="sec5Svg1.svg" alt="" />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className={`${marcellus.className} text-[#0066CC] text-[42px] font-light leading-none mb-3`}>
                                        94+
                                    </h3>
                                    <p className={`${marcellus.className} text-gray-900 font-medium text-[17px] leading-tight mb-2`}>
                                        Active Research Projects
                                    </p>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">
                                        Across Rehabilitation, Diagnostics, Imaging & Community Health.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-[30px] p-[2.3px] bg-gradient-to-b from-[#C0C0C0] to-[#17A1FA] shadow-sm mt-8 md:mt-0">
                            <div className="h-auto md:h-[220px] rounded-[30px] bg-gradient-to-b from-[#FFFFFF] to-[#D2EDFF] p-7 flex flex-col justify-end relative">

                                <div className="md:absolute top-7 right-7 mb-6 md:mb-0 hidden md:block">
                                    <img src="sec5Svg2.svg" alt="" />
                                </div>

                                {/* Mobile icon */}
                                <div className="md:hidden mb-6 block">
                                    <img src="sec5Svg2.svg" alt="" />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className={`${marcellus.className} text-[#0066CC] text-[42px] font-light leading-none mb-3`}>
                                        468+
                                    </h3>
                                    <p className={`${marcellus.className} text-gray-900 font-medium text-[17px] leading-tight mb-2`}>
                                        Intellectual Property Rights
                                    </p>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">
                                        Under Our Intellectual Property Rights (IPR) Cell.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-[30px] p-[2.3px] bg-gradient-to-b from-[#C0C0C0] to-[#17A1FA] shadow-sm mt-8 md:mt-0">
                            <div className="h-auto md:h-[220px] rounded-[30px] bg-gradient-to-b from-[#FFFFFF] to-[#D2EDFF] p-7 flex flex-col justify-end relative">

                                <div className="md:absolute top-7 right-7 mb-6 md:mb-0 hidden md:block">
                                    <img src="sec5Svg3.svg" alt="" />
                                </div>

                                {/* Mobile icon */}
                                <div className="md:hidden mb-6 block">
                                    <img src="sec5Svg3.svg" alt="" />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className={`${marcellus.className} text-[#0066CC] text-[42px] font-light leading-none mb-3`}>
                                        20+
                                    </h3>
                                    <p className={`${marcellus.className} text-gray-900 font-medium text-[17px] leading-tight mb-2`}>
                                        Collaborative Partnerships
                                    </p>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">
                                        With Hospitals, Research Bodies & Academic Institutions.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-[30px] p-[2.3px] bg-gradient-to-b from-[#C0C0C0] to-[#17A1FA] shadow-sm mt-8 md:mt-0">
                            <div className="h-auto md:h-[340px] rounded-[30px] bg-gradient-to-b from-[#FFFFFF] to-[#D2EDFF] p-7 flex flex-col justify-between">

                                <div className="mb-6 md:mb-0">
                                    <img src="sec5Svg4.svg" alt="" />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className={`${marcellus.className} text-[#0066CC] text-[42px] font-light leading-none mb-3`}>
                                        100+
                                    </h3>
                                    <p className={`${marcellus.className} text-gray-900 font-medium text-[17px] leading-tight mb-2`}>
                                        Student Research Engagement
                                    </p>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">
                                        With Hospitals, Research Bodies & Academic Institutions.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HemeSection6;