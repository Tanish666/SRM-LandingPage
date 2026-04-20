'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import SectionPill from '@/components/home/SectionPill'
import { motion, useInView, animate, useMotionValue, useTransform, useSpring } from 'framer-motion'
import CTAButton from '../ui/CTA'


const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] })
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
        <section className="w-full bg-white flex justify-center py-12 lg:py-20 px-4 lg:px-0 overflow-hidden mb-[30px] lg:mb-[-80px] 3xl:py-16 4xl:py-24 3xl:px-32 4xl:px-48">

            {/* MOBILE LAYOUT */}
            <div className="flex flex-col items-center w-full lg:hidden">
                <SectionPill text="Research" className="uppercase" />

                {/* Main Heading */}
                <h1 className={`${marcellus.className} text-center text-headText leading-[40px] capitalize mt-4 max-w-[90%]`}>
                    Driving Innovation In Allied Health Research
                </h1>

                {/* Subtitle */}
                <h2 className={`${inter.className} text-center text-navy-800/70 text-subText leading-[22px] capitalize mt-3 max-w-[90%]`}>
                    Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical Practice, Diagnostics, And Public Health Outcomes.
                </h2>

                {/* CTA Button */}
                <CTAButton text='Explore Our Research' className='mt-5' />

                {/* Mobile Stat Cards */}
                <div className="flex flex-col gap-4 mt-8 w-full max-w-[400px]">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-full rounded-[20px] p-[1px] bg-gradient-to-b from-slate-400 to-brand-blue"
                        >
                            <div
                                className="w-full rounded-[19px] p-5 bg-gradient-to-b from-white to-brand-lightBlue-soft"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className={`${marcellus.className} text-[36px] leading-[36px] text-brand-blue`}>
                                        <Counter value={stat.num} />
                                    </h3>
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="object-contain max-w-[50px] max-h-[50px]"
                                    />
                                </div>
                                <p className={`${marcellus.className} text-[18px] leading-[24px] text-navy-900 capitalize mb-1`}>
                                    {stat.label}
                                </p>
                                <p className={`${inter.className} text-[14px] leading-[22px] text-navy-800/70 capitalize`}>
                                    {stat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT  */}
            <div className="hidden lg:flex flex-col items-center w-full 4xl:mt-12 3xl:mt-8 4xl:mb-[400px] 3xl:mb-[250px]">
                <SectionPill text="Research" className="" />

                <div className="relative 4xl:scale-[1.75] 3xl:scale-[1.4] transition-all duration-500 transform-gpu origin-top" style={{ width: '1245px', height: '650px' }}>
                    {/* Main Heading */}
                    <h1
                        className={`${marcellus.className} absolute text-center text-headText leading-[56px] text-navy-900 capitalize`}
                        style={{ width: '1166px', left: '41.5px', top: '65px' }}
                    >
                        Driving Innovation In Allied Health Research
                    </h1>

                    {/* Subtitle */}
                    <h2
                        className={`${inter.className} absolute text-center text-subText leading-[25px] capitalize`}
                        style={{ width: '623px', left: '312.5px', top: '135px' }}
                    >
                        Research At SRM Allied Health Sciences Is Driven By Our Mission To Advance Clinical Practice, Diagnostics, And Public Health Outcomes.
                    </h2>

                    {/* CTA Button */}
                    <div className="absolute z-50 cursor-pointer" style={{ left: '507.5px', top: '210px' }}>
                        <CTAButton text='Explore Our Research' />
                    </div>


                    {/* Desktop Stat Cards*/}
                    <div className="absolute w-full" style={{ top: '0px' }}>
                        {stats.map((stat, index) => {
                            const isShortCard = index === 1 || index === 2
                            return (
                                <div key={index} className="absolute rounded-[20px] p-[1px] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-slate-400 to-brand-blue" style={{
                                    width: stat.width, height: stat.height, left: stat.left, top: stat.top,
                                }}>
                                    <div className="w-full h-full rounded-[19px] relative overflow-hidden bg-gradient-to-b from-white to-brand-lightBlue-soft">
                                        <div className={`absolute ${isShortCard ? 'top-[27px] right-[18px]' : 'top-[66px] left-[17px]'}`}>
                                            <img src={stat.icon} alt={stat.label} width={stat.iconW} height={stat.iconH} className="object-contain" />
                                        </div>
                                        <h3
                                            className={`${marcellus.className} absolute text-[40px] leading-[40px] text-brand-blue`}
                                            style={{ left: '18px', top: isShortCard ? '60px' : '178px' }}
                                        >
                                            <Counter value={stat.num} />
                                        </h3>
                                        <p
                                            className={`${marcellus.className} absolute text-[20px] leading-[25px] text-navy-900 capitalize`}
                                            style={{ left: '18px', top: isShortCard ? '116px' : '234px' }}
                                        >
                                            {stat.label}
                                        </p>
                                        <p
                                            className={`${inter.className} absolute text-[15px] leading-[25px] text-navy-800/70 capitalize`}
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
            </div>
        </section>

    )
}

export default HemeSection6
