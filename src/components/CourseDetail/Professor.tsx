'use client'
import React from 'react'
import { Inder } from 'next/font/google'
import Image from 'next/image'

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
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 4xl:gap-36 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
                {/* Left: Blue frame */}
                <div className='p-10 bg-[#2DA4FE] rounded-2xl'>
                    <div className="flex-shrink-0 rounded-lg  overflow-hidden">
                        <div className="relative w-64 h-72 lg:w-[22rem] lg:h-[26rem] 3xl:w-105 3xl:h-[30rem] 4xl:w-[40rem] 4xl:h-[44rem]">
                            <Image
                                src="/depsecpic4.webp"
                                alt="Dr. Kumar Ebenezer K"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* Right: Name, Designation & Contact */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h1
                        className="text-heroText text-navy-900 leading-tight mb-4 4xl:mb-8 font-heading font-normal"
                    >
                        Dr.Kumar Ebenezer K
                    </h1>
                    <h2
                        className={`${inder.className} text-[#2DA4FE] font-normal mb-8 4xl:mb-16 text-subText2`}
                        style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}
                    >
                        Professor &amp; Principal
                    </h2>
                    <div className="space-y-3 4xl:space-y-6">
                        <p className={`${inder.className} text-subText text-navy-800`}>
                            <span className="font-bold text-navy-900">Email:</span>{' '}
                            drkumarebenezerk@gmail.com
                        </p>
                        <p className={`${inder.className} text-subText text-navy-800`}>
                            <span className="font-bold text-navy-900">Phone:</span>{' '}
                            000-000-000
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection8