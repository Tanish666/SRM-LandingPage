'use client'
import React from 'react'
import SectionPill from '@/components/SectionPill'

interface Props {
    courseData?: any;
}

const DeptSection3 = ({ courseData }: Props) => {
    const defaultCards = [
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-[#FFF7C4]', textCol: 'text-muted-foreground' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-[#F2EDC2]', textCol: 'text-muted-foreground' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-[#FEF5B3]', textCol: 'text-muted-foreground' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-[#FCED9A]', textCol: 'text-muted-foreground' }
    ]
    
    const apiCards = courseData?.about_sections?.[0]?.number_data?.map((item: any, idx: number) => ({
        num: `${item.number}${item.symbol}`,
        text: item.text,
        bg: defaultCards[idx]?.bg || 'bg-[#FFF7C4]',
        textCol: 'text-muted-foreground'
    }));

    const cards = apiCards && apiCards.length > 0 ? apiCards : defaultCards;

    return (
        <section className="mt-4 mb-8 px-4 md:px-10 lg:px-20 max-w-8xl mx-auto w-full flex flex-col items-center">
            <SectionPill text="Impact & Stats" className="mb-8" />
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {cards.map((card: any, idx: number) => (
                <div key={idx} className={`w-full bg-[#FFF4B1] rounded-3xl py-8 md:py-12 px-6 md:px-8 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-[#FFE043]`}>
                    <h3 className={`font-display text-4xl md:text-5xl lg:text-6xl text-[#0071BC] mb-4 font-light`}>
                        {card.num}
                    </h3>
                    <p className={`${card.textCol} text-sm md:text-base font-medium leading-relaxed max-w-52`}>
                        {card.text}
                    </p>
                </div>
            ))}
            </div>
        </section>
    )
}

export default DeptSection3;