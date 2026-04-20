'use client'
import React, { useEffect, useRef } from 'react'
import SectionPill from '@/components/home/SectionPill'
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'

interface Props {
    courseData?: any;
}

const Counter = ({ value }: { value: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract the numeric part and the suffix part (e.g., "94+" -> 94 and "+")
    const matches = value.match(/(\d+)(.*)/);
    const target = matches ? parseInt(matches[1], 10) : 0;
    const suffix = matches ? matches[2] : "";

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, count, target]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
        </span>
    );
};

const DeptSection3 = ({ courseData }: Props) => {
    const defaultCards = [
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-brand-yellow-light', textCol: 'text-navy-800' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-brand-yellow-light/80', textCol: 'text-navy-800' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-brand-yellow-light/90', textCol: 'text-navy-800' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-brand-yellow-light/70', textCol: 'text-navy-800' }
    ]

    const apiCards = courseData?.about_sections?.[0]?.number_data?.map((item: any, idx: number) => ({
        num: `${item.number}${item.symbol}`,
        text: item.text,
        bg: defaultCards[idx]?.bg || 'bg-brand-yellow-light',
        textCol: 'text-navy-800'
    }));

    const cards = apiCards && apiCards.length > 0 ? apiCards : defaultCards;

    return (
        <section className="py-12 md:py-20 4xl:py-36 w-full flex flex-col items-center px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">
                <SectionPill text="Impact & Stats" className="mb-12 3xl:mb-16 4xl:mb-24" />
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 4xl:gap-16'>
                    {cards.map((card: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="w-full bg-brand-yellow-light rounded-3xl 4xl:rounded-brand-md py-8 md:py-12 4xl:py-24 px-6 md:px-8 4xl:px-16 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-brand-yellow-border"
                        >
                            <h1 className="text-heroText text-brand-blue-dark mb-4 4xl:mb-10 font-light font-heading leading-none">
                                <Counter value={card.num} />
                            </h1>
                            <p className={`${card.textCol} text-subText leading-relaxed max-w-[12rem] 3xl:max-w-[16rem] 4xl:max-w-[24rem]`}>
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeptSection3;
