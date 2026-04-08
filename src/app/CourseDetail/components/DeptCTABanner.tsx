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

interface Props {
    courseData?: any;
}

const DeptCTABanner = ({ courseData }: Props) => {
    return (
        <section className="w-full mt-16 lg:mt-[100px] mb-20 lg:mb-[150px]">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-6">
                <div
                    className="relative mx-auto overflow-hidden bg-[#FFD812] rounded-[20px] w-full max-w-[1241px] py-10 lg:py-0 lg:h-[298px]"
                >
                    <img loading="lazy" decoding="async"
                        src="/Contourdept.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none top-0 left-0 h-full opacity-[0.18]"
                    />

                    <div
                        className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 sm:px-10 lg:px-14 gap-6 lg:gap-4"
                    >
                        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
                            <SectionPill text="Enquiry" className="mb-4" />
                            <h2
                                className={`${marcellus.className} text-[28px] sm:text-[35px] lg:text-[45px] text-[#333333] capitalize leading-tight lg:leading-[56px] max-w-[711px]`}
                            >
                                Shape The Future Of Healthcare<br className="hidden lg:block" />
                                {' '}Start Your Journey Today!
                            </h2>
                            <p
                                className={`${inter.className} text-sm lg:text-[15px] text-[#333333] font-normal capitalize leading-relaxed lg:leading-[25px] max-w-[631px]`}
                            >
                                Lorem Ipsum Odor Amet, Consectetuer Adipiscing Elit. Hac Arcu Primis Hac In Senectus
                                Sit Penatibus. Efficitur Rutrum Pellentesque
                            </p>
                        </div>

                        <button
                            className={`${inter.className} flex-shrink-0 inline-flex items-center justify-center bg-white hover:bg-gray-50 text-black font-normal cursor-pointer transition-colors w-[220px] h-[55px] lg:w-[275px] lg:h-[70px] text-xl lg:text-[26.19px] border-none`}
                            style={{
                                borderRadius: '49px',
                                lineHeight: '32px',
                            }}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptCTABanner ;