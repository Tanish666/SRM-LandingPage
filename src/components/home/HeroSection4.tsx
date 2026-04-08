'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import CTAButton from '@/components/ui/CTA';
import SectionPill from '@/components/home/SectionPill';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white rounded-[20px] 4xl:rounded-[40px] py-5 px-5 xl:py-5 xl:px-7 3xl:py-8 3xl:px-10 4xl:py-12 4xl:px-14 shadow-sm flex flex-col gap-1 w-full xl:h-[160px] 3xl:h-[200px] 4xl:h-[280px]">
        <div className="flex items-center gap-4 4xl:gap-8">
            <div className="text-[#30A0FF] 3xl:scale-110 4xl:scale-[1.5] origin-left shrink-0">
                {icon}
            </div>
            <h3 className="text-base xl:text-xl 3xl:text-2xl 4xl:text-4xl font-semibold text-[#515151] leading-tight">{title}</h3>
        </div>
        <p className="text-md xl:text-[16.5px] 3xl:text-lg 4xl:text-2xl text-gray-500 leading-relaxed font-normal 4xl:mt-4">
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
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full bg-[#30A0FF] rounded-[2.5rem] 4xl:rounded-[5rem] p-8 md:p-14 3xl:p-20 4xl:p-32 relative overflow-hidden flex flex-col gap-10 4xl:gap-20">
                {/* Header Row */}
                <div className="flex flex-col xl:flex-row justify-between items-center gap-8 z-10 w-full relative">
                    {/* Left Header */}
                    <div className="flex w-full xl:w-1/2 flex-col gap-6 justify-start">
                        <SectionPill text="Why Choose SRM AHS" />

                        <h2 className="text-white text-4xl xl:text-[45px] 3xl:text-[55px] 4xl:text-[80px] tracking-wide leading-[1.2]">
                            Empowering Future<br />Healthcare Professionals
                        </h2>
                    </div>

                    {/* Right Header */}
                    <div className="flex flex-col gap-6 xl:w-[616px] 4xl:w-[900px] text-white/90 xl:pt-10">
                        <p className="text-sm xl:text-[15px] 3xl:text-lg 4xl:text-2xl leading-relaxed font-light text-white">
                            At SRM Allied Health Sciences, we blend academic excellence with real-world applications to prepare our students for an impactful career in healthcare.
                        </p>
                        <div className="4xl:scale-125 4xl:origin-left">
                            <CTAButton
                                text="Explore Now"
                                onClick={() => console.log('Explore Now button clicked')}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-x-10 3xl:gap-x-16 4xl:gap-x-24 gap-y-8 relative z-10 pb-8 xl:pb-10 w-full items-center">

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
                    <div className="hidden xl:flex flex-col gap-8 4xl:gap-16 justify-center items-center xl:items-start">
                        <Card
                            icon={<Image src="/sec4Icon1.svg" width={45} height={45} alt="Icon 1" className="4xl:w-[80px] 4xl:h-[80px]" />}
                            title="Advanced Laboratories & Facilities"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                        <Card
                            icon={<Image src="/sec4Icon2.svg" width={45} height={45} alt="Icon 2" className="4xl:w-[80px] 4xl:h-[80px]" />}
                            title="Hands-On Clinical Training"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                    </div>

                    {/* Center Image */}
                    <div
                        className="relative order-last xl:order-none w-full xl:w-[280px] 3xl:w-[350px] 4xl:w-[500px] xl:min-w-[280px] 3xl:min-w-[350px] 4xl:min-w-[500px] h-[348px] 3xl:h-[420px] 4xl:h-[600px] rounded-[25px] 4xl:rounded-[50px] mx-auto shrink-0 mt-28 xl:mt-0"
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
                    <div className="hidden xl:flex flex-col gap-8 4xl:gap-16 justify-center items-center xl:items-end">
                        <Card
                            icon={<Image src="/sec4Icon3.svg" width={45} height={45} alt="Icon 3" className="4xl:w-[80px] 4xl:h-[80px]" />}
                            title="Personalized Academic Mentorship"
                            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore"
                        />
                        <Card
                            icon={<Image src="/sec4Icon4.svg" width={45} height={45} alt="Icon 4" className="4xl:w-[80px] 4xl:h-[80px]" />}
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