'use client'
import React from 'react'
import { Marcellus, Inder } from 'next/font/google'
import Image from 'next/image'
import SectionPill from '@/components/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inder = Inder({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection8 = ({ courseData }: Props) => {
    return (
        <section className="w-full overflow-hidden">
            {/* Full-width bg container */}
            <div className="relative bg-[#F4F7FD] flex items-center justify-center py-16 lg:py-0 px-6 lg:px-0 lg:h-[637px]">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[118px] max-w-[1440px] mx-auto">
                    {/* Left: Blue frame */}
                    <div
                        className="flex-shrink-0 flex items-center justify-center rounded-[30px] shadow-[0_10px_35px_rgba(0,113,188,0.2)] w-[300px] h-[340px] lg:w-[408px] lg:h-[445px]"
                        style={{
                            background:
                                'linear-gradient(to right, #0071BC 0%, #33AEFF 100%)',
                        }}
                    >
                        <div className="relative overflow-hidden rounded-[22px] w-[250px] h-[280px] lg:w-[334px] lg:h-[358px]">
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
                        <SectionPill text="Principal's Note" className="mb-6" />
                        <h3
                            className={`${marcellus.className} text-[28px] lg:text-[40px] text-[#0D1B2A] leading-tight mb-4`}
                        >
                            Dr.Kumar Ebenezer K
                        </h3>
                        <p
                            className={`${inder.className} text-[#0071BC] font-normal mb-8 text-[24px] lg:text-[35px]`}
                            style={{ lineHeight: '38.11px', letterSpacing: '-0.03em' }}
                        >
                            Professor &amp; Principal
                        </p>
                        <p className={`${inder.className} text-[14px] lg:text-[16px] text-[#1a1a1a] mb-3`}>
                            <span className="font-bold">Email:</span>{' '}
                            drkumarebenezerk@gmail.com
                        </p>
                        <p className={`${inder.className} text-[14px] lg:text-[16px] text-[#1a1a1a]`}>
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