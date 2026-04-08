'use client'
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const HomeSection7 = () => {
    // Info for the 4 left-side cards
    const cards = [
        {
            logo: "sec7Logo1.svg",
            image: "sec7Pic1.svg",
            bg: "bg-brand-lightBlue-tint",
            batchColor: "text-navy-800/70",
            name: "Swetha",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo2.svg",
            image: "sec7Pic2.svg",
            bg: "bg-brand-yellow/20",
            batchColor: "text-navy-800/70",
            name: "Raghul",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo3.svg",
            image: "sec7Pic3.svg",
            bg: "bg-brand-yellow",
            batchColor: "text-navy-900",
            name: "Saranya Mohan",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo4.svg",
            image: "sec7Pic4.svg",
            bg: "bg-brand-blue-dark",
            batchColor: "text-white/90",
            name: "Reetha",
            role: "Physiotherapist",
        }
    ];

    const marqueeLogos = [
        "sec7Logo1.svg",
        "sec7Logo2.svg",
        "sec7logo3.svg",
        "sec7Logo4.svg",
    ];

    return (
        <section className="w-full flex flex-col lg:flex-row bg-slate-50 overflow-hidden h-fit">
            {/* Left Side: 2x2 Grid of Cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-0 content-start">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`relative h-[350px] 3xl:h-[450px] 4xl:h-[600px] flex flex-col justify-end p-4 lg:p-6 4xl:p-12 overflow-hidden ${card.bg}`}
                    >
                        {/* Placeholder for Card Logo (Top Left) */}
                        <div className="absolute top-4 left-4 lg:top-6 bg-white justify-center items-center flex lg:left-6 z-20 w-[131px] 3xl:w-[160px] 4xl:w-[220px] h-[60px] 3xl:h-[80px] 4xl:h-[110px] rounded-md">
                            <img loading="lazy" decoding="async" src={card.logo} alt="" className="max-h-[80%] max-w-[80%]" />
                        </div>


                        {/* Placeholder for Person Image (Bottom/Right aligned) */}
                        <div className="absolute bottom-0 right-0 w-full h-full z-10 flex justify-end items-end">
                            <img loading="lazy" decoding="async" src={card.image} alt="" className="h-full object-contain object-bottom" />
                        </div>

                        {/* Card Info Box (Bottom Left) */}
                        <div className="relative z-20">
                            <p className={`text-[10px] sm:text-xs 3xl:text-base 4xl:text-xl font-medium mb-1.5 4xl:mb-4 ${card.batchColor}`}>
                                Batch 2024-2025
                            </p>
                            <div className="font-heading bg-gradient-to-r from-white/55 to-white/50 backdrop-blur-sm rounded-md p-2.5 sm:p-2 4xl:p-6 shadow-sm inline-block min-w-[110px] sm:min-w-[150px] 4xl:min-w-[300px] border border-white/40">
                                <h3 className={`text-sm sm:text-lg 3xl:text-xl 4xl:text-3xl font-medium text-navy-900 leading-tight`}>{card.name}</h3>
                                <p className="text-[11px] sm:text-[13px] 3xl:text-base 4xl:text-2xl text-brand-blue-dark mt-0.5">{card.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side: Content & Stats */}
            <div className="w-full lg:w-1/2 flex items-center justify-center py-12 md:py-16 4xl:py-32 px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
                <div className="max-w-2xl 3xl:max-w-4xl 4xl:max-w-6xl w-full">
                    {/* Header Text */}
                    <h2 className="text-h2 md:text-h1 lg:text-h1 3xl:text-6xl 4xl:text-display-2 text-navy-900 leading-tight mb-6 4xl:mb-12 font-heading font-normal">
                        Placement Partners
                    </h2>
                    <p className="text-navy-800/70 text-sm md:text-base 3xl:text-xl 4xl:text-2xl leading-relaxed mb-10 4xl:mb-20 max-w-[90%]">
                        At SRM College Of Allied Health Sciences (AHS), We Are Committed To Shaping Healthcare Professionals Who Are Career-Ready And Globally Competent. Our Strong Industry Collaborations Open Up Excellent Career Pathways For Our Students Across Leading Hospitals, Healthcare Organizations, And Research Institutions.
                    </p>

                    {/* Stats Rows */}
                    <div className="flex flex-row justify-start items-center mb-16 4xl:mb-24 relative gap-4 sm:gap-0">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-start w-1/2 sm:w-[45%]">
                            <span className="font-heading text-4xl sm:text-5xl lg:text-6xlBase 3xl:text-display-2 4xl:text-display-1 font-light text-brand-blue-dark leading-none mb-4 4xl:mb-8 font-heading">104 +</span>
                            <span className="font-heading bg-brand-yellow text-navy-900 px-3 sm:px-4 py-1 sm:py-1.5 4xl:px-8 4xl:py-3 rounded-md text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl font-medium">Companies</span>
                            <p className="text-navy-800/50 text-[10px] sm:text-sm 3xl:text-base 4xl:text-xl mt-4 leading-tight max-w-[180px] 4xl:max-w-[300px]">2023–24 Campus Placement Drive</p>
                        </div>

                        {/* Vertical Divider */}
                        <div className="block w-[1px] h-24 sm:h-28 3xl:h-32 4xl:h-56 bg-gray-300 mx-2 sm:mx-8 4xl:mx-16"></div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-start w-1/2 sm:w-[45%]">
                            <span className="font-heading text-4xl sm:text-5xl lg:text-6xlBase 3xl:text-display-2 4xl:text-display-1 font-light text-brand-blue-dark leading-none mb-4 4xl:mb-8 font-heading">206+</span>
                            <span className="font-heading bg-brand-yellow text-navy-900 px-3 sm:px-4 py-1 sm:py-1.5 4xl:px-8 4xl:py-3 rounded-md text-xs sm:text-sm 3xl:text-lg 4xl:text-2xl font-medium">Placements</span>
                            <p className="text-navy-800/50 text-[10px] sm:text-sm 3xl:text-base 4xl:text-xl mt-4 leading-tight max-w-[180px] 4xl:max-w-[300px]">Offers Extended To Our Talented Graduates</p>
                        </div>
                    </div>

                    {/* Logos Marquee */}
                    <div className="relative flex flex-col gap-4 4xl:gap-10 overflow-hidden 4xl:scale-125 4xl:origin-left">
                        {/* Gradient overlays for fade effect */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-50 z-30"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-50 z-30"></div>

                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {marqueeLogos.map((logo, idx) => (
                                <div key={idx} className="w-[131px] h-[60px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-md flex items-center justify-center p-2">
                                    <img loading="lazy" decoding="async" src={logo} alt={`Partner ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {marqueeLogos.map((logo, idx) => (
                                <div key={idx} className="w-[131px] h-[60px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-md flex items-center justify-center p-2">
                                    <img loading="lazy" decoding="async" src={logo} alt={`Partner ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HomeSection7;
