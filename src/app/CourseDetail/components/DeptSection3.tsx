'use client'
import React from 'react'
import SectionPill from '@/components/home/SectionPill'

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
        <section className="py-12 md:py-20 4xl:py-36 w-full flex flex-col items-center px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Impact & Stats" className="mb-12 3xl:mb-16 4xl:mb-24" />
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 4xl:gap-16'>
            {cards.map((card: any, idx: number) => (
                <div key={idx} className={`w-full bg-[#FFF4B1] rounded-[24px] 4xl:rounded-[50px] py-8 md:py-12 4xl:py-24 px-6 md:px-8 4xl:px-16 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-[#FFE043]`}>
                    <h3 className={"text-4xl md:text-5xl lg:text-6xl 4xl:text-[130px] text-[#0071BC] mb-4 4xl:mb-10 font-light font-heading leading-none"}>
                        {card.num}
                    </h3>
                    <p className={`${card.textCol} text-sm md:text-[15px] 3xl:text-xl 4xl:text-4xl font-medium leading-relaxed max-w-[200px] 3xl:max-w-[260px] 4xl:max-w-[400px]`}>
                        {card.text}
                    </p>
                </div>
            ))}
            </div>
            </div>
        </section>
    )
}

export default DeptSection3;