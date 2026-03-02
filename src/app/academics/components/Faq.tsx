'use client'
import React, { useState } from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="flex flex-col items-center px-8 md:px-20 py-16 w-full max-w-[1000px] mx-auto mb-10">
            <h2 className={`${marcellus.className} text-3xl md:text-[42px] text-gray-900 mb-14 text-center`}>
                Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#f6f7f9] border border-gray-100 shadow-sm' : 'bg-[#eff1f4]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                className={`w-full text-left px-8 py-5 flex items-center justify-between transition-colors ${isOpen ? 'bg-[#0070c0] text-white' : 'text-[#444] hover:bg-[#e8eaed]'}`}
                            >
                                <span className={`text-[16px] ${isOpen ? 'font-medium' : 'font-normal'}`}>
                                    {faq.question}
                                </span>
                                <span className="shrink-0 ml-4">
                                    {isOpen ? (
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 9L7 5L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 5L7 9L11 5" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="p-8 px-8 text-[#666] text-[15px] leading-relaxed bg-[#f6f7f9] border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Faq
