'use client'
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { Marcellus } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import SectionPill from './SectionPill';


const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] });

const HomeSection10 = () => {
    const [selectedDates, setSelectedDates] = React.useState<(number | string)[]>([]);
    const [startIndex, setStartIndex] = React.useState(0);

    const eventsData = [
        {
            id: 1,
            date: "August 25, 2025",
            title: "Guest Lecture On Hemophilia",
            description: "Expert talk on hemophilia management and recent clinical breakthroughs.",
            image: "/",
            link: "#"
        },
        {
            id: 2,
            date: "August 28, 2025",
            title: "Advanced Nursing Workshop",
            description: "Hands-on training session for nursing students on emergency care protocols.",
            image: "/",
            link: "#"
        },
        {
            id: 3,
            date: "September 05, 2025",
            title: "Community Health Outreach",
            description: "Providing free health checkups and awareness in surrounding rural areas.",
            image: "/",
            link: "#"
        },
        {
            id: 4,
            date: "September 12, 2025",
            title: "Sustainability In Healthcare",
            description: "A seminar on reducing medical waste and implementing green practices.",
            image: "/",
            link: "#"
        }
    ];

    const displayEvents = selectedDates.length > 0 
        ? selectedDates.map((date, index) => ({
            id: `dummy-${date}-${index}`,
            date: `August ${date}, 2025`,
            title: "Upcoming Event",
            description: `This is a dummy event for August ${date}. Actual event data is not available yet.`,
            image: "/",
            link: "#"
        }))
        : eventsData;

    const nextEvents = () => {
        if (startIndex + 2 < displayEvents.length) {
            setStartIndex(prev => prev + 2);
        } else {
            setStartIndex(0); // Optional: Loop back to start
        }
    };

    const prevEvents = () => {
        if (startIndex >= 2) {
            setStartIndex(prev => prev - 2);
        } else {
            setStartIndex(Math.max(0, Math.floor((displayEvents.length - 1) / 2) * 2)); // Optional: Loop to end
        }
    };

    // Initialize from localStorage on mount
    React.useEffect(() => {
        const saved = localStorage.getItem('selectedCalendarDates');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setSelectedDates(parsed.map(String));
                } else {
                    setSelectedDates(["4", "14", "18", "30"]);
                }
            } catch (e) {
                console.error("Error parsing saved dates", e);
                setSelectedDates(["4", "14", "18", "30"]);
            }
        } else {
            setSelectedDates(["4", "14", "18", "30"]);
        }
    }, []);

    // Persist to localStorage whenever selection changes
    React.useEffect(() => {
        if (selectedDates.length > 0 || localStorage.getItem('selectedCalendarDates')) {
            localStorage.setItem('selectedCalendarDates', JSON.stringify(selectedDates));
        }
    }, [selectedDates]);

    const toggleDate = (val: number | string) => {
        setSelectedDates(prev => {
            const stringVal = String(val);
            const stringPrev = prev.map(String);
            
            const newDates = stringPrev.includes(stringVal)
                ? stringPrev.filter(d => d !== stringVal)
                : [...stringPrev, stringVal];
            
            return newDates.length > 0 ? newDates : ["4", "14", "18", "30"];
        });
        setStartIndex(0);
    };

    const calendarData = [
        // Row 1 (Header)
        { val: "08.", type: "label" }, { val: "Mo", type: "label" }, { val: "Tu", type: "label" }, { val: "We", type: "label" }, { val: "Th", type: "label" }, { val: "Fr", type: "label" }, { val: "Sa", type: "label" }, { val: "Su", type: "label" },
        // Row 2
        { val: "31", type: "week" }, { val: "28", type: "other" }, { val: "29", type: "other" }, { val: "30", type: "other" }, { val: "31", type: "other" }, { val: "1", type: "date" }, { val: "2", type: "date" }, { val: "3", type: "date" },
        // Row 3
        { val: "32", type: "week" }, { val: "4", type: "date" }, { val: "5", type: "date" }, { val: "6", type: "date" }, { val: "7", type: "date" }, { val: "8", type: "date" }, { val: "9", type: "date" }, { val: "10", type: "date" },
        // Row 4
        { val: "33", type: "week" }, { val: "11", type: "date" }, { val: "12", type: "date" }, { val: "13", type: "date" }, { val: "14", type: "date" }, { val: "15", type: "date" }, { val: "16", type: "date" }, { val: "17", type: "date" },
        // Row 5
        { val: "34", type: "week" }, { val: "18", type: "date" }, { val: "19", type: "date" }, { val: "20", type: "date" }, { val: "21", type: "date" }, { val: "22", type: "date" }, { val: "23", type: "date" }, { val: "24", type: "date" },
        // Row 6
        { val: "35", type: "week" }, { val: "25", type: "date" }, { val: "26", type: "date" }, { val: "27", type: "date" }, { val: "28", type: "date" }, { val: "29", type: "date" }, { val: "30", type: "date" }, { val: "31", type: "date" },
        // Row 7
        { val: "36", type: "week" }, { val: "1", type: "other" }, { val: "2", type: "other" }, { val: "3", type: "other" }, { val: "4", type: "other" }, { val: "5", type: "other" }, { val: "6", type: "other" }, { val: "7", type: "other" },
    ];
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="mb-20">
                    <div className="flex flex-col items-center relative mb-12">
                        {/* Pill */}
                        <SectionPill text="News & Events" className="mb-10" />

                        {/* Heading */}
                        <h2 className={`text-3xl md:text-5xl font-serif text-center text-gray-900 leading-tight ${marcellus.className}`}>
                            Stay Updated With What's Happening <br /> At SRM AHS
                        </h2>

                        {/* Arrows (Desktop positioned right, Mobile flow below) */}
                        {displayEvents.length > 2 && (
                            <div className="hidden md:flex absolute right-0 bottom-2 gap-3">
                                <button
                                    onClick={prevEvents}
                                    className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:-translate-x-1 transition-transform"
                                    aria-label="Previous events"
                                >
                                    <IconArrowNarrowLeft size={30} strokeWidth={1.5} />
                                </button>
                                <button
                                    onClick={nextEvents}
                                    className="w-10 h-10 rounded-full bg-[#006BB3] flex items-center justify-center text-white hover:translate-x-1 transition-transform"
                                    aria-label="Next events"
                                >
                                    <IconArrowNarrowRight size={30} strokeWidth={1.5} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:h-[381px] h-auto">
                        {/* Calendar Card */}
                        <div className="bg-[#C5E6FD] rounded-xl p-6 text-gray-800">
                            <div className="flex items-center justify-center gap-4 text-lg font-serif mb-6">
                                <span>•</span>
                                <span className={`${marcellus.className} text-[24px]`}>August</span>
                                <span>•</span>
                            </div>
                            <div className='w-full h-[1px] border-t my-5 border-dashed border-[#9F9F9F]' />
                            <div className="grid grid-cols-8 gap-y-4 gap-x-2 text-[15px] md:text-[13px] lg:text-sm text-center font-medium">
                                {calendarData.map((item, index) => {
                                    if (item.type === "label") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 text-[#333333]">
                                                {item.val}
                                            </div>
                                        );
                                    }
                                    if (item.type === "week") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 text-[#333333] text-[14px]">
                                                {item.val}
                                            </div>
                                        );
                                    }
                                    if (item.type === "other") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 text-[#333333]">
                                                {item.val}
                                            </div>
                                        );
                                    }

                                    const isSelected = selectedDates.includes(item.val);

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => toggleDate(item.val)}
                                            className={`flex items-center justify-center w-7 h-7 mx-auto cursor-pointer transition-colors rounded-sm ${isSelected
                                                ? "bg-yellow-400 font-semibold"
                                                : "hover:bg-yellow-200"
                                                }`}
                                        >
                                            {item.val}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {displayEvents.slice(startIndex, startIndex + 2).map((event) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group relative">
                                        <img
                                            src={event.image}

                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 bg-yellow-400"></div>
                                            <span className="text-sm text-gray-600 font-medium">{event.date}</span>
                                        </div>
                                        <h3 className={`${marcellus.className} text-xl font-serif text-gray-900 leading-tight`}>
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                            {event.description}
                                        </p>
                                        <a href={event.link} className="text-sm text-[#006BB3] hover:underline mt-1 font-medium inline-flex items-center gap-1 group">
                                            Read More
                                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Mobile Nav Arrows Container */}
                        {displayEvents.length > 2 && (
                            <div className="flex md:hidden justify-center gap-4 mt-8">
                                <button
                                    onClick={prevEvents}
                                    className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white active:scale-95 transition-transform"
                                    aria-label="Previous events"
                                >
                                    <ArrowLeft size={20} strokeWidth={2.5} />
                                </button>
                                <button
                                    onClick={nextEvents}
                                    className="w-10 h-10 rounded-full bg-[#006BB3] flex items-center justify-center text-white active:scale-95 transition-transform"
                                    aria-label="Next events"
                                >
                                    <ArrowRight size={20} strokeWidth={2.5} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-24">
                    <h2 className={`text-3xl md:text-4xl font-serif text-center text-gray-900 mb-12 ${marcellus.className}`}>
                        Start Your Journey Today!
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#A4DEFF] rounded-[20px] h-[240px] flex flex-col items-center justify-center p-6 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg]" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 shadow-sm text-sm font-medium text-gray-800">
                                Connect With Us
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FFF3B0] rounded-[20px] h-[240px] flex flex-col items-center justify-center p-6 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg]" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 shadow-sm text-sm font-medium text-gray-800">
                                Course Enquiry
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#E0E0E0] rounded-[20px] h-[240px] flex flex-col items-center justify-center p-6 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg]" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 shadow-sm text-sm font-medium text-gray-800">
                                Apply Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSection10;
