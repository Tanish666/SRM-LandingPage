'use client'
import React from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'

const Counter = ({ value }: { value: string }) => {
    const numMatch = value.match(/(\d+)(.*)/);
    const targetNum = numMatch ? parseInt(numMatch[1]) : 0;
    const suffix = numMatch ? numMatch[2] : "";

    const count = useMotionValue(0);
    const springValue = useSpring(count, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001
    });
    const rounded = useTransform(springValue, (latest) => Math.round(latest) + suffix);

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    React.useEffect(() => {
        if (isInView) {
            count.set(targetNum);
        }
    }, [isInView, count, targetNum]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

const AboutSection3 = () => {
    const cards = [
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-brand-yellow-light' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-brand-yellow-light/80' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-brand-yellow-light/90' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-brand-yellow-light/70' }
    ]

    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 3xl:gap-12 4xl:gap-16">
                {cards.map((card, idx) => (
                    <div key={idx} className={`${card.bg} rounded-3xl 4xl:rounded-brand-md py-12 px-8 3xl:py-20 3xl:px-12 4xl:py-28 4xl:px-16 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 transition-transform border border-brand-yellow/20`}>
                        <h1 className="text-headText text-brand-blue-dark mb-4 4xl:mb-8 font-light font-heading leading-tight">
                            <Counter value={card.num} />
                        </h1>
                        <h2 className="text-navy-800/70 text-subText leading-relaxed max-w-[12rem] 3xl:max-w-[16rem] 4xl:max-w-[22rem] font-medium">
                            {card.text}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutSection3
