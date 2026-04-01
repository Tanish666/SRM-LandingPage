'use client'

import React, { useState, useEffect } from 'react'
import { Marcellus } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from './ui/CTA'
import SectionPill from './SectionPill'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const programs = [
    { id: 1, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 2, name: 'B.Sc Clinical Psychology' },
    { id: 3, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 4, name: 'B.Sc Medical Imaging Technology' },
    { id: 5, name: 'B.Sc Physician Assistant' },
]

const mastersPrograms = [
    { id: 1, name: 'M.Sc Cardio Perfusion Technology' },
    { id: 2, name: 'M.Sc Clinical Psychology' },
    { id: 3, name: 'M.Sc Medical imaging Technology' },
    { id: 4, name: 'M.Sc Medical Laboratory Technology' },
    { id: 5, name: 'M.Sc Physician Assistant' },
]

export default function HomeSection3({ coursesData }: { coursesData?: any[] }) {
    const [activeTab, setActiveTab] = useState('Under Graduate')
    const [activeProgram, setActiveProgram] = useState<number | string>(2)
    const [ugPrograms, setUgPrograms] = useState<any[]>(programs);
    const [pgPrograms, setPgPrograms] = useState<any[]>(mastersPrograms);

    useEffect(() => {
        if (coursesData && coursesData.length > 0) {
            const pg = coursesData.filter((c: any) => /^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));
            const ug = coursesData.filter((c: any) => !/^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));

            if (ug.length > 0) {
                setUgPrograms(ug);
                setActiveProgram(prev => {
                    if (prev === 2 && ug[0]) return ug[0]._id || ug[0].id;
                    const exists = ug.find(p => p.id === prev || p._id === prev);
                    return exists ? prev : (ug[0]?._id || ug[0]?.id || prev);
                });
            }
            if (pg.length > 0) setPgPrograms(pg);
        }
    }, [coursesData]);

    const activeProgramObj = (activeTab === 'Under Graduate' ? ugPrograms : pgPrograms).find(p => (p._id || p.id) === activeProgram) || (activeTab === 'Under Graduate' ? ugPrograms[0] : pgPrograms[0]);

    return (
        <section className="py-10 px-6 md:px-20 max-w-[1450px] mx-auto overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.8fr_1.5fr] gap-12 xl:gap-8 items-center max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="flex flex-col items-start">
                    <SectionPill text="Program Offered" className="mb-8" />

                    <h2 className={`${marcellus.className} text-4xl md:text-5xl xl:text-[45px] text-slate-900 leading-[1.2] mb-10 w-full xl:w-[80%] xl:text-nowrap`}>
                        Our Allied Health<br className="hidden xl:block" /> Sciences Programs
                    </h2>
                    <div className='flex justify-start w-full'>
                        <CTAButton
                            text="Explore Now"
                            onClick={() => console.log('Explore button clicked')}
                        />
                    </div>
                </div>

                {/* Middle Column */}
                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg group">
                        <Image
                            src={activeProgramObj?.image || "/sec3Pic1.svg"}
                            alt={activeProgramObj?.name || "Programs"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 pt-16">
                            <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-2">
                                {activeProgramObj?.description || "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod"}
                            </p>
                            <p className="text-[#FCF01E] text-sm font-medium">
                                Duration : {activeProgramObj?.duration || "3 Year"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col pl-0 xl:pl-10">
                    {/* Tabs */}
                    <div className='w-full flex justify-center items-center md:justify-start'>
                        <div className="flex bg-[#FCF01E] rounded-full p-2 mb-8 w-fit shrink-0">
                            <button
                                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${activeTab === 'Under Graduate' ? 'bg-white text-[#0071BC] shadow-sm leading-none' : 'text-slate-800 hover:bg-white/50 leading-none'}`}
                                onClick={() => {
                                    setActiveTab('Under Graduate')
                                    setActiveProgram(ugPrograms[0]?._id || ugPrograms[0]?.id || 1)
                                }}
                            >
                                Under Graduate
                            </button>
                            <button
                                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all ${activeTab === 'Post Graduate' ? 'bg-white text-[#0071BC] shadow-sm leading-none' : 'text-slate-800 hover:bg-white/50 leading-none'}`}
                                onClick={() => {
                                    setActiveTab('Post Graduate')
                                    setActiveProgram(pgPrograms[0]?._id || pgPrograms[0]?.id || 1)
                                }}
                            >
                                Post Graduate
                            </button>
                        </div>
                    </div>
                    {/* Programs List */}
                    <div className="relative">
                        <div className="flex flex-col h-[320px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FCF01E] [&::-webkit-scrollbar-thumb]:rounded-full">
                            {(activeTab === 'Under Graduate' ? ugPrograms : pgPrograms).map((program) => {
                                const progId = program._id || program.id;
                                const isActive = activeProgram === progId;
                                return (
                                <Link
                                    href={`/CourseDetail?id=${progId}`}
                                    key={progId}
                                    onClick={() => setActiveProgram(progId)}
                                    className={`group flex items-center justify-between py-5 border-b cursor-pointer transition-colors ${isActive ? 'border-slate-800 text-[#0071BC]' : 'border-slate-200 text-slate-700 hover:text-[#0071BC]'
                                        }`}
                                >
                                    <span className={`${marcellus.className} text-[22px] transition-colors truncate max-w-full xl:max-w-[300px] xl:whitespace-nowrap ${isActive ? 'text-[#0071BC]' : 'text-[#000000] group-hover:text-[#0071BC]'}`}>{program.name}</span>
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`size-7 shrink-0 transition-colors ${isActive ? 'text-[#0071BC]' : 'text-slate-300 group-hover:text-[#0071BC]'}`}
                                    >
                                        <line x1="5" y1="19" x2="19" y2="5"></line>
                                        <polyline points="9 5 19 5 19 15"></polyline>
                                    </svg>
                                </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
