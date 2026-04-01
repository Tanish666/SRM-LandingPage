'use client'
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="relative w-full py-4 px-4 md:px-8 max-w-[1300px] mx-auto overflow-visible">
            <div className="relative bg-[#B9E3FF] rounded-[20px] px-8 py-6 md:px-12 md:py-8 lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center justify-between overflow-visible ">

                {/* Left Content */}
                <div className="relative z-10 w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                    <h2 className={`text-[32px] md:text-4xl lg:text-[38px] ${marcellus.className} text-[#1e2a33] leading-[1.1] mb-3 lg:whitespace-nowrap`}>
                        Discover The Right Course For You
                    </h2>
                    <p className="text-[#3b4e5c] text-[14px] md:text-[14px] leading-[1.5] w-full lg:w-[600px] max-w-full">
                        Start Your Journey In Healthcare With Programs Designed To Empower You With Academic Excellence And Hands-On Experience.
                    </p>
                </div>

                {/* Right Content - Card */}
                <div className="relative w-full lg:w-[360px] bg-white rounded-[15px] p-5 md:p-4 z-40 shadow-sm">
                    {/* Toggle Buttons */}
                    <div className="relative bg-[#FFEA00] rounded-full p-1.5 flex justify-between items-center mb-6 z-20">
                        <button
                            onClick={() => { setActiveTab('UG'); setSelectedCourse('SELECT COURSE'); }}
                            className={`flex-1 font-medium py-3 rounded-full text-center text-[14px] transition-all ${activeTab === 'UG' ? 'bg-white text-[#111] shadow-sm' : 'text-[#222]'}`}
                        >
                            Under Graduate
                        </button>
                        <button
                            onClick={() => { setActiveTab('PG'); setSelectedCourse('SELECT COURSE'); }}
                            className={`flex-1 font-medium py-3 rounded-full text-center text-[14px] transition-all ${activeTab === 'PG' ? 'bg-white text-[#111] shadow-sm' : 'text-[#222]'}`}
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
                            <div className="flex-1 h-[1px] bg-[#000000]"></div>
                            <span className="text-[#000000] text-[14px] font-medium tracking-wider uppercase truncate max-w-[200px]">
                                {selectedCourse}
                            </span>
                            <div className="flex-1 h-[1px] bg-[#000000]"></div>
                            <svg
                                width="12"
                                height="7"
                                viewBox="0 0 12 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            >
                                <path d="M1 1L6 6L11 1" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-2xl z-[100] max-h-[180px] overflow-y-auto custom-scrollbar">
                                {currentPrograms.map((program, index) => (
                                    <div
                                        key={`${program.id}-${index}`}
                                        onClick={() => handleSelect(program.name)}
                                        className="px-4 py-2.5 text-[13px] text-[#444] hover:bg-gray-50 hover:text-black cursor-pointer transition-colors border-b border-gray-50 last:border-none"
                                    >
                                        {program.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="h-[1px] w-full bg-[#E6E6E6] my-2" />

                    {/* Explore Now Button */}
                    <div className="relative flex justify-center my-3 z-20">
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
                            className={`bg-[#FFD100] hover:bg-[#f0c500] text-black font-semibold py-2.5 px-10 rounded-full text-[14px] transition-colors shadow-sm active:scale-95 duration-200 ${selectedCourse === 'SELECT COURSE' ? 'opacity-50 cursor-not-allowed hover:bg-[#FFD100]' : ''}`}>
                            Explore Now
                        </button>
                    </div>
                </div>

                {/* Background SVGs with specific clipping */}
                <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
                    <img className="absolute bottom-0 left-0 z-20 opacity-20 shadow-xl" src="sec8Svg1.svg" alt="" />
                    <img className="absolute bottom-0 left-0 z-10 opacity-40 shadow-xl" src="sec8Svg2.svg" alt="" />
                    <img className="absolute bottom-0 left-0 z-2 opacity-30 shadow-xl" src="sec8Svg3.svg" alt="" />
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
                    background: #FFD100;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default HomeSection8;