'use client'
import React from 'react'
import { Inder } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/home/SectionPill'

const inder = Inder({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection8 = ({ courseData }: Props) => {
    return (
        <section className="w-full bg-brand-lightBlue-tint py-12 md:py-20 4xl:py-36 px-4 md:px-10 lg:px-20 flex justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 4xl:gap-36 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
                    {/* Left: Blue frame */}
                    <div
                        className="flex-shrink-0 flex items-center justify-center rounded-brand-md 4xl:rounded-brand-lg shadow-[0_10px_35px_rgba(0,113,188,0.2)] w-75 h-85 lg:w-102 lg:h-112 3xl:w-125 3xl:h-140 4xl:w-175 4xl:h-200 bg-gradient-to-r from-brand-blue-dark to-brand-blue-sky"
                    >
                        <div className="relative overflow-hidden rounded-brand-md 4xl:rounded-brand-lg w-62 h-70 lg:w-[21rem] lg:h-[22.5rem] 3xl:w-105 3xl:h-112 4xl:w-150 4xl:h-160">
                            <Image
                                src="/depsecpic4.png"
                                alt="Dr. Kumar Ebenezer K"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Name, Designation & Contact */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <SectionPill text="Principal's Note" className="mb-6 4xl:mb-12" />
                        <h3
                            className="text-h3 lg:text-h1 3xl:text-65px 4xl:text-display-2 text-navy-900 leading-tight mb-4 4xl:mb-8 font-heading font-normal"
                        >
                            Dr.Kumar Ebenezer K
                        </h3>
                        <p
                            className={`${inder.className} text-brand-blue-dark font-normal mb-8 4xl:mb-16 text-24px lg:text-h2 3xl:text-38px 4xl:text-65px`}
                            style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}
                        >
                            Professor &amp; Principal
                        </p>
                        <div className="space-y-3 4xl:space-y-6">
                            <p className={`${inder.className} text-15px lg:text-body 3xl:text-20px 4xl:text-28px text-navy-800/80`}>
                                <span className="font-bold">Email:</span>{' '}
                                drkumarebenezerk@gmail.com
                            </p>
                            <p className={`${inder.className} text-15px lg:text-body 3xl:text-20px 4xl:text-28px text-navy-800/80`}>
                                <span className="font-bold">Phone:</span>{' '}
                                000-000-000
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default DeptSection8