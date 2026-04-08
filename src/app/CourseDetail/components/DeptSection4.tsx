'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection4 = ({ courseData }: Props) => {
    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex flex-col items-center px-4 md:px-10 lg:px-20 font-heading">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Our Vision & Mission" className="mb-12 4xl:mb-24" />
            <div
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 4xl:gap-32 p-8 md:p-12 lg:p-16 4xl:p-36 h-full w-full"
                style={{
                    background: 'linear-gradient(270deg, #0066A9 0%, #003C65 100%)',
                    borderRadius: '30px',
                }}
            >
                {/* Vision Box */}
                <div className="bg-white rounded-[30px] 4xl:rounded-[60px] px-6 py-10 md:px-12 md:py-12 4xl:px-24 4xl:py-24 flex-1 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-shadow">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-8 4xl:gap-16 mb-6 md:mb-10 4xl:mb-20">
                            <div className="text-[#46A2FF] w-12 md:w-16 4xl:w-40">
                                <img loading="lazy" decoding="async" src="deptvision.png" alt="Vision Icon" className="w-full h-auto group-hover:scale-110 transition-transform" />
                            </div>
                            <h3
                                className={"text-3xl md:text-5xl lg:text-[55px] 3xl:text-6xl 4xl:text-[110px] text-black capitalize font-heading font-normal leading-none"}
                            >
                                Vision
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize text-sm md:text-lg 3xl:text-2xl 4xl:text-[2.65rem] leading-relaxed 4xl:leading-[1.6] max-w-lg 4xl:max-w-5xl`}
                        >
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-[30px] 4xl:rounded-[60px] px-6 py-10 md:px-12 md:py-12 4xl:px-24 4xl:py-24 flex-1 flex flex-col relative overflow-hidden group hover:shadow-2xl transition-shadow">
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 md:gap-8 4xl:gap-16 mb-6 md:mb-10 4xl:mb-20">
                            <div className="text-[#46A2FF] w-12 md:w-16 4xl:w-40">
                                <img loading="lazy" decoding="async" src="deptmission.png" alt="Mission Icon" className="w-full h-auto group-hover:scale-110 transition-transform" />
                            </div>
                            <h3
                                className={"text-3xl md:text-5xl lg:text-[55px] 3xl:text-6xl 4xl:text-[110px] text-black capitalize font-heading font-normal leading-none"}
                            >
                                Mission
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize text-sm md:text-lg 3xl:text-2xl 4xl:text-[2.65rem] leading-relaxed 4xl:leading-[1.6] max-w-lg 4xl:max-w-5xl`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}


export default DeptSection4;