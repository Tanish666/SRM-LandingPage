'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const initialUgPrograms = [
    { name: "B.Sc Cardio Perfusion Technology", duration: "3 Year" },
    { name: "B.Sc Clinical Psychology", duration: "3 Year" },
    { name: "B.Sc Medical Imaging Technology", duration: "3 Year" },
    { name: "B.Sc Physician Assistant", duration: "3 Year" },
]

const initialPgPrograms = [
    { name: "M.Sc Cardio Perfusion Technology", duration: "2 Year" },
    { name: "M.Sc Clinical Psychology", duration: "2 Year" },
    { name: "M.Sc Medical imaging Technology", duration: "2 Year" },
    { name: "M.Sc Medical Laboratory Technology", duration: "2 Year" },
    { name: "M.Sc Physician Assistant", duration: "2 Year" },
]

const ProgramsList = ({ coursesData }: { coursesData?: any[] }) => {
    const [activeTab, setActiveTab] = useState('Under Graduate')
    const [ugPrograms, setUgPrograms] = useState<any[]>(initialUgPrograms)
    const [pgPrograms, setPgPrograms] = useState<any[]>(initialPgPrograms)
    const [inputValue, setInputValue] = useState('')
    const [finalFilter, setFinalFilter] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (coursesData && coursesData.length > 0) {
            const pg = coursesData.filter((c: any) => /^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));
            const ug = coursesData.filter((c: any) => !/^(M\.|\bMaster\b|\bMBA\b|\bMCA\b|\bMTech\b|\bMD\b|\bMS\b)/i.test(c.name));

            if (ug.length > 0) setUgPrograms(ug);
            if (pg.length > 0) setPgPrograms(pg);
        }
    }, [coursesData]);

    const currentPrograms = activeTab === 'Under Graduate' ? ugPrograms : pgPrograms

    // Suggestions shown in dropdown while typing
    const suggestions = inputValue.trim()
        ? currentPrograms.filter(p => p.name.toLowerCase().includes(inputValue.toLowerCase()))
        : []

    // Programs actually displayed in the list
    const filteredPrograms = finalFilter.trim()
        ? currentPrograms.filter(program =>
            program.name.toLowerCase().includes(finalFilter.toLowerCase())
        )
        : currentPrograms

    const handleSearch = () => {
        setFinalFilter(inputValue)
        setShowDropdown(false)
    }

    const handleSelectSuggestion = (name: string) => {
        setInputValue(name)
        setFinalFilter(name)
        setShowDropdown(false)
    }

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <section className="py-12 md:py-20 3xl:py-28 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full flex flex-col items-center">
                <h1 className="text-headText text-navy-900 mb-10 3xl:mb-16 4xl:mb-24 text-center font-heading font-normal">
                    Our Allied Health Sciences Programs
                </h1>

                <div className="w-full rounded-brand-pill 3xl:rounded-brand-md 4xl:rounded-brand-lg border border-brandBorder overflow-hidden shadow-sm bg-slate-100">
                    {/* Header Bar */}
                    <div className="bg-brand-blue-dark p-4 lg:p-6 3xl:p-10 4xl:p-20 flex flex-col items-center justify-between gap-6 3xl:gap-10 4xl:gap-16 rounded-t-brand-pill 3xl:rounded-t-brand-md 4xl:rounded-t-brand-lg lg:flex-row">
                        {/* Toggle Buttons */}
                        <div className="flex items-center bg-brand-yellow rounded-full p-1 3xl:p-2 4xl:p-4 overflow-x-auto w-full lg:w-auto overflow-hidden shrink-0 no-scrollbar">
                            <button
                                onClick={() => {
                                    setActiveTab('Under Graduate')
                                    setFinalFilter('') // Refresh list on tab change
                                    setInputValue('')
                                }}
                                className={`flex-1 lg:flex-none px-4 lg:px-6 4xl:px-12 py-2 4xl:py-6 rounded-full font-medium whitespace-nowrap shadow-sm text-subText transition-colors ${activeTab === 'Under Graduate' ? 'bg-white text-navy-900' : 'text-navy-900 bg-transparent hover:bg-white/50'}`}
                            >
                                Under Graduate
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('Post Graduate')
                                    setFinalFilter('') // Refresh list on tab change
                                    setInputValue('')
                                }}
                                className={`flex-1 lg:flex-none px-4 lg:px-6 4xl:px-12 py-2 4xl:py-6 rounded-full font-medium whitespace-nowrap shadow-sm text-subText transition-colors ${activeTab === 'Post Graduate' ? 'bg-white text-navy-900' : 'text-navy-900 bg-transparent hover:bg-white/50'}`}
                            >
                                Post Graduate
                            </button>
                        </div>

                        {/* Search Bar Container */}
                        <div className="flex-1 w-full max-w-2xl 3xl:max-w-4xl 4xl:max-w-6xl relative" ref={dropdownRef}>
                            <div className="flex items-center bg-white rounded-full overflow-hidden border border-gray-100 pl-4 lg:pl-6 3xl:pl-8 4xl:pl-12 py-1 3xl:py-2 4xl:py-4 pr-1 3xl:pr-2 4xl:pr-4 w-full relative">
                                <input
                                    type="text"
                                    placeholder="Search Your Program...."
                                    value={inputValue}
                                    onFocus={() => setShowDropdown(true)}
                                    onChange={(e) => {
                                        setInputValue(e.target.value)
                                        setShowDropdown(true)
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleSearch()
                                    }}
                                    className="flex-1 min-w-0 px-2 py-2 4xl:py-4 outline-none text-gray-700 bg-transparent text-15px 3xl:text-18px 4xl:text-24px placeholder-gray-300"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-brand-yellow text-navy-900 px-4 lg:px-8 4xl:px-12 py-2.5 4xl:py-5 rounded-full font-medium shadow-sm hover:bg-brand-yellow/80 transition-colors text-13px lg:text-15px 3xl:text-body 4xl:text-24px whitespace-nowrap shrink-0"
                                >
                                    Search
                                </button>
                            </div>

                            {/* Dropdown Suggestions */}
                            {showDropdown && suggestions.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-[300px] 4xl:max-h-[500px] overflow-y-auto">
                                    {suggestions.map((suggestion, idx) => {
                                        const suggestionId = suggestion._id || suggestion.id || `suggestion-${idx}`;
                                        return (
                                            <div
                                                key={suggestionId}
                                                onClick={() => handleSelectSuggestion(suggestion.name)}
                                                className="px-6 py-3 4xl:px-10 4xl:py-6 hover:bg-brand-lightBlue-soft/10 cursor-pointer transition-colors border-b border-brandBorder last:border-none flex items-center justify-between group"
                                            >
                                                <span className="text-navy-800 text-15px 3xl:text-18px 4xl:text-24px font-medium group-hover:text-brand-blue-dark">{suggestion.name}</span>
                                                <span className="text-13px 3xl:text-13px 4xl:text-18px bg-slate-100 px-2 py-1 rounded-full text-navy-800/50">{suggestion.duration || "3 Year"}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* List Section */}
                    <div className="bg-[#EEEEEE] min-h-[400px] 3xl:min-h-[600px] 4xl:min-h-[800px]">
                        {filteredPrograms.length > 0 ? (
                            filteredPrograms.map((program, idx) => {
                                const programId = program._id || program.id || `program-${idx}`;
                                return (
                                    <div key={programId} className="px-6 md:px-10 3xl:px-16 4xl:px-32">
                                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 3xl:py-10 4xl:py-16 border-b border-brandBorder">
                                            <div className="mb-6 lg:mb-0 w-full lg:w-auto">
                                                <h2 className="text-subText3 text-navy-900 mb-1 4xl:mb-4 font-heading">{program.name}</h2>
                                                <div className="text-13px lg:text-15px 3xl:text-body 4xl:text-24px text-navy-800/60 flex flex-wrap items-center gap-3 lg:gap-4 4xl:gap-8">
                                                    <span>Duration : {program.duration || "3 Year"}</span>
                                                    <span className="hidden lg:inline text-navy-800/20">|</span>
                                                    <Link href={`/CourseDetail?id=${programId}`} className="text-brand-blue-dark hover:underline font-medium">Explore Program</Link>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                                                <button className="flex-1 lg:flex-none px-6 lg:px-8 4xl:px-12 py-2.5 4xl:py-6 bg-brand-blue-dark text-white rounded-full font-medium text-13px lg:text-13px 3xl:text-body 4xl:text-24px hover:bg-brand-blue-dark/90 transition-all whitespace-nowrap">
                                                    Check Eligibility
                                                </button>
                                                <button className="flex-1 lg:flex-none px-6 lg:px-8 4xl:px-12 py-2.5 4xl:py-6 bg-brand-yellow text-navy-900 rounded-full font-medium text-13px lg:text-13px 3xl:text-body 4xl:text-24px hover:bg-brand-yellow/80 transition-all shadow-sm whitespace-nowrap">
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="py-20 4xl:py-40 text-center flex flex-col items-center justify-center">
                                <div className="text-gray-400 mb-2 4xl:mb-6">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="4xl:w-24 4xl:h-24">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <p className="text-gray-500 font-medium 3xl:text-20px 4xl:text-28px">No programs found matching your search.</p>
                                <button
                                    onClick={() => {
                                        setInputValue('')
                                        setFinalFilter('')
                                    }}
                                    className="mt-4 4xl:mt-8 text-brand-blue-dark text-15px 3xl:text-18px 4xl:text-24px font-semibold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramsList
