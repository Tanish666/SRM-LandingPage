'use client'
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Marcellus } from 'next/font/google'
const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const Card = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white rounded-[20px] py-5 px-5 lg:py-5 lg:px-7 shadow-sm flex flex-col gap-1 w-full lg:max-w-[510px] lg:h-[160px] ">
        <div className="flex items-center gap-4">
            <div className="text-[#30A0FF]">
                {icon}
            </div>
            <h3 className="text-base lg:text-[20px] font-semibold text-gray-800 leading-tight">{title}</h3>
        </div>
        <p className="text-md lg:text-[16.5px] text-gray-500 leading-relaxed font-normal">
            {description}
        </p>
    </div>
);

const HeroSection4 = () => {
    return (
        <section className="w-full max-w-[98%] mx-auto px-4 py-12 lg:py-20">
            <div className="bg-[#30A0FF] rounded-[2.5rem] p-10 lg:px-14 lg:pt-14 lg:pb-0 relative overflow-hidden flex flex-col gap-10">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 z-10 w-full relative max-w-[1420px] mx-auto">
                    {/* Left Header */}
                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-3 w-max shadow-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE100]"></span>
                            <span className="text-sm font-medium text-gray-800">Discover SRM AHS Advantage</span>
                        </div>
                        <h2 className={`${marcellus.className} text-white text-4xl lg:text-[3.2rem] font-light tracking-wide leading-[1.2]`}>
                            Empowering Future<br />Healthcare Professionals
                        </h2>
                    </div>

                    {/* Right Header */}
                    <div className="flex flex-col gap-6 lg:w-[452px] text-white/90 lg:pt-4">
                        <p className="text-sm lg:text-[15px] leading-relaxed font-light">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                        </p>
                        <button className="bg-[#FFE100] hover:bg-[#f2d600] transition-colors text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-max shadow-sm">
                            <span className="text-[15px] font-medium">Explore Now</span>
                            <div className="bg-white rounded-full p-2 flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-x-10 gap-y-8 relative z-10 pb-8 lg:pb-10 max-w-[1420px] mx-auto w-full items-center">
                    {/* Left Cards */}
                    <div className="flex flex-col gap-8 justify-center items-center lg:items-end">
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
                        className="relative order-last lg:order-none w-[280px] h-[348px] rounded-[25px] mx-auto"
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
                    <div className="flex flex-col gap-8 justify-center items-center lg:items-start">
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