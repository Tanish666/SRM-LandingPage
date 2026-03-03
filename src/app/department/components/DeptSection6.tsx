'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptSection6 = () => {
    return (
        <section className="py-12 w-full flex justify-center">
            {/* Container */}
            <div className="flex items-stretch" style={{ height: '510px' }}>
                {/* Left image*/}
                <div
                    className="relative overflow-hidden z-10 flex-shrink-0"
                    style={{ width: '497px', height: '510px', borderRadius: '30px' }}
                >
                    <Image
                        src="/depsecpic3.jpg"
                        alt="B.Sc. Cardiac Care Technology students"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Content card  */}
                <div
                    className="rounded-[30px] flex-shrink-0"
                    style={{
                        width: '840px',
                        height: '510px',
                        padding: '2px',
                        background: 'linear-gradient(180deg, #0071BC, #17A1FA)',
                        marginLeft: '-100px',
                    }}
                >
                    <div
                        className="bg-[#F4F7FD] w-full h-full rounded-[28px] flex flex-col justify-center"
                        style={{ paddingLeft: '160px', paddingRight: '60px' }}
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 bg-white rounded-[20px] w-fit mb-5 border border-[#F5F5F5]" style={{ width: '195px', height: '41px', paddingLeft: '17px' }}>
                            <span className="rounded-[20px] border border-white" style={{ width: '10px', height: '10px', background: '#F4CB00' }}></span>
                            <span className="text-[16px] font-normal text-black capitalize" style={{ lineHeight: '19px' }}>Programs offered</span>
                        </div>

                        {/* Title */}
                        <h2 className={`${marcellus.className} text-[40px] text-black capitalize mb-4`} style={{ lineHeight: '50px' }}>
                            B.Sc. Cardiac Care Technology
                        </h2>

                        {/* Description */}
                        <p className="text-[15px] text-[#515151] capitalize mb-8" style={{ textAlign: 'justify', lineHeight: '25px', width: '571px' }}>
                            The B.Sc. Cardiac Care Technology Program Is Designed To Provide Broad
                            Theoretical And Skill-Based Knowledge Related To How Well A Heart Is
                            Functioning And Can Monitor Heart Rate.
                        </p>

                        {/* Button */}
                        <a
                            href="#"
                            className="inline-flex items-center justify-between bg-[#FFEC22] transition-colors"
                            style={{
                                width: '230px',
                                height: '47px',
                                borderRadius: '33.57px',
                                border: '1.12px solid #E5E5E5',
                                paddingLeft: '26px',
                                paddingRight: '4px',
                            }}
                        >
                            <span className="text-[18px] font-normal text-black capitalize" style={{ lineHeight: '28px' }}>Explore Program</span>
                            <span
                                className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                                style={{ width: '39px', height: '38px', borderRadius: '33.57px' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(0deg)' }}>
                                    <line x1="5" y1="19" x2="19" y2="5" />
                                    <polyline points="9 5 19 5 19 15" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection6
