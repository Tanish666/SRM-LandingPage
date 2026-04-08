'use client'
import React, { useState } from 'react'
import { ChevronDown, ArrowUp } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'

const AboutSection11 = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0)

    const faq = [
        {
            q: "Leadership in Education and Research",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            q: "Growth and Achievements",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            q: "Quality and Global Standards",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            q: "Embracing Society and Business World",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
    ]

    return (
        <section className="relative w-full bg-brand-yellow overflow-hidden flex justify-center py-12 md:py-20 3xl:py-32 4xl:py-48 px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48">
            {/* Some graphic overlay */}
            <img loading="lazy" decoding="async" src="ASec11Vector.svg" className='absolute z-10 bottom-0' alt="" />
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col lg:flex-row gap-16 lg:gap-24 4xl:gap-36 relative z-10">

                {/* Left Text */}
                <div className="w-full lg:w-1/2 flex flex-col font-heading">
                    <SectionPill text="Our Principles" className="mb-6 4xl:mb-12" />
                    <h2 className={"text-h2 md:text-h1 3xl:text-6xl 4xl:text-display-1 text-navy-900 mb-6 md:mb-8 4xl:mb-16 leading-tight font-normal"}>
                        Our Principles
                    </h2>
                    <p className="text-navy-900/80 font-sans text-sm 3xl:text-xl 4xl:text-3xl leading-[1.8] max-w-xl 3xl:max-w-3xl 4xl:max-w-5xl mb-8 4xl:mb-16 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                    </p>
                </div>

                {/* Right Accordion */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 4xl:gap-8">
                    {faq.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-none overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className={`w-full text-left px-6 md:px-8 4xl:px-12 py-4 md:py-6 4xl:py-10 flex items-center justify-between font-normal text-lg md:text-xl 3xl:text-3xl 4xl:text-4xl transition-colors font-heading ${openIdx === idx ? 'bg-brand-blue-dark text-white' : 'text-navy-900 hover:bg-slate-50'}`}
                            >
                                {item.q}
                                <span>
                                    {openIdx === idx ? <ArrowUp strokeWidth={1.5} className="text-white size-5 md:size-6 3xl:size-8 4xl:size-12" /> : <ChevronDown strokeWidth={1.5} className="text-brand-blue-dark size-5 md:size-6 3xl:size-8 4xl:size-12" />}
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 4xl:max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-8 pt-4 4xl:px-12 4xl:pb-12 4xl:pt-8 text-navy-800/80 leading-relaxed text-base 3xl:text-xl 4xl:text-2xl font-normal">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AboutSection11
