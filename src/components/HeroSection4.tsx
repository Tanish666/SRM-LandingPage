'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Marcellus } from 'next/font/google'
import CTAButton from './ui/CTA';
import SectionPill from './SectionPill';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white rounded-[20px] py-5 px-5 lg:py-5 lg:px-7 shadow-sm flex flex-col gap-1 w-full  lg:h-[160px] ">
        <div className="flex items-center gap-4">
            <div className="text-[#30A0FF]">
                {icon}
            </div>
            <h3 className="text-base lg:text-[20px] font-semibold text-[#515151] leading-tight">{title}</h3>
        </div>
        <p className="text-md lg:text-[16.5px] text-gray-500 leading-relaxed font-normal">
            {description}
        </p>
    </div>
);

const HeroSection4 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % 4);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + 4) % 4);
    };

    const cardsData = [
        { icon: "/sec4Icon1.svg", title: "Advanced Laboratories & Facilities" },
        { icon: "/sec4Icon2.svg", title: "Hands-On Clinical Training" },
        { icon: "/sec4Icon3.svg", title: "Personalized Academic Mentorship" },
        { icon: "/sec4Icon4.svg", title: "Industry Internships" },
    ];

    return (
        <section className="w-full max-w-[98%] mx-auto px-4 py-12 lg:py-20">
            <div className="bg-[#30A0FF] rounded-[2.5rem] p-10 lg:px-14 lg:pt-14 lg:pb-0 relative overflow-hidden flex flex-col gap-10">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 z-10 w-full relative max-w-[1550px] mx-auto ">
                    {/* Left Header */}
                    <div className="flex w-full lg:w-1/2 flex-col gap-6 justify-start">
                        <SectionPill text="Why Choose SRM AHS" />

                        <h2 className={`${marcellus.className} text-[#FFFFFF] text-4xl lg:text-[45px]  tracking-wide leading-[1.2]`}>
                            Empowering Future<br />Healthcare Professionals
                        </h2>
                    </div>

                    {/* Right Header */}
                    <div className="flex flex-col gap-6 lg:w-[616px] text-white/90 lg:pt-10">
                        <p className="text-sm lg:text-[15px] leading-relaxed font-light text-[#FFFFFF]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <CTAButton
                            text="Explore Now"
                            onClick={() => console.log('Explore Now button clicked')}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-x-10 gap-y-8 relative z-10 pb-8 lg:pb-10 max-w-[1550px] mx-auto w-full items-center">
                    
                    {/* Mobile Carousel View (Hidden on Desktop) */}
                    <div className="flex lg:hidden flex-col gap-6 w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: direction * 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction * -50 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="w-full"
                            >
                                <Card
                                    icon={<Image src={cardsData[activeIndex].icon} width={45} height={45} alt={`Icon ${activeIndex + 1}`} />}
                                    title={cardsData[activeIndex].title}
                                    description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                                />
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex justify-center gap-3 w-full">
                            <button
                                onClick={handlePrev}
                                className="bg-[#FFD700] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors shrink-0"
                            >
                                <IconArrowNarrowLeft className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-[#0073CF] w-[42px] h-[42px] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shrink-0"
                            >
                                <IconArrowNarrowRight className="text-white" size={30} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    {/* Left Cards */}
                    <div className="hidden lg:flex flex-col gap-8 justify-center items-center lg:items-start">
                        <Card
                            icon={<Image src="/sec4Icon1.svg" width={45} height={45} alt="Icon 1" />}
                            title="Advanced Laboratories & Facilities"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                        <Card
                            icon={<Image src="/sec4Icon2.svg" width={45} height={45} alt="Icon 2" />}
                            title="Hands-On Clinical Training"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                    </div>

                    {/* Center Image */}
                    <div
                        className="relative order-last lg:order-none w-full lg:w-[280px] lg:min-w-[280px] h-[348px] rounded-[25px] mx-auto shrink-0 mt-10 md:mt-0"
                        style={{
                            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFEC22 100%)',
                            opacity: 1,
                            transform: 'rotate(0deg)'
                        }}
                    >
                        <div className="absolute w-[125%] h-[125%] left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-none">
                            <Image
                                src="/sec4Pic1.svg"
                                alt="Healthcare Professional"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="hidden lg:flex flex-col gap-8 justify-center items-center lg:items-end">
                        <Card
                            icon={<Image src="/sec4Icon3.svg" width={45} height={45} alt="Icon 3" />}
                            title="Personalized Academic Mentorship"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                        <Card
                            icon={<Image src="/sec4Icon4.svg" width={45} height={45} alt="Icon 4" />}
                            title="Industry Internships"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection4;