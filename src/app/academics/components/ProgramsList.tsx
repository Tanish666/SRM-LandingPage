'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const programs = [
    { name: "B.Sc. Cardio Perfusion Technology", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
    { name: "B.Sc. Clinical Psychology", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
    { name: "B.Sc. Dialysis Technology", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
    { name: "B.Sc. Medical Imaging Technology", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
    { name: "B.Sc. Physician Assistant", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
    { name: "B.Sc. Cardio Perfusion Technology", duration: "4 Years", eligibility: "10 + 2 with PCB / PCM" },
]

const ProgramsList = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full px-8 md:px-20 py-16">
            <h2 className={`${marcellus.className} text-3xl md:text-4xl text-black mb-10 text-center`}>
                Our Allied Health Sciences Programs
            </h2>

            <div className="w-full max-w-6xl mx-auto rounded-[30px] border border-gray-200 overflow-hidden shadow-sm bg-white">
                {/* Header Bar */}
                <div className="bg-[#0070c0] p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center bg-[#0070c0] border-2 border-white rounded-full p-1 overflow-hidden shrink-0">
                        <button className="px-6 py-2 bg-white text-[#0070c0] rounded-full font-medium whitespace-nowrap shadow-sm">
                            Undergraduate
                        </button>
                        <button className="px-6 py-2 text-[#FFD812] font-medium whitespace-nowrap ml-2">
                            Postgraduate
                        </button>
                    </div>

                    <div className="flex-1 w-full flex items-center bg-white rounded-full overflow-hidden max-w-xl shadow-inner border border-gray-100 pl-4 py-1 pr-1">
                        <input
                            type="text"
                            placeholder="Search Syllabus & Programs"
                            className="flex-1 px-4 py-2 outline-none text-gray-700 bg-transparent text-sm placeholder-gray-400"
                        />
                        <button className="bg-[#FFD812] text-gray-900 px-8 py-2.5 rounded-full font-medium shadow-sm hover:bg-yellow-400 transition-colors text-sm">
                            Search
                        </button>
                    </div>
                </div>

                {/* List flex-col spacing */}
                <div className="bg-[#f8f9fa]">
                    {programs.map((program, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-10 ${idx !== programs.length - 1 ? 'border-b border-gray-200' : ''}`}>
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-[17px] font-medium text-gray-900 mb-[2px]">{program.name}</h3>
                                <p className="text-[13px] text-gray-500 flex items-center gap-3">
                                    <span>Duration : {program.duration}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-[#0070c0] font-medium">Eligibility : {program.eligibility}</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-6 py-2 bg-[#0070c0] text-white rounded-full font-medium text-[13px] hover:bg-blue-700 transition-colors">
                                    View Syllabus
                                </button>
                                <button className="px-6 py-2 bg-[#FFD812] text-gray-900 rounded-full font-medium text-[13px] hover:bg-yellow-400 transition-colors shadow-sm">
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
