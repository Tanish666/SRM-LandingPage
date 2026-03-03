'use client'
import React, { useState } from 'react'
import { Marcellus, Poppins } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const DeptSection7 = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const accordionItems = [
        {
            title: 'Programme Educational Objectives (PEOs)',
            content: [
                { label: 'PEO1', text: 'Pursue advanced education, research and development in Cardiac Care Technology' },
                { label: 'PEO2', text: 'Successfully apply analytical techniques, problem-solving for a career in the field of critical Care technology' },
                { label: 'PEO3', text: 'Implement their knowledge in critically ill patients, from classroom lectures, laboratory work, practical demonstration and case studies to acknowledge the full range of technical and associated societal issues' },
                { label: 'PEO4', text: 'Retain the intellectual curiosity that motivates lifelong learning making them versatile to the rapidly evolving health care system challenges' },
            ],
        },
        {
            title: 'Programme Outcomes (POs)',
            content: [
                { label: 'PO1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
                { label: 'PO2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
            ],
        },
        {
            title: 'Programme Specific Outcomes(PSOs)',
            content: [
                { label: 'PSO1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
                { label: 'PSO2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
            ],
        },
    ]

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="relative w-full overflow-hidden flex justify-center bg-[#FFF4B1]" style={{ padding: '90px 0' }}>
            <div className="w-full max-w-[1041px] flex flex-col items-center">

                {/* Title: POs,PSOs And PEOs */}
                <h2 className={`${marcellus.className} text-[45px] text-black leading-[56px] capitalize mb-[40px] text-center`}>
                    POs,PSOs And PEOs
                </h2>

                {/* Accordion Container */}
                <div className="w-full space-y-[18px]">
                    {accordionItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="w-full transition-all duration-300">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between px-[42px] transition-all duration-200 rounded-[10px] relative z-[1]"
                                    style={{
                                        height: '63.16px',
                                        backgroundColor: isOpen ? '#0071BC' : '#FFFFFF',
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <span className={`${marcellus.className} text-[23.46px] leading-[29px] ${isOpen ? 'text-white' : 'text-[#595959]'}`}>
                                        {item.title}
                                    </span>
                                    <img
                                        src={isOpen ? '/POuparrow.png' : '/POdropdown.svg'}
                                        alt=""
                                        style={{ width: '35px', height: '35px' }}
                                    />
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? '500px' : '0px',
                                        marginTop: isOpen ? '-20px' : '0px',
                                    }}
                                >
                                    <div
                                        className="bg-white"
                                        style={{ borderRadius: '10px', border: '1.68px solid #FFFFFF' }}
                                    >
                                        <div className="px-[42px] pb-[40px] space-y-0.5" style={{ paddingTop: '60px' }}>
                                            {item.content.map((point, pIndex) => (
                                                <p key={pIndex} className={`${poppins.className} text-[16px] font-bold text-[#595959] leading-[31px]`}>
                                                    {point.label} – <span className="font-normal">{point.text}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    )
}

export default DeptSection7;