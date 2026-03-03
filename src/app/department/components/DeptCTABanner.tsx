'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

const DeptCTABanner = () => {
    return (
        <section className="w-full" style={{ paddingTop: '48px', paddingBottom: '120px' }}>
            <div className="max-w-[1440px] mx-auto px-6">
                <div
                    className="relative mx-auto overflow-hidden"
                    style={{
                        width: '1241px',
                        height: '298px',
                        background: '#FFD812',
                        borderRadius: '20px',
                    }}
                >
                    <img
                        src="/Contourdept.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute pointer-events-none select-none"
                        style={{
                            width: '918px',
                            height: '298px',
                            left: '0px',
                            top: '0px',
                            opacity: 0.18,
                        }}
                    />

                    <div
                        className="relative z-10 flex items-center justify-between h-full"
                        style={{ paddingLeft: '56px', paddingRight: '60px' }}
                    >
                        <div className="flex flex-col gap-4">
                            <h2
                                className={`${marcellus.className} text-[45px] text-[#333333] capitalize`}
                                style={{
                                    lineHeight: '56px',
                                    width: '711px',
                                }}
                            >
                                Shape The Future Of Healthcare<br />
                                Start Your Journey Today!
                            </h2>
                            <p
                                className={`${inter.className} text-[15px] text-[#333333] font-normal capitalize`}
                                style={{
                                    lineHeight: '25px',
                                    width: '631px',
                                }}
                            >
                                Lorem Ipsum Odor Amet, Consectetuer Adipiscing Elit. Hac Arcu Primis Hac In Senectus
                                Sit Penatibus. Efficitur Rutrum Pellentesque
                            </p>
                        </div>

                        <button
                            className={`${inter.className} flex-shrink-0 inline-flex items-center justify-center bg-white hover:bg-gray-50 text-black font-normal capitalize cursor-pointer transition-colors`}
                            style={{
                                width: '275px',
                                height: '70px',
                                borderRadius: '49px',
                                fontSize: '26.19px',
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

export default DeptCTABanner;