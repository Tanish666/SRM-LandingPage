'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection8 = () => {
    return (
        <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto flex flex-col items-center">

            <div className="flex items-center gap-2.5 border border-slate-200 px-5 py-2 rounded-full mb-8 bg-white shrink-0 shadow-sm w-max">
                <span className="size-2 bg-[#FFD100] rounded-full"></span>
                <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">Our legacy</span>
            </div>

            <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 mb-20 text-center leading-tight max-w-3xl`}>
                A Legacy Of Excellence In Engineering Education
            </h2>

            <div className="relative w-full max-w-3xl flex flex-col items-center">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-300"></div>

                {/* Timeline Items */}
                <div className="w-full relative flex items-center mb-16">
                    <div className="w-1/2 pr-12 text-right">
                        <h3 className={`${marcellus.className} text-3xl text-slate-900`}>2021</h3>
                    </div>
                    {/* Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFD100] rounded-full ring-4 ring-white z-10 shadow-sm"></div>
                    <div className="w-1/2 pl-12">
                        <h4 className="font-semibold text-slate-800 text-[17px] mb-2">Incorporation Of Committee</h4>
                        <p className="text-slate-500 text-[14.5px] leading-relaxed">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>
                    </div>
                </div>

                <div className="w-full relative flex items-center mb-16 flex-row-reverse">
                    <div className="w-1/2 pl-12">
                        <h3 className={`${marcellus.className} text-3xl text-slate-900`}>2020</h3>
                    </div>
                    {/* Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0277bd] rounded-full ring-4 ring-white z-10 shadow-sm"></div>
                    <div className="w-1/2 pr-12 text-right">
                        <h4 className="font-semibold text-slate-800 text-[17px] mb-2">Inauguration</h4>
                        <p className="text-slate-500 text-[14.5px] leading-relaxed">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>
                    </div>
                </div>

                <div className="w-full relative flex items-center mb-16">
                    <div className="w-1/2 pr-12 text-right">
                        <h3 className={`${marcellus.className} text-3xl text-slate-900`}>2019</h3>
                    </div>
                    {/* Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0277bd] rounded-full ring-4 ring-white z-10 shadow-sm"></div>
                    <div className="w-1/2 pl-12">
                        <h4 className="font-semibold text-slate-800 text-[17px] mb-2">Inauguration Of First Batch</h4>
                        <p className="text-slate-500 text-[14.5px] leading-relaxed">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>
                    </div>
                </div>

                <div className="w-full relative flex items-center flex-row-reverse">
                    <div className="w-1/2 pl-12">
                        <h3 className={`${marcellus.className} text-3xl text-slate-900 text-gray-400`}>2018</h3>
                    </div>
                    {/* Circle */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-300 rounded-full ring-4 ring-white z-10 shadow-sm"></div>
                    <div className="w-1/2 pr-12 text-right">
                        <h4 className="font-semibold text-slate-800 text-[17px] mb-2 text-gray-400/80">Incorporation Of Committee</h4>
                        <p className="text-slate-400 text-[14.5px] leading-relaxed">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutSection8
