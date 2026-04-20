'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Marcellus } from 'next/font/google'
import CTAButton from '@/components/ui/CTA';
import SectionPill from './SectionPill';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white rounded-[20px] 3xl:rounded-[30px] 4xl:rounded-[40px] py-5 px-5 xl:py-6 xl:px-7 3xl:py-8 3xl:px-10 4xl:py-10 4xl:px-12 shadow-sm flex flex-col justify-center gap-3 3xl:gap-5 4xl:gap-6 w-full min-h-[160px] 3xl:min-h-[220px] 4xl:min-h-[280px]">
        <div className="flex items-center gap-4 3xl:gap-6 4xl:gap-8">
            <div className="text-[#30A0FF] flex-shrink-0 3xl:scale-125 4xl:scale-150 origin-left">
                {icon}
            </div>
            <h3 className="text-base xl:text-20px 3xl:text-24px 4xl:text-28px font-semibold text-[#515151] leading-tight">{title}</h3>
        </div>
        <p className="text-md xl:text-16-5px 3xl:text-18px 4xl:text-20px text-gray-500 leading-relaxed font-normal">
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
        <section className="w-full max-w-[98%] mx-auto px-4 py-12 xl:py-20 4xl:py-28">
            <div className="bg-[#30A0FF] rounded-[2.5rem] 3xl:rounded-[3.5rem] 4xl:rounded-[4.5rem] p-10 xl:px-14 xl:pt-14 3xl:px-20 3xl:pt-20 4xl:px-28 4xl:pt-28 xl:pb-0 relative overflow-hidden flex flex-col gap-10 3xl:gap-16 4xl:gap-24">
                {/* Header Row */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8 z-10 w-full relative max-w-[1550px] 3xl:max-w-[1800px] 4xl:max-w-[2100px] mx-auto ">
                    {/* Left Header */}
                    <div className="flex w-full xl:w-1/2 flex-col gap-6 justify-start">
                        <SectionPill text="Why Choose SRM AHS" />

                        <h1 className={`${marcellus.className} text-[#FFFFFF] text-headText tracking-wide leading-[1.2]`}>
                            Empowering Future<br />Healthcare Professionals
                        </h1>
                    </div>

                    {/* Right Header */}
                    <div className="flex flex-col gap-6 3xl:gap-8 4xl:gap-10 xl:w-[616px] 3xl:w-[800px] 4xl:w-[1000px] text-white/90 xl:pt-10 3xl:pt-14 4xl:pt-16">
                        <h2 className="text-subText leading-relaxed font-light text-[#FFFFFF]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h2>
                        <CTAButton
                            text="Explore Now"
                            onClick={() => console.log('Explore Now button clicked')}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-x-10 3xl:gap-x-16 4xl:gap-x-24 gap-y-8 relative z-10 pb-8 xl:pb-10 3xl:pb-16 4xl:pb-24 max-w-[1550px] 3xl:max-w-[1800px] 4xl:max-w-[2100px] mx-auto w-full items-center">

                    {/* Mobile Carousel View (Hidden on Desktop) */}
                    <div className="flex xl:hidden flex-col gap-6 w-full overflow-hidden">
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
                    <div className="hidden xl:flex flex-col gap-8 justify-center items-center xl:items-start">
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
                        className="relative order-last xl:order-none w-full xl:w-[280px] xl:min-w-[280px] 3xl:w-[360px] 3xl:min-w-[360px] 4xl:w-[460px] 4xl:min-w-[460px] h-[348px] 3xl:h-[450px] 4xl:h-[570px] rounded-[25px] 3xl:rounded-[35px] 4xl:rounded-[45px] mx-auto shrink-0 mt-28 xl:mt-0"
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
                    <div className="hidden xl:flex flex-col gap-8 justify-center items-center xl:items-end">
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