'use client'
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const initialUgPrograms = [
    { id: 1, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 2, name: 'B.Sc Clinical Psychology' },
    { id: 3, name: 'B.Sc Cardio Perfusion Technology' },
    { id: 4, name: 'B.Sc Medical Imaging Technology' },
    { id: 5, name: 'B.Sc Physician Assistant' },
]

const initialPgPrograms = [
    { id: 1, name: 'M.Sc Cardio Perfusion Technology' },
    { id: 2, name: 'M.Sc Clinical Psychology' },
    { id: 3, name: 'M.Sc Medical imaging Technology' },
    { id: 4, name: 'M.Sc Medical Laboratory Technology' },
    { id: 5, name: 'M.Sc Physician Assistant' },
]

const HomeSection8 = ({ coursesData }: { coursesData?: any[] }) => {
    const [activeTab, setActiveTab] = useState<'UG' | 'PG'>('UG');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string>('SELECT COURSE');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [ugPrograms, setUgPrograms] = useState<any[]>(initialUgPrograms);
    const [pgPrograms, setPgPrograms] = useState<any[]>(initialPgPrograms);

    const currentPrograms = activeTab === 'UG' ? ugPrograms : pgPrograms;

    useEffect(() => {
        if (coursesData && coursesData.length > 0) {
            const pg = coursesData.filter((c: any) => /^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));
            const ug = coursesData.filter((c: any) => !/^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));

            if (ug.length > 0) setUgPrograms(ug);
            if (pg.length > 0) setPgPrograms(pg);
        }
    }, [coursesData]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (name: string) => {
        setSelectedCourse(name);
        setIsOpen(false);
    };

    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-visible">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full relative bg-brand-lightBlue-soft rounded-brand-pill 4xl:rounded-brand-md px-8 py-10 md:px-14 md:py-12 lg:px-12 lg:py-10 3xl:py-16 4xl:py-24 4xl:px-24 flex flex-col lg:flex-row items-center justify-between overflow-visible ">

                {/* Left Content */}
                <div className="relative z-10 w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 4xl:pr-20">
                    <h2 className="text-h2 md:text-h1 lg:text-[38px] 3xl:text-[48px] 4xl:text-[65px] text-navy-900 leading-[1.1] mb-3 4xl:mb-8 lg:whitespace-nowrap font-heading font-normal">
                        Discover The Right Course For You
                    </h2>
                    <p className="text-navy-800/70 text-sm md:text-base 3xl:text-lg 4xl:text-2xl leading-[1.5] w-full lg:w-[600px] 4xl:w-[900px] max-w-full">
                        Start Your Journey In Healthcare With Programs Designed To Empower You With Academic Excellence And Hands-On Experience.
                    </p>
                </div>

                {/* Right Content - Card */}
                <div className="relative w-full lg:w-[360px] 3xl:w-[450px] 4xl:w-[600px] bg-white rounded-brand-pill 4xl:rounded-brand-md p-5 md:p-4 3xl:p-8 4xl:p-12 z-40 shadow-sm border border-brandBorder">
                    {/* Toggle Buttons */}
                    <div className="relative bg-brand-yellow rounded-full p-1.5 4xl:p-3 flex justify-between items-center mb-6 4xl:mb-10 z-20">
                        <button
                            onClick={() => { setActiveTab('UG'); setSelectedCourse('SELECT COURSE'); }}
                            className={`flex-1 font-medium py-3 4xl:py-5 rounded-full text-center text-sm 3xl:text-base 4xl:text-xl transition-all ${activeTab === 'UG' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-900/70'}`}
                        >
                            Under Graduate
                        </button>
                        <button
                            onClick={() => { setActiveTab('PG'); setSelectedCourse('SELECT COURSE'); }}
                            className={`flex-1 font-medium py-3 4xl:py-5 rounded-full text-center text-sm 3xl:text-base 4xl:text-xl transition-all ${activeTab === 'PG' ? 'bg-white text-navy-900 shadow-sm' : 'text-navy-900/70'}`}
                        >
                            Post Graduate
                        </button>
                    </div>

                    {/* Divider & Select */}
                    <div className="relative z-50" ref={dropdownRef}>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative flex items-center gap-2 mx-1 cursor-pointer group"
                        >
                            <div className="flex-1 h-[1px] bg-black"></div>
                            <span className="text-black text-sm 3xl:text-base 4xl:text-xl font-medium tracking-wider uppercase truncate max-w-[200px] 3xl:max-w-[280px] 4xl:max-w-[400px]">
                                {selectedCourse}
                            </span>
                            <div className="flex-1 h-[1px] bg-black"></div>
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-1 4xl:size-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="M1 1L6 6L11 1" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-100 rounded-brand-pill shadow-2xl z-[100] max-h-[180px] 4xl:max-h-[300px] overflow-y-auto custom-scrollbar">
                                {currentPrograms.map((program, index) => (
                                    <div
                                        key={`${program.id}-${index}`}
                                        onClick={() => handleSelect(program.name)}
                                        className="px-4 py-2.5 4xl:px-8 4xl:py-5 text-[13px] 3xl:text-base 4xl:text-xl text-[#444] hover:bg-gray-50 hover:text-black cursor-pointer transition-colors border-b border-gray-50 last:border-none"
                                    >
                                        {program.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="h-[1px] w-full bg-[#E6E6E6] my-2 4xl:my-6" />

                    {/* Explore Now Button */}
                    <div className="relative flex justify-center my-3 3xl:my-6 z-20">
                        <button
                            onClick={() => {
                                if (selectedCourse !== 'SELECT COURSE') {
                                    const prog = currentPrograms.find((p: any) => p.name === selectedCourse);
                                    const progId = prog ? (prog._id || prog.id) : null;
                                    if (progId) {
                                        router.push(`/CourseDetail?id=${progId}`);
                                    } else {
                                        router.push('/CourseDetail');
                                    }
                                }
                            }}
                            disabled={selectedCourse === 'SELECT COURSE'}
                            className={`bg-brand-yellow hover:bg-brand-yellow/90 text-navy-900 font-semibold py-2.5 px-10 4xl:py-5 4xl:px-20 rounded-full text-sm 3xl:text-base 4xl:text-xl transition-colors shadow-sm active:scale-95 duration-200 ${selectedCourse === 'SELECT COURSE' ? 'opacity-50 cursor-not-allowed hover:bg-brand-yellow' : ''}`}>
                            Explore Now
                        </button>
                    </div>
                </div>


                {/* Background SVGs with specific clipping */}
                <div className="absolute inset-0 overflow-hidden rounded-brand-pill pointer-events-none">
                    <img loading="lazy" decoding="async" className="absolute bottom-0 left-0 z-20 opacity-20 shadow-xl" src="sec8Svg1.svg" alt="" />
                    <img loading="lazy" decoding="async" className="absolute bottom-0 left-0 z-10 opacity-40 shadow-xl" src="sec8Svg2.svg" alt="" />
                    <img loading="lazy" decoding="async" className="absolute bottom-0 left-0 z-2 opacity-30 shadow-xl" src="sec8Svg3.svg" alt="" />
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #FFEC22;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default HomeSection8;