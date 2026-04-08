'use client'
import React, { useState } from 'react'
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
        <section className="py-12 md:py-20 3xl:py-28 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 overflow-hidden">
            <div className="max-w-3xl 3xl:max-w-5xl 4xl:max-w-7xl w-full flex flex-col items-center">
                <h2 className={"text-2xl md:text-[42px] 3xl:text-6xl 4xl:text-[90px] text-gray-900 mb-10 md:mb-14 3xl:mb-20 4xl:mb-32 text-center font-heading"}>
                    Frequently Asked Questions
                </h2>

                <div className="w-full flex flex-col gap-4 3xl:gap-8 4xl:gap-12">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl 3xl:rounded-[2rem] 4xl:rounded-[3rem] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#f6f7f9] border border-gray-100 shadow-sm' : 'bg-[#eff1f4]'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                    className={`w-full text-left px-6 md:px-8 3xl:px-12 4xl:px-20 py-5 3xl:py-8 4xl:py-12 flex items-center justify-between transition-colors ${isOpen ? 'bg-[#0070c0] text-white' : 'text-[#444] hover:bg-[#e8eaed]'}`}
                                >
                                    <span className={`text-sm md:text-base 3xl:text-2xl 4xl:text-4xl pr-4 ${isOpen ? 'font-medium' : 'font-normal'}`}>
                                        {faq.question}
                                    </span>
                                    <span className="shrink-0">
                                        {isOpen ? (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="3xl:w-6 3xl:h-6 4xl:w-10 4xl:h-10">
                                                <path d="M11 9L7 5L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="3xl:w-6 3xl:h-6 4xl:w-10 4xl:h-10">
                                                <path d="M3 5L7 9L11 5" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="p-6 md:p-8 3xl:p-12 4xl:p-20 text-[#666] text-sm md:text-[15px] 3xl:text-xl 4xl:text-3xl leading-relaxed 3xl:leading-snug 4xl:leading-normal bg-[#f6f7f9] border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Faq
