'use client'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
})

interface Props {
    courseData?: any;
}

const DeptSection7 = ({ courseData }: Props) => {
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

    const displayItems = courseData?.po_pso_peo?.length > 0
        ? courseData.po_pso_peo.map((item: any) => {
            const text = item.text || '';
            const titleMatch = text.match(/\*\*(.*?)\*\*/);
            const title = titleMatch ? titleMatch[1] : 'Objectives';

            const contentStr = text.replace(/\*\*(.*?)\*\*/g, '');

            const pMatches = [...contentStr.matchAll(/<p[^>]*>(.*?)<\/p>/g)];
            let items = pMatches.length > 0 ? pMatches.map((m: any) => m[1]) : [];
            if (items.length === 0) {
                items = contentStr.split('\n').filter((line: string) => line.trim().length > 0);
            }

            const content = items.map((line: string) => {
                const cleanText = line.replace(/<[^>]+>/g, '').trim();
                const colonMatch = cleanText.match(/^([A-Za-z0-9_]+)\s*[:|-]\s*(.*)/);
                if (colonMatch) {
                    return {
                        label: colonMatch[1].trim(),
                        text: colonMatch[2].trim()
                    };
                }
                return {
                    label: '',
                    text: cleanText
                };
            }).filter((p: any) => p.label || p.text);

            return { title, content };
        })
        : accordionItems;

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section className="relative w-full overflow-hidden flex justify-center bg-[#FFF4B1] px-4 md:px-10 lg:px-20 py-12 md:py-20 4xl:py-36">
            <div className="w-full max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] flex flex-col items-center">
                <SectionPill text="POs, PSOs, PEOs" className="mb-8 4xl:mb-16" />

                {/* Title */}
                <h2 className={"text-[28px] lg:text-[45px] 3xl:text-6xl 4xl:text-[85px] text-black leading-tight capitalize mb-6 lg:mb-[40px] 4xl:mb-[80px] text-center font-heading"}>
                    POs,PSOs And PEOs
                </h2>

                {/* Accordion Container */}
                <div className="w-full space-y-3 lg:space-y-[18px] 4xl:space-y-12">
                    {displayItems.map((item: any, index: number) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="w-full transition-all duration-300">
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`w-full flex items-center justify-between px-4 lg:px-[42px] 4xl:px-16 transition-all duration-200 rounded-[10px] 4xl:rounded-[20px] relative z-[1] cursor-pointer h-[50px] lg:h-[63.16px] 4xl:h-[120px] ${isOpen ? 'bg-[#0071BC]' : 'bg-white'}`}
                                >
                                    <span className={`font-heading text-base lg:text-[23.46px] 3xl:text-3xl 4xl:text-[2.75rem] leading-tight text-left ${isOpen ? 'text-white' : 'text-[#595959]'}`}>
                                        {item.title}
                                    </span>
                                    <img loading="lazy" decoding="async"
                                        src={isOpen ? '/POuparrow.png' : '/POdropdown.svg'}
                                        alt=""
                                        className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] 4xl:w-[70px] 4xl:h-[70px] flex-shrink-0 ml-2"
                                    />
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                        maxHeight: isOpen ? '800px' : '0px',
                                        marginTop: isOpen ? '-20px' : '0px',
                                    }}
                                >
                                    <div
                                        className="bg-white shadow-lg"
                                        style={{ borderRadius: '10px', border: '1.68px solid #FFFFFF' }}
                                    >
                                        <div className="px-4 lg:px-[42px] 4xl:px-16 pb-6 lg:pb-[40px] 4xl:pb-20 space-y-0.5 pt-10 lg:pt-[60px] 4xl:pt-[100px]">
                                            {item.content.map((point: any, pIndex: number) => (
                                                <p key={pIndex} className={`${poppins.className} text-sm lg:text-base 3xl:text-xl 4xl:text-3xl font-bold text-[#595959] leading-relaxed 4xl:leading-[1.6]`}>
                                                    {point.label && <>{point.label} – </>}<span className="font-normal">{point.text}</span>
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
        </section>
    )
}

export default DeptSection7;
