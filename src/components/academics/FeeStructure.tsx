import React from 'react'
const FeeStructure = () => {
    return (
        <section className="py-12 md:py-20 3xl:py-28 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full relative bg-brand-yellow rounded-3xl 3xl:rounded-brand-md 4xl:rounded-brand-lg p-8 md:px-14 md:py-12 3xl:px-24 3xl:py-20 4xl:px-36 4xl:py-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 3xl:gap-16 4xl:gap-24 overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/ADSec2Vector.svg" alt="" className='absolute object-cover left-0 bottom-0 opacity-20 md:opacity-100 3xl:scale-150 4xl:scale-[175] origin-bottom-left' />

                {/* Decorative background element if needed */}
                <div className="max-w-3xl 3xl:max-w-5xl 4xl:max-w-7xl relative z-10 text-center md:text-left">
                    <h1 className="text-headText text-navy-900 mb-4 4xl:mb-8 font-heading font-normal">
                        Fee Structure
                    </h1>
                    <h2 className="text-navy-900/80 text-subText md:text-body 3xl:text-20px 4xl:text-38px leading-relaxed 3xl:leading-snug 4xl:leading-normal opacity-90 max-w-xl 3xl:max-w-3xl 4xl:max-w-5xl mx-auto md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </h2>
                </div>

                <div className="relative z-10 shrink-0 w-full md:w-auto flex justify-center md:justify-end items-center h-full">
                    <button className="bg-white text-navy-900 px-10 py-3 md:px-8 md:py-2 3xl:px-12 3xl:py-4 4xl:px-20 4xl:py-8 rounded-full font-semibold shadow-sm hover:bg-slate-50 transition-colors whitespace-nowrap text-15px md:text-body 3xl:text-20px 4xl:text-38px flex items-center gap-3 3xl:gap-5 4xl:gap-8 active:scale-95">
                        <span className="text-navy-900">Download PDF</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FeeStructure
