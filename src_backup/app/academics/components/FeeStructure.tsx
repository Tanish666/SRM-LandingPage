import React from 'react'
const FeeStructure = () => {
    return (
        <section className="px-4 md:px-20 py-8 w-full max-w-[1315px] mx-auto">
            <div className="relative bg-[#FFD812] rounded-3xl p-8 md:px-14 md:py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/ADSec2Vector.svg" alt="" className='absolute object-cover left-0 bottom-0 opacity-20 md:opacity-100' />

                {/* Decorative background element if needed */}
                <div className="max-w-3xl relative z-10 text-center md:text-left">
                    <h2 className={`font-display text-3xl md:text-5xl text-gray-900 mb-4`}>
                        Fee Structure
                    </h2>
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed opacity-90 max-w-xl mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                    <button className="bg-background text-gray-800 px-10 py-3 md:px-8 md:py-2 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap text-base md:text-base flex items-center gap-3">
                        <span className="text-gray-900">Download PDF</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeeStructure
