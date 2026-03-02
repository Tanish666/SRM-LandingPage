'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection3 = () => {
    const cards = [
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-[#FFF7C4]', textCol: 'text-slate-700' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-[#F2EDC2]', textCol: 'text-slate-700' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-[#FEF5B3]', textCol: 'text-slate-700' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-[#FCED9A]', textCol: 'text-slate-700' }
    ]

    return (
        <section className="py-12 px-6 md:px-20 max-w-8xl mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center gap-8">
            {cards.map((card, idx) => (
                <div key={idx} className={`flex-1 min-w-[240px] bg-[#FFF4B1] rounded-[24px] py-12 px-8 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-[#FFE043]`}>
                    <h3 className={`${marcellus.className} text-5xl lg:text-[56px] text-[#0071BC] mb-4 font-light`}>
                        {card.num}
                    </h3>
                    <p className={`${card.textCol} text-[15px] font-medium leading-relaxed max-w-[200px]`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
            ))}
        </section>
    )
}

export default AboutSection3
