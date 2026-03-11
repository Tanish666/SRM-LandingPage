'use client'
import React from "react";
import { Marcellus } from "next/font/google";
import { Marquee } from "./ui/marquee";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const HomeSection7 = () => {
    // Info for the 4 left-side cards
    const cards = [
        {
            logo: "sec7Logo1.svg",
            image: "sec7Pic1.svg",
            bg: "bg-[#d3eaf7]", // Light Blue
            batchColor: "text-gray-700",
            name: "Swetha",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo2.svg",
            image: "sec7Pic2.svg",
            bg: "bg-[#fff8b0]", // Light Yellow
            batchColor: "text-gray-700",
            name: "Raghul",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo3.svg",
            image: "sec7Pic3.svg",
            bg: "bg-[#ffce38]", // Solid Yellow
            batchColor: "text-gray-800",
            name: "Saranya Mohan",
            role: "Physiotherapist",
        },
        {
            logo: "sec7Logo4.svg",
            image: "sec7Pic4.svg",
            bg: "bg-[#0277bd]", // Solid Dark Blue
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
        <section className="w-full flex flex-col lg:flex-row bg-[#FAFAFA] overflow-hidden h-fit">
            {/* Left Side: 2x2 Grid of Cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-0 content-start">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className={`relative h-[350px] flex flex-col justify-end p-4 lg:p-6 overflow-hidden ${card.bg}`}
                    >
                        {/* Placeholder for Card Logo (Top Left) */}
                        <div className="absolute top-4 left-4 lg:top-6 bg-white justify-center items-center flex lg:left-6 z-20 w-[131px] h-[60px] rounded-[5px]">
                            <img src={card.logo} alt="" />
                        </div>


                        {/* Placeholder for Person Image (Bottom/Right aligned) */}
                        {/* IMPORTANT: User will place the exact <img> tags here */}
                        <div className="absolute bottom-0 right-0 w-full h-full z-10 flex justify-end items-end">
                            <img src={card.image} alt="" />
                        </div>

                        {/* Card Info Box (Bottom Left) */}
                        <div className="relative z-20">
                            <p className={`text-[10px] sm:text-xs font-medium mb-1.5 ${card.batchColor}`}>
                                Batch 2024-2025
                            </p>
                            <div className={`${marcellus.className} bg-gradient-to-r from-white/55 to-white/50 backdrop-blur-sm rounded-[5px] p-2.5 sm:p-2 shadow-sm inline-block min-w-[110px] sm:min-w-[150px] border border-white/40`}>
                                <h3 className={`text-sm sm:text-lg font-medium text-gray-900 leading-tight`}>{card.name}</h3>
                                <p className="text-[11px] sm:text-[13px] text-[#0277bd] mt-0.5">{card.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side: Content & Stats */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16">
                <div className="max-w-2xl w-full">
                    {/* Header Text */}
                    <h2 className={`${marcellus.className} text-3xl md:text-4xl lg:text-[44px] text-[#1F1F1F] leading-tight mb-6`}>
                        Placement Partners
                    </h2>
                    <p className="text-[#595959] text-sm md:text-base leading-relaxed mb-10 max-w-[90%]">
                        At SRM College Of Allied Health Sciences (AHS), We Are Committed To Shaping Healthcare Professionals Who Are Career-Ready And Globally Competent. Our Strong Industry Collaborations Open Up Excellent Career Pathways For Our Students Across Leading Hospitals, Healthcare Organizations, And Research Institutions.
                    </p>

                    {/* Stats Rows */}
                    <div className="flex flex-row justify-start items-center mb-16 relative gap-4 sm:gap-0">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-start w-1/2 sm:w-[45%]">
                            <span className={`${marcellus.className} text-4xl sm:text-5xl lg:text-[56px] font-light text-[#0277bd] leading-none mb-4`}>104 +</span>
                            <span className={`${marcellus.className} bg-[#FFD812] text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium`}>Companies</span>
                            <p className="text-gray-500 text-[10px] sm:text-sm mt-4 leading-tight max-w-[180px]">2023–24 Campus Placement Drive</p>
                        </div>

                        {/* Vertical Divider */}
                        <div className="block w-[1px] h-24 sm:h-28 bg-gray-300 mx-2 sm:mx-8"></div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-start w-1/2 sm:w-[45%]">
                            <span className={`${marcellus.className} text-4xl sm:text-5xl lg:text-[56px] font-light text-[#0277bd] leading-none mb-4`}>206+</span>
                            <span className={`${marcellus.className} bg-[#FFD812] text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm font-medium`}>Placements</span>
                            <p className="text-gray-500 text-[10px] sm:text-sm mt-4 leading-tight max-w-[180px]">Offers Extended To Our Talented Graduates</p>
                        </div>
                    </div>

                    {/* Logos Marquee */}
                    <div className="relative flex flex-col gap-4 overflow-hidden">
                        {/* Gradient overlays for fade effect */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#FAFAFA] z-30"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#FAFAFA] z-30"></div>

                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {marqueeLogos.map((logo, idx) => (
                                <div key={idx} className="w-[131px] h-[60px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[5px] flex items-center justify-center p-2">
                                    <img src={logo} alt={`Partner ${idx + 1}`} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {marqueeLogos.map((logo, idx) => (
                                <div key={idx} className="w-[131px] h-[60px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[5px] flex items-center justify-center p-2">
                                    <img src={logo} alt={`Partner ${idx + 1}`} className="max-w-full max-h-full object-contain" />
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
