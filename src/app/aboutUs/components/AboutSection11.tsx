'use client'
import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'
import { ChevronDown, ArrowUp } from 'lucide-react'

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
        <section className="relative w-full bg-[#FFD100] overflow-hidden">
            {/* Some graphic overlay */}
            <img src="ASec11Vector.svg" className='absolute z-10 bottom-0' alt="" />
            <div className="max-w-[1450px] mx-auto px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Text */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <h2 className={`${marcellus.className} text-4xl md:text-[60px] text-slate-900 mb-6 md:mb-8 leading-tight`}>
                        Our Principles
                    </h2>
                    <p className="text-[#3E3E3E] text-[15px] leading-[1.8] max-w-xl mb-8 font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                    </p>
                </div>

                {/* Right Accordion */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {faq.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-none overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className={`w-full text-left px-6 md:px-8 py-4 md:py-6 flex items-center justify-between font-normal text-lg md:text-[22px] transition-colors ${marcellus.className} ${openIdx === idx ? 'bg-[#00ADEF] text-white' : 'text-[#3E3E3E] hover:bg-slate-50'}`}
                            >
                                {item.q}
                                <span>
                                    {openIdx === idx ? <ArrowUp strokeWidth={1.5} className="text-white size-5 md:size-6" /> : <ChevronDown strokeWidth={1.5} className="text-[#00ADEF] size-5 md:size-6" />}
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-8 pb-8 pt-4 text-[#3E3E3E] leading-relaxed text-[16px] font-normal">
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
