'use client'
import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'
import { ChevronDown, ArrowUp } from 'lucide-react'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="relative w-full bg-brand-yellow-primary overflow-hidden">
            {/* Some graphic overlay */}
            <img src="ASec11Vector.svg" className='absolute z-10 bottom-0' alt="" />
            <div className="max-w-layout 3xl:max-w-[1800px] 4xl:max-w-[2200px] mx-auto w-full px-6 md:px-20 py-24 3xl:py-32 4xl:py-48 flex flex-col lg:flex-row gap-16 lg:gap-24 3xl:gap-32 4xl:gap-40 relative z-10">

                {/* Left Text */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <SectionPill text="Our Principles" className="mb-6 3xl:mb-10 4xl:mb-16" />
                    <h1 className={`${marcellus.className} text-headText text-slate-900 mb-6 md:mb-8 4xl:mb-12 leading-tight`}>
                        Our Principles
                    </h1>
                    <p className="text-gray-dark text-subText leading-1-8 max-w-xl 3xl:max-w-2xl 4xl:max-w-4xl mb-8 4xl:mb-16 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                    </p>
                </div>

                {/* Right Accordion */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 3xl:gap-6 4xl:gap-8">
                    {faq.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-none overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className={`w-full text-left px-6 md:px-8 3xl:px-12 4xl:px-16 py-4 md:py-6 3xl:py-8 4xl:py-12 flex items-center justify-between font-normal text-lg md:text-22px 3xl:text-28px 4xl:text-[38px] transition-colors ${marcellus.className} ${openIdx === idx ? 'bg-brand-blue-cyan text-white' : 'text-gray-dark hover:bg-slate-50'}`}
                            >
                                {item.q}
                                <span>
                                    {openIdx === idx ? <ArrowUp strokeWidth={1.5} className="text-white size-5 md:size-6 3xl:size-8 4xl:size-10" /> : <ChevronDown strokeWidth={1.5} className="text-brand-blue-cyan size-5 md:size-6 3xl:size-8 4xl:size-10" />}
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-[600px] 4xl:max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 3xl:px-12 4xl:px-16 pb-8 3xl:pb-12 4xl:pb-16 pt-4 4xl:pt-8 text-gray-dark leading-relaxed text-16px 3xl:text-20px 4xl:text-28px font-normal">
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
