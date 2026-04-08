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
        <section className="w-full bg-[#F4F7FD] py-12 md:py-20 4xl:py-36 px-4 md:px-10 lg:px-20 flex justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 4xl:gap-36 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">
                    {/* Left: Blue frame */}
                    <div
                        className="flex-shrink-0 flex items-center justify-center rounded-[30px] 4xl:rounded-[60px] shadow-[0_10px_35px_rgba(0,113,188,0.2)] w-[300px] h-[340px] lg:w-[408px] lg:h-[445px] 3xl:w-[500px] 3xl:h-[550px] 4xl:w-[700px] 4xl:h-[800px]"
                        style={{
                            background:
                                'linear-gradient(to right, #0071BC 0%, #33AEFF 100%)',
                        }}
                    >
                        <div className="relative overflow-hidden rounded-[22px] 4xl:rounded-[44px] w-[250px] h-[280px] lg:w-[334px] lg:h-[358px] 3xl:w-[420px] 3xl:h-[450px] 4xl:w-[600px] 4xl:h-[650px]">
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
                            className={"text-[28px] lg:text-5xl 3xl:text-6xl 4xl:text-[100px] text-[#0D1B2A] leading-tight mb-4 4xl:mb-8 font-heading font-normal"}
                        >
                            Dr.Kumar Ebenezer K
                        </h3>
                        <p
                            className={`${inder.className} text-[#0071BC] font-normal mb-8 4xl:mb-16 text-2xl lg:text-[35px] 3xl:text-[40px] 4xl:text-6xl`}
                            style={{ lineHeight: '1.2', letterSpacing: '-0.03em' }}
                        >
                            Professor &amp; Principal
                        </p>
                        <div className="space-y-3 4xl:space-y-6">
                            <p className={`${inder.className} text-sm lg:text-base 3xl:text-xl 4xl:text-3xl text-[#1a1a1a]`}>
                                <span className="font-bold">Email:</span>{' '}
                                drkumarebenezerk@gmail.com
                            </p>
                            <p className={`${inder.className} text-sm lg:text-base 3xl:text-xl 4xl:text-3xl text-[#1a1a1a]`}>
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