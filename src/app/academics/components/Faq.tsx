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
            <h2 className={`${marcellus.className} text-3xl md:text-[38px] text-gray-900 mb-10 text-center`}>
                Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-[8px]">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className={`rounded-[12px] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#f4f5f7] border border-gray-100 shadow-sm' : 'bg-[#f8f9fa]'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                className={`w-full text-left px-6 py-[18px] flex items-center justify-between transition-colors ${isOpen ? 'bg-[#0070c0] text-white' : 'text-gray-600 hover:bg-[#eef0f3]'}`}
                            >
                                <span className={`text-[15px] ${isOpen ? 'font-medium' : 'font-normal'}`}>
                                    {faq.question}
                                </span>
                                <span className="shrink-0 ml-4">
                                    {isOpen ? (
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 11.5V2.5M2.5 7L7 2.5L11.5 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 4.5L7 9L11.5 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="p-6 px-7 text-gray-500 text-[14px] leading-relaxed bg-[#f8f9fa] border-t border-gray-100">
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
