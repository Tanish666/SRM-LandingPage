'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from '@/components/ui/CTA'
import SectionPill from '@/components/home/SectionPill'

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
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.8fr_1.5fr] gap-12 xl:gap-8 3xl:gap-16 4xl:gap-24 items-center max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full">

                {/* Left Column */}
                <div className="flex flex-col items-start">
                    <SectionPill text="Program Offered" className="mb-8 4xl:mb-12" />

                    <h1 className="text-headText text-navy-900 leading-[1.2] mb-10 4xl:mb-16 w-full xl:w-[80%] xl:text-nowrap font-heading font-normal">
                        Our Allied Health<br className="hidden xl:block" /> Sciences Programs
                    </h1>
                    <div className='flex justify-start w-full 4xl:scale-125 4xl:origin-left'>
                        <CTAButton
                            text="Explore Now"
                            onClick={() => console.log('Explore button clicked')}
                        />
                    </div>
                </div>

                {/* Middle Column */}
                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-[320px] 3xl:max-w-[400px] 4xl:max-w-[550px] aspect-[4/5] rounded-brand-pill 4xl:rounded-brand-lg overflow-hidden shadow-lg group">
                        <Image
                            src={activeProgramObj?.image || "/sec3Pic1.svg"}
                            alt={activeProgramObj?.name || "Programs"}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 4xl:p-12 pt-16 4xl:pt-32">
                            <p className="text-white/90 text-sm 3xl:text-lg 4xl:text-2xl leading-relaxed mb-3 4xl:mb-6 line-clamp-2">
                                {activeProgramObj?.description || "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod"}
                            </p>
                            <p className="text-brand-yellow text-sm 3xl:text-lg 4xl:text-2xl font-medium">
                                Duration : {activeProgramObj?.duration || "3 Year"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col pl-0 xl:pl-10 3xl:pl-20">
                    {/* Tabs */}
                    <div className='w-full flex justify-center items-center md:justify-start'>
                        <div className="flex bg-brand-yellow rounded-full p-2 mb-8 4xl:mb-16 w-fit shrink-0 4xl:scale-125 4xl:origin-left">
                            <button
                                className={`px-5 py-2.5 rounded-full text-15px font-medium transition-all ${activeTab === 'Under Graduate' ? 'bg-white text-brand-blue-dark shadow-sm leading-none' : 'text-navy-900 hover:bg-white/50 leading-none'}`}
                                onClick={() => {
                                    setActiveTab('Under Graduate')
                                    setActiveProgram(ugPrograms[0]?._id || ugPrograms[0]?.id || 1)
                                }}
                            >
                                Under Graduate
                            </button>
                            <button
                                className={`px-5 py-2.5 rounded-full text-15px font-medium transition-all ${activeTab === 'Post Graduate' ? 'bg-white text-brand-blue-dark shadow-sm leading-none' : 'text-navy-900 hover:bg-white/50 leading-none'}`}
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
                        <div className="flex flex-col h-[320px] 3xl:h-[400px] 4xl:h-[600px] overflow-y-auto pr-6 4xl:pr-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-yellow [&::-webkit-scrollbar-thumb]:rounded-full">
                            {(activeTab === 'Under Graduate' ? ugPrograms : pgPrograms).map((program) => {
                                const progId = program._id || program.id;
                                const isActive = activeProgram === progId;
                                return (
                                    <Link
                                        href={`/CourseDetail?id=${progId}`}
                                        key={progId}
                                        onClick={() => setActiveProgram(progId)}
                                        className={`group flex items-center justify-between py-5 4xl:py-8 border-b cursor-pointer transition-colors ${isActive ? 'border-navy-900 text-brand-blue-dark' : 'border-slate-200 text-navy-800/70 hover:text-brand-blue-dark'
                                            }`}
                                    >
                                        <span className={`font-heading text-xl lg:text-2xl 3xl:text-28px 4xl:text-40px transition-colors truncate max-w-full xl:max-w-[300px] 4xl:max-w-[500px] xl:whitespace-nowrap ${isActive ? 'text-brand-blue-dark' : 'text-navy-900 group-hover:text-brand-blue-dark'}`}>{program.name}</span>
                                        <svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`size-7 3xl:size-9 4xl:size-14 shrink-0 transition-colors ${isActive ? 'text-brand-blue-dark' : 'text-slate-300 group-hover:text-brand-blue-dark'}`}
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
