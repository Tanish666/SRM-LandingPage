import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const FeeStructure = () => {
    return (
        <section className="px-8 md:px-20 py-8 w-full max-w-[1250px] mx-auto">
            <div className="relative bg-[#FFD812] rounded-[30px] p-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
                <img src="/ADSec2Vector.svg" alt="" className='absolute object-cover left-0 bottom-0' />

                {/* Decorative background element if needed */}
                <div className="max-w-3xl relative z-10">
                    <h2 className={`${marcellus.className} text-4xl md:text-[42px] text-gray-900 mb-4`}>
                        Fee Structure
                    </h2>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed opacity-90 max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="relative z-10 shrink-0">
                    <button className="bg-[#FFFFFF] text-gray-800 px-8 py-2 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap text-[16px] flex items-center gap-3">
                        <span className="text-gray-700">Download PDF</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeeStructure
