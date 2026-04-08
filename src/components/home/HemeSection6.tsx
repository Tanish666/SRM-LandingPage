'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import SectionPill from '@/components/home/SectionPill'
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
        },
        {
            icon: "sec5Svg2.svg", iconW: 57, iconH: 58,
            num: "468+", label: "Intellectual Property Rights",
            desc: "Under Our Intellectual Property Rights (IPR) Cell.",
        },
        {
            icon: "sec5Svg3.svg", iconW: 66, iconH: 66,
            num: "20+", label: "Collaborative Partnerships",
            desc: "With Hospitals, Research Bodies & Academic Institutions.",
        },
        {
            icon: "sec5Svg4.svg", iconW: 84, iconH: 84,
            num: "100+", label: "Student Research Engagement",
            desc: "With Hospitals, Research Bodies & Academic Institutions.",
        }
    ]

    return (
        <section className="w-full bg-white flex justify-center py-12 md:py-20 3xl:py-32 4xl:py-48 px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col items-center">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 4xl:mb-24">
                    <SectionPill text="Research" className="mb-6 4xl:mb-12" />

                    <h2 className="text-h2 md:text-h1 lg:text-h1 3xl:text-6xl 4xl:text-display-2 leading-tight text-navy-900 capitalize mb-6 4xl:mb-12 max-w-4xl 4xl:max-w-7xl font-heading font-normal">
                        Driving Innovation In Allied Health Research
                    </h2>

                    <p className={`${inter.className} text-navy-800/70 text-sm md:text-base 3xl:text-xl 4xl:text-3xl leading-relaxed capitalize max-w-2xl 3xl:max-w-4xl 4xl:max-w-6xl mb-8 4xl:mb-16`}>
                        Research at SRM Allied Health Sciences is driven by our mission to advance clinical practice, diagnostics, and public health outcomes.
                    </p>

                    <div className="4xl:scale-125">
                        <button
                            className="inline-flex items-center justify-between bg-brand-yellow transition-colors cursor-pointer w-[267px] h-[47px] rounded-full border border-brandBorder pl-6 pr-1"
                        >
                            <span className={`${inter.className} text-lg font-normal text-navy-900 capitalize`}>Explore Our Research</span>
                            <span className="rounded-full bg-white flex items-center justify-center flex-shrink-0 w-[39px] h-[38px]">
                                <IconArrowNarrowRight stroke={1.5} className='-rotate-[30deg] text-navy-900' size={24} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-10 4xl:gap-16 w-full">
                    {stats.map((stat, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <div
                                key={index}
                                className={`group relative rounded-brand-pill 4xl:rounded-brand-md p-[1px] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-slate-400 to-brand-blue ${isEven ? 'lg:mt-12 4xl:mt-24' : ''}`}
                            >
                                <div
                                    className="h-full w-full rounded-brand-pill 4xl:rounded-brand-md p-8 4xl:p-14 flex flex-col items-start justify-between min-h-[320px] 3xl:min-h-[400px] 4xl:min-h-[550px] bg-gradient-to-b from-white to-brand-lightBlue-soft"
                                >
                                    <div className="w-full flex justify-end mb-4 4xl:mb-8">
                                        <img loading="lazy" decoding="async"
                                            src={stat.icon}
                                            alt={stat.label}
                                            className="object-contain max-w-[60px] max-h-[60px] 3xl:max-w-[80px] 4xl:max-w-[120px]"
                                        />
                                    </div>
                                    <div className="mt-auto">
                                        <h3 className="text-4xl md:text-5xl 4xl:text-display-1 leading-[40px] 4xl:leading-tight text-brand-blue mb-4 4xl:mb-8 font-heading font-normal">
                                            <Counter value={stat.num} />
                                        </h3>
                                        <p className="font-heading text-lg md:text-xl 3xl:text-2xl 4xl:text-[2.5rem] leading-tight text-navy-900 capitalize mb-2 4xl:mb-6">
                                            {stat.label}
                                        </p>
                                        <p className={`${inter.className} text-sm md:text-base 3xl:text-lg 4xl:text-3xl leading-relaxed text-navy-800/70 capitalize`}>
                                            {stat.desc}
                                        </p>
                                    </div>
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
