'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const programs = [
    { name: "B.Sc Cardio Perfusion Technology", duration: "3 Year" },
    { name: "B.Sc Clinical Psychology", duration: "3 Year" },
    { name: "B.Sc Cardio Perfusion Technology", duration: "3 Year" },
    { name: "B.Sc Medical Imaging Technology", duration: "3 Year" },
    { name: "B.Sc Physician Assistant", duration: "3 Year" },
    { name: "B.Sc Cardio Perfusion Technology", duration: "3 Year" },
]

const ProgramsList = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full px-8 md:px-20 py-16">
            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-[#000000] mb-10 text-center`}>
                Our Allied Health Sciences Programs
            </h2>

            <div className="w-full max-w-6xl mx-auto rounded-[21.04px] border border-gray-200 overflow-hidden shadow-sm bg-[#EEEEEE]">
                {/* Header Bar */}
                <div className="bg-[#0071BC] p-4 md:p-6 flex flex-col items-center justify-between gap-6 rounded-b-[21.04px] md:flex-row">
                    {/* Toggle Buttons */}
                    <div className="flex items-center bg-[#FFD812] rounded-full p-1 overflow-x-auto w-full md:w-auto overflow-hidden shrink-0 no-scrollbar">
                        <button className="flex-1 md:flex-none px-4 md:px-6 py-2 bg-white text-gray-900 rounded-full font-medium whitespace-nowrap shadow-sm text-sm md:text-base">
                            Under Graduate
                        </button>
                        <button className="flex-1 md:flex-none px-4 md:px-6 py-2 text-gray-900 font-medium whitespace-nowrap text-sm md:text-base text-center">
                            Post Graduate
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 w-full flex items-center bg-white rounded-full overflow-hidden max-w-2xl border border-gray-100 pl-4 md:pl-6 py-1 pr-1">
                        <input
                            type="text"
                            placeholder="Search Your Program...."
                            className="flex-1 min-w-0 px-2 py-2 outline-none text-gray-700 bg-transparent text-sm placeholder-gray-300"
                        />
                        <button className="bg-[#FFD812] text-gray-900 px-4 md:px-8 py-2.5 rounded-full font-medium shadow-sm hover:bg-yellow-400 transition-colors text-xs md:text-sm whitespace-nowrap">
                            Search
                        </button>
                    </div>
                </div>

                {/* List flex-col spacing */}
                <div className="bg-[#EEEEEE]">
                    {programs.map((program, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-6 md:px-10 ${idx !== programs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <div className="mb-6 md:mb-0 w-full md:w-auto">
                                <h3 className={`${marcellus.className} text-[18px] md:text-[20px] text-gray-900 mb-[4px]`}>{program.name}</h3>
                                <div className="text-[12px] md:text-[13px] text-gray-500 flex flex-wrap items-center gap-3 md:gap-4">
                                    <span>Duration : {program.duration}</span>
                                    <span className="hidden md:inline text-gray-300">|</span>
                                    <button className="text-[#0070c0] hover:underline font-medium">Explore Program</button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                                <button className="flex-1 md:flex-none px-6 md:px-8 py-2.5 bg-[#0070c0] text-white rounded-full font-medium text-[12px] md:text-[13px] hover:bg-blue-700 transition-all whitespace-nowrap">
                                    Check Eligibly
                                </button>
                                <button className="flex-1 md:flex-none px-6 md:px-8 py-2.5 bg-[#FFD812] text-gray-900 rounded-full font-medium text-[12px] md:text-[13px] hover:bg-yellow-400 transition-all shadow-sm whitespace-nowrap">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramsList
