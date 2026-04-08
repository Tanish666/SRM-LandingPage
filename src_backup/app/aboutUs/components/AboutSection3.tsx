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
        { num: '94+', text: 'Undergraduate and Postgraduate Programs', bg: 'bg-[#FFF7C4]', textCol: 'text-muted-foreground' },
        { num: '468+', text: 'Publications in reputed peer-reviewed journals', bg: 'bg-[#F2EDC2]', textCol: 'text-muted-foreground' },
        { num: '20+', text: 'State-of-the-art labs & research centers', bg: 'bg-[#FEF5B3]', textCol: 'text-muted-foreground' },
        { num: '100+', text: 'Placement partners across healthcare sectors', bg: 'bg-[#FCED9A]', textCol: 'text-muted-foreground' }
    ]

    return (
        <section className="py-12 px-6 md:px-20 max-w-8xl mx-auto w-full flex flex-wrap lg:flex-nowrap justify-center gap-8">
            {cards.map((card, idx) => (
                <div key={idx} className={`flex-1 min-w-60 bg-[#FFF4B1] rounded-3xl py-12 px-8 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform border border-[#FFE043]`}>
                    <h3 className={`font-display text-5xl lg:text-6xl text-[#0071BC] mb-4 font-light`}>
                        <Counter value={card.num} />
                    </h3>
                    <p className={`text-muted-foreground text-base leading-relaxed max-w-52 `}>
                        {card.text}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default AboutSection3
