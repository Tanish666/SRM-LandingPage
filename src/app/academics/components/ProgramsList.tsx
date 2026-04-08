'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Marcellus } from 'next/font/google'
import Link from 'next/link'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

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
        <section className="flex flex-col items-center justify-center w-full px-8 md:px-20 py-16">
            <h2 className={`${marcellus.className} text-3xl md:text-[45px] text-black mb-10 text-center`}>
                Our Allied Health Sciences Programs
            </h2>

            <div className="w-full max-w-6xl mx-auto rounded-[21.04px] border border-gray-200 overflow-hidden shadow-sm bg-[#EEEEEE]">
                {/* Header Bar */}
                <div className="bg-[#0071BC] p-4 lg:p-6 flex flex-col items-center justify-between gap-6 rounded-t-[21.04px] lg:flex-row">
                    {/* Toggle Buttons */}
                    <div className="flex items-center bg-[#FFD812] rounded-full p-1 overflow-x-auto w-full lg:w-auto overflow-hidden shrink-0 no-scrollbar">
                        <button
                            onClick={() => {
                                setActiveTab('Under Graduate')
                                setFinalFilter('') // Refresh list on tab change
                                setInputValue('')
                            }}
                            className={`flex-1 lg:flex-none px-4 lg:px-6 py-2 rounded-full font-medium whitespace-nowrap shadow-sm text-sm lg:text-base transition-colors ${activeTab === 'Under Graduate' ? 'bg-white text-gray-900' : 'text-gray-900 bg-transparent hover:bg-white/50'}`}
                        >
                            Under Graduate
                        </button>
                        <button
                            onClick={() => {
                                setActiveTab('Post Graduate')
                                setFinalFilter('') // Refresh list on tab change
                                setInputValue('')
                            }}
                            className={`flex-1 lg:flex-none px-4 lg:px-6 py-2 rounded-full font-medium whitespace-nowrap shadow-sm text-sm lg:text-base transition-colors ${activeTab === 'Post Graduate' ? 'bg-white text-gray-900' : 'text-gray-900 bg-transparent hover:bg-white/50'}`}
                        >
                            Post Graduate
                        </button>
                    </div>

                    {/* Search Bar Container */}
                    <div className="flex-1 w-full max-w-2xl relative" ref={dropdownRef}>
                        <div className="flex items-center bg-white rounded-full overflow-hidden border border-gray-100 pl-4 lg:pl-6 py-1 pr-1 w-full relative">
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
                                className="flex-1 min-w-0 px-2 py-2 outline-none text-gray-700 bg-transparent text-sm placeholder-gray-300"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[#FFD812] text-gray-900 px-4 lg:px-8 py-2.5 rounded-full font-medium shadow-sm hover:bg-yellow-400 transition-colors text-xs lg:text-sm whitespace-nowrap shrink-0"
                            >
                                Search
                            </button>
                        </div>

                        {/* Dropdown Suggestions */}
                        {showDropdown && suggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-[300px] overflow-y-auto">
                                {suggestions.map((suggestion, idx) => {
                                    const suggestionId = suggestion._id || suggestion.id || `suggestion-${idx}`;
                                    return (
                                        <div
                                            key={suggestionId}
                                            onClick={() => handleSelectSuggestion(suggestion.name)}
                                            className="px-6 py-3 hover:bg-[#F2F9FF] cursor-pointer transition-colors border-b border-gray-50 last:border-none flex items-center justify-between group"
                                        >
                                            <span className="text-gray-700 text-sm font-medium group-hover:text-[#0071BC]">{suggestion.name}</span>
                                            <span className="text-[10px] bg-gray-100 px-2 py-1 rounded-full text-gray-500">{suggestion.duration || "3 Year"}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* List Section */}
                <div className="bg-[#EEEEEE] min-h-[400px]">
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((program, idx) => {
                            const programId = program._id || program.id || `program-${idx}`;
                            return (
                                <div key={programId} className="px-6 md:px-10">
                                    <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 border-b`} style={{ borderColor: '#c0c0c0' }}>
                                        <div className="mb-6 lg:mb-0 w-full lg:w-auto">
                                            <h3 className={`${marcellus.className} text-lg lg:text-xl text-gray-900 mb-[4px]`}>{program.name}</h3>
                                            <div className="text-xs lg:text-[13px] text-gray-500 flex flex-wrap items-center gap-3 lg:gap-4">
                                                <span>Duration : {program.duration || "3 Year"}</span>
                                                <span className="hidden lg:inline text-gray-300">|</span>
                                                <Link href={`/CourseDetail?id=${programId}`} className="text-[#0070c0] hover:underline font-medium">Explore Program</Link>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                                            <button className="flex-1 lg:flex-none px-6 lg:px-8 py-2.5 bg-[#0070c0] text-white rounded-full font-medium text-xs lg:text-[13px] hover:bg-blue-700 transition-all whitespace-nowrap">
                                                Check Eligibility
                                            </button>
                                            <button className="flex-1 lg:flex-none px-6 lg:px-8 py-2.5 bg-[#FFD812] text-gray-900 rounded-full font-medium text-xs lg:text-[13px] hover:bg-yellow-400 transition-all shadow-sm whitespace-nowrap">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="py-20 text-center flex flex-col items-center justify-center">
                            <div className="text-gray-400 mb-2">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                            <p className="text-gray-500 font-medium">No programs found matching your search.</p>
                            <button
                                onClick={() => {
                                    setInputValue('')
                                    setFinalFilter('')
                                }}
                                className="mt-4 text-[#0071BC] text-sm font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProgramsList
