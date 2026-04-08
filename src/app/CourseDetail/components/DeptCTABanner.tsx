'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

interface Props {
    courseData?: any;
}

const DeptCTABanner = ({ courseData }: Props) => {
    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex justify-center px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full relative overflow-hidden bg-brand-yellow rounded-3xl 4xl:rounded-brand-lg py-12 lg:py-16 4xl:py-32">
                    <img loading="lazy" decoding="async"
                        src="/Contourdept.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none top-0 left-0 h-full opacity-[0.18]"
                    />

                    <div
                        className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-6 sm:px-10 lg:px-14 4xl:px-24 gap-6 lg:gap-4"
                    >
                        <div className="flex flex-col gap-4 4xl:gap-8 text-center lg:text-left items-center lg:items-start">
                            <SectionPill text="Enquiry" className="mb-4 4xl:mb-8" />
                            <h2
                                className={"text-h2 sm:text-h2 lg:text-h1 3xl:text-6xl 4xl:text-display-2 text-navy-900 capitalize leading-tight lg:leading-[56px] 4xl:leading-tight max-w-[711px] 4xl:max-w-7xl font-heading font-normal"}
                            >
                                Shape The Future Of Healthcare<br className="hidden lg:block" />
                                {' '}Start Your Journey Today!
                            </h2>
                            <p
                                className={`${inter.className} text-sm lg:text-base 3xl:text-xl 4xl:text-3xl text-navy-800/80 font-normal capitalize leading-relaxed lg:leading-[25px] 4xl:leading-normal max-w-[631px] 4xl:max-w-5xl`}
                            >
                                Lorem Ipsum Odor Amet, Consectetuer Adipiscing Elit. Hac Arcu Primis Hac In Senectus
                                Sit Penatibus. Efficitur Rutrum Pellentesque
                            </p>
                        </div>

                        <button
                            className={`${inter.className} flex-shrink-0 inline-flex items-center justify-center bg-white hover:bg-white/90 text-navy-900 font-normal cursor-pointer transition-colors w-56 h-14 lg:w-70 lg:h-18 4xl:w-110 4xl:h-30 text-xl lg:text-2xl 4xl:text-4xl border-none rounded-full`}
                        >
                            Apply Now
                        </button>
                    </div>
            </div>
        </section>

    )
}

export default DeptCTABanner ;