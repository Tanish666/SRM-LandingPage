'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import SectionPill from '@/components/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection4 = ({ courseData }: Props) => {
    return (
        <section
            className="relative mx-auto w-full px-4 md:px-10 lg:px-20 mt-10 mb-10 flex flex-col items-center"
        >
            <SectionPill text="Our Vision & Mission" className="mb-8" />
            <div
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 h-full"
                style={{
                    background: 'linear-gradient(270deg, #0066A9 0%, #003C65 100%)',
                    borderRadius: '30px',
                }}
            >
                {/* Vision Box */}
                <div className="bg-white rounded-[30px] px-6 py-8 md:px-10 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="text-[#46A2FF] w-12 md:w-auto">
                                <img src="deptvision.png" alt="Vision Icon" className="w-full h-auto" />
                            </div>
                            <h3
                                className={`${marcellus.className} text-3xl md:text-4xl lg:text-[45px] text-[#000000] capitalize`}
                            >
                                Vision
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize text-sm md:text-base leading-relaxed max-w-lg`}
                        >
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-[30px] px-6 py-8 md:px-10 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="text-[#46A2FF] w-12 md:w-auto">
                                <img src="deptmission.png" alt="Mission Icon" className="w-full h-auto" />
                            </div>
                            <h3
                                className={`${marcellus.className} text-3xl md:text-4xl lg:text-[45px] text-[#000000] capitalize`}
                            >
                                Mission
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize text-sm md:text-base leading-relaxed max-w-lg`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection4;