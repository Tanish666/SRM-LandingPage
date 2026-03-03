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
        <section className="py-12 px-6 md:px-20 max-w-8xl mx-auto w-full">
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
                    style={{ padding: '0 80px' }}
                >
                    <div className="flex flex-col">
                        <h2
                            className={`${marcellus.className} text-[36px] text-[#0D1B2A] leading-[1.3] mb-4`}
                        >
                            Shape The Future Of Healthcare<br />
                            Start Your Journey Today!
                        </h2>
                        <p
                            className={`${inter.className} text-[15px] text-[#1a1a1a] font-light leading-relaxed max-w-[520px]`}
                        >
                            Lorem Ipsum Odor Amet, Consectetuer Adipiscing Elit. Hac Arcu Primis Hac In Senectus
                            Sit Penatibus. Efficitur Rutrum Pellentesque
                        </p>
                    </div>

                    <button
                        className="flex-shrink-0 inline-flex items-center justify-center bg-white hover:bg-gray-50 text-black font-medium text-[18px] transition-colors cursor-pointer"
                        style={{
                            width: '180px',
                            height: '55px',
                            borderRadius: '30px',
                            border: '1px solid #E5E5E5',
                        }}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DeptCTABanner ;