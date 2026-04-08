import React from 'react'
const FeeStructure = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-28 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full relative bg-[#FFD812] rounded-[20px] 3xl:rounded-[40px] 4xl:rounded-[60px] p-8 md:px-14 md:py-12 3xl:px-24 3xl:py-20 4xl:px-36 4xl:py-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 3xl:gap-16 4xl:gap-24 overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/ADSec2Vector.svg" alt="" className='absolute object-cover left-0 bottom-0 opacity-20 md:opacity-100 3xl:scale-150 4xl:scale-[2] origin-bottom-left' />

                {/* Decorative background element if needed */}
                <div className="max-w-3xl 3xl:max-w-5xl 4xl:max-w-7xl relative z-10 text-center md:text-left">
                    <h2 className={"text-3xl md:text-[42px] 3xl:text-6xl 4xl:text-[90px] text-gray-900 mb-4 4xl:mb-8 font-heading"}>
                        Fee Structure
                    </h2>
                    <p className="text-gray-800 text-sm md:text-base 3xl:text-xl 4xl:text-4xl leading-relaxed 3xl:leading-snug 4xl:leading-normal opacity-90 max-w-xl 3xl:max-w-3xl 4xl:max-w-5xl mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center md:justify-end">
                    <button className="bg-white text-gray-800 px-10 py-3 md:px-8 md:py-2 3xl:px-12 3xl:py-4 4xl:px-20 4xl:py-8 rounded-full font-semibold shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap text-[15px] md:text-base 3xl:text-xl 4xl:text-4xl flex items-center gap-3 3xl:gap-5 4xl:gap-8">
                        <span className="text-gray-900">Download PDF</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeeStructure
