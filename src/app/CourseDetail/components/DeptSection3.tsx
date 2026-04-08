'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import SectionPill from '@/components/home/SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

interface Props {
    courseData?: any;
}

const DeptSection3 = ({ courseData }: Props) => {
    const defaultCards = [
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-[#FFF7C4]', textCol: 'text-slate-700' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-[#F2EDC2]', textCol: 'text-slate-700' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-[#FEF5B3]', textCol: 'text-slate-700' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-[#FCED9A]', textCol: 'text-slate-700' }
    ]
    
    const apiCards = courseData?.about_sections?.[0]?.number_data?.map((item: any, idx: number) => ({
        num: `${item.number}${item.symbol}`,
        text: item.text,
        bg: defaultCards[idx]?.bg || 'bg-[#FFF7C4]',
        textCol: 'text-slate-700'
    }));

    const cards = apiCards && apiCards.length > 0 ? apiCards : defaultCards;

    return (
        <section className="mt-4 mb-8 px-4 md:px-10 lg:px-20 max-w-8xl mx-auto w-full flex flex-col items-center">
            <SectionPill text="Impact & Stats" className="mb-8" />
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {cards.map((card: any, idx: number) => (
                <div key={idx} className={`w-full bg-[#FFF4B1] rounded-[24px] py-8 md:py-12 px-6 md:px-8 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-[#FFE043]`}>
                    <h3 className={`${marcellus.className} text-4xl md:text-5xl lg:text-6xl text-[#0071BC] mb-4 font-light`}>
                        {card.num}
                    </h3>
                    <p className={`${card.textCol} text-sm md:text-[15px] font-medium leading-relaxed max-w-[200px]`}>
                        {card.text}
                    </p>
                </div>
            ))}
            </div>
        </section>
    )
}

export default DeptSection3;