'use client'
import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'
import { Plus, Minus } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection11 = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0)

    const faq = [
        {
            q: "Uncompromising Ethical Standards",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            q: "Integrity In All We Do",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            q: "Empathy And Compassion",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            q: "Fostering Innovation And Research",
            a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]

    return (
        <section className="w-full bg-[#FFD100] relative overflow-hidden">
            {/* Some graphic overlay */}
            <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-10 bg-gradient-to-tr from-white to-transparent pointer-events-none"></div>

            <div className="max-w-[1450px] mx-auto px-6 md:px-20 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">

                {/* Left Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className={`${marcellus.className} text-4xl md:text-[52px] text-slate-900 mb-6 leading-tight`}>
                        Our Principles
                    </h2>
                    <p className="text-slate-800 text-[16px] leading-[1.8] max-w-lg mb-8 font-medium">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
                    </p>
                </div>

                {/* Right Accordion */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {faq.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[16px] overflow-hidden shadow-sm transition-all duration-300">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className={`w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-[17px] transition-colors ${openIdx === idx ? 'bg-[#0073B4] text-white' : 'text-slate-800 hover:bg-slate-50'}`}
                            >
                                {item.q}
                                <span>
                                    {openIdx === idx ? <Minus size={22} className="text-white" /> : <Plus size={22} className="text-[#0073B4]" />}
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 text-slate-600 leading-relaxed text-[15.5px]">
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
