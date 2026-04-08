'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import SectionPill from './SectionPill'
import { motion, useInView, animate, useMotionValue, useTransform, useSpring } from 'framer-motion'


const inter = Inter({ subsets: ['latin'], weight: ['400'] })

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

const HemeSection6 = () => {
    const stats = [
        {
            icon: "sec5Svg1.svg", iconW: 83, iconH: 69,
            num: "94+", label: "Active Research Projects",
            desc: "Across Rehabilitation, Diagnostics, Imaging & Community Health.",
            width: '295px', height: '345px', top: '182px', left: '0px',
            descWidth: '283px'
        },
        {
            icon: "sec5Svg2.svg", iconW: 57, iconH: 58,
            num: "468+", label: "Intellectual Property Rights",
            desc: "Under Our Intellectual Property Rights (IPR) Cell.",
            width: '295px', height: '227px', top: '300px', left: '314px',
            descWidth: '247px'
        },
        {
            icon: "sec5Svg3.svg", iconW: 66, iconH: 66,
            num: "20+", label: "Collaborative Partnerships",
            desc: "With Hospitals, Research Bodies & Academic Institutions.",
            width: '295px', height: '227px', top: '300px', left: '628px',
            descWidth: '247px'
        },
        {
            icon: "sec5Svg4.svg", iconW: 84, iconH: 84,
            num: "100+", label: "Student Research Engagement",
            desc: "With Hospitals, Research Bodies & Academic Institutions.",
            width: '303px', height: '345px', top: '182px', left: '942px',
            descWidth: '247px'
        }
    ]

    return (
        <section className="w-full bg-background flex justify-center py-12 lg:py-20 px-4 lg:px-0 overflow-hidden mb-8 lg:-mb-20">

            {/* MOBILE LAYOUT */}
            <div className="flex flex-col items-center w-full lg:hidden">
                <SectionPill text="Research" className="uppercase" />


                {/* Main Heading */}
                <h2 className={`font-display text-center text-3xl leading-[36px] text-foreground capitalize mt-4 max-w-[90%]`}>
                    Driving Innovation In Allied Health Research
                </h2>

                {/* Subtitle */}
                <p className={`${inter.className} text-center text-muted-foreground text-sm leading-[22px] capitalize mt-3 max-w-[90%]`}>
                    Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical Practice, Diagnostics, And Public Health Outcomes.
                </p>

                {/* CTA Button */}
                <button
                    className="inline-flex items-center justify-between bg-[#FFD812] transition-colors cursor-pointer mt-6"
                    style={{
                        width: '267px',
                        height: '47px',
                        borderRadius: '33.57px',
                        border: '1.12px solid #E5E5E5',
                        paddingLeft: '20px',
                        paddingRight: '4px',
                    }}
                >
                    <span className={`${inter.className} text-lg font-normal text-foreground capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                    <span className="rounded-full bg-background flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
                        <IconArrowNarrowRight stroke={1.5} className='-rotate-[30deg] text-foreground' size={24} />
                    </span>
                </button>

                {/* Mobile Stat Cards */}
                <div className="flex flex-col gap-4 mt-8 w-full max-w-[400px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-full rounded-3xl p-px"
                            style={{ background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)' }}
                        >
                            <div
                                className="w-full rounded-3xl p-5"
                                style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)' }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`font-display text-4xl leading-[36px] text-[#0066CC]`}>
                                        <Counter value={stat.num} />
                                    </h3>
                                    <img loading="lazy" decoding="async"
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="object-contain max-w-14 max-h-14"
                                    />
                                </div>
                                <p className={`font-display text-lg leading-[24px] text-foreground capitalize mb-1`}>
                                    {stat.label}
                                </p>
                                <p className={`${inter.className} text-sm leading-[22px] text-muted-foreground capitalize`}>
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT  */}
            <div className="relative hidden lg:block" style={{ width: '1245px', height: '650px' }}>
                <div className='w-full flex justify-center items-center'>
                    <SectionPill text="Research" className="mb-8" />
                </div>


                {/* Main Heading */}
                <h2
                    className={`font-display absolute text-center text-5xl leading-[56px] text-foreground capitalize`}
                    style={{ width: '1166px', left: '41.5px', top: '65px' }}
                >
                    Driving Innovation In Allied Health Research
                </h2>

                {/* Subtitle */}
                <p
                    className={`${inter.className} absolute text-center text-muted-foreground text-base leading-[25px] capitalize`}
                    style={{ width: '623px', left: '312.5px', top: '135px' }}
                >
                    Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical Practice, Diagnostics, And Public Health Outcomes.
                </p>

                {/* CTA Button */}
                <div className="absolute z-50 cursor-pointer" style={{ left: '507.5px', top: '210px' }}>
                    <button
                        className="inline-flex items-center justify-between bg-[#FFD812] transition-colors cursor-pointer"
                        style={{
                            width: '267px',
                            height: '47px',
                            borderRadius: '33.57px',
                            border: '1.12px solid #E5E5E5',
                            paddingLeft: '20px',
                            paddingRight: '4px',
                        }}
                    >
                        <span className={`${inter.className} text-lg font-normal text-foreground capitalize`} style={{ lineHeight: '28.2px' }}>Explore Our Research</span>
                        <span className="rounded-full bg-background flex items-center justify-center flex-shrink-0" style={{ width: '39px', height: '38px' }}>
                            <IconArrowNarrowRight stroke={1.5} className='-rotate-[30deg] text-foreground' size={24} />
                        </span>
                    </button>
                </div>

                {/* Desktop Stat Cards*/}
                <div className="absolute w-full" style={{ top: '0px' }}>
                    {stats.map((stat, index) => {
                        const isShortCard = index === 1 || index === 2
                        return (
                            <div key={index} className="absolute rounded-3xl p-px" style={{
                                width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                background: 'linear-gradient(180deg, #C0C0C0 0%, #17A1FA 100%)'
                            }}>
                                <div className="w-full h-full rounded-3xl relative overflow-hidden" style={{
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #D2EDFF 100%)',
                                }}>
                                    <div className={`absolute ${isShortCard ? 'top-7 right-5' : 'top-20 left-5'}`}>
                                        <img loading="lazy" decoding="async" src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                    </div>
                                    <h3
                                        className={`font-display absolute text-5xl leading-[40px] text-[#0066CC]`}
                                        style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                    >
                                        <Counter value={stat.num} />
                                    </h3>
                                    <p
                                        className={`font-display absolute text-xl leading-[25px] text-foreground capitalize`}
                                        style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                    >
                                        {stat.label}
                                    </p>
                                    <p
                                        className={`${inter.className} absolute text-base leading-[25px] text-muted-foreground capitalize`}
                                        style={{ width: stat.descWidth, left: '12px', top: isShortCard ? '153px' : '271px' }}
                                    >
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HemeSection6
