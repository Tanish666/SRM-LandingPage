'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptSection8 = () => {
    return (
        <section className="w-full overflow-hidden">
            {/* Full-width bg container  */}
            <div
                className="relative bg-[#F4F7FD] flex items-center"
                style={{ width: '1800px', height: '637px', left: '-80px', borderRadius: '0px' }}
            >
                <div className="flex flex-row items-center gap-[118px]" style={{ paddingLeft: '264px' }}>
                    {/* Left: Blue frame*/}
                    <div
                        className="flex-shrink-0 flex items-center justify-center rounded-[30px] shadow-[0_10px_35px_rgba(0,113,188,0.2)]"
                        style={{
                            width: '408px',
                            height: '445px',
                            background:
                                'linear-gradient(to right, #0071BC 0%, #33AEFF 100%)',
                        }}
                    >
                        <div
                            className="relative overflow-hidden rounded-[22px]"
                            style={{ width: '334px', height: '358px' }}
                        >
                            <Image
                                src="/depsecpic4.png"
                                alt="Dr. Kumar Ebenezer K"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Name, Designation & Contact */}
                    <div className="flex flex-col items-start">
                        <h3
                            className={`${marcellus.className} text-[40px] text-[#0D1B2A] leading-tight mb-4`}
                        >
                            Dr.Kumar Ebenezer K
                        </h3>
                        <p
                            className={`${marcellus.className} text-[#0071BC] text-[24px] italic font-normal mb-8`}
                        >
                            Professor &amp; Principal
                        </p>
                        <p className="text-[16px] text-[#1a1a1a] mb-3">
                            <span className="font-bold">Email:</span>{' '}
                            drkumarebenezerk@gmail.com
                        </p>
                        <p className="text-[16px] text-[#1a1a1a]">
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
