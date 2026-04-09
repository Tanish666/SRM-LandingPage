'use client'
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionPill from '@/components/home/SectionPill';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

interface NewsEvent {
    id: number;
    heading: string;
    date: string;
    content: string;
    slug: string;
    primary_image?: string | null;
}

const HomeSection10 = ({ newsEventsData = [] }: { newsEventsData?: NewsEvent[] }) => {
    const [startIndex, setStartIndex] = React.useState(0);

    const staticEvents = [
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

    const mappedEvents = newsEventsData.length > 0
        ? newsEventsData.map(item => ({
            id: item.id,
            date: item.date,
            title: item.heading,
            description: item.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "...", // Basic HTML strip and truncate
            image: item.primary_image || "/placeholder-event.jpg", // Fallback image
            link: `/news-events/${item.slug}`
        }))
        : staticEvents;

    const displayEvents = mappedEvents;

    const currentMonth = React.useMemo(() => {
        if (displayEvents.length > 0) {
            const firstEventDate = new Date(displayEvents[0].date);
            if (!isNaN(firstEventDate.getTime())) {
                return new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1);
            }
        }
        return new Date();
    }, [displayEvents]);

    const highlightedDays = React.useMemo(() => {
        return mappedEvents
            .map(event => {
                const d = new Date(event.date);
                return isNaN(d.getTime()) ? null : d;
            })
            .filter((d): d is Date =>
                d !== null &&
                d.getMonth() === currentMonth.getMonth() &&
                d.getFullYear() === currentMonth.getFullYear()
            )
            .map(d => String(d.getDate()));
    }, [mappedEvents, currentMonth]);

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


    const calendarData = React.useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const monthNum = String(month + 1).padStart(2, '0') + ".";

        const data = [
            { val: monthNum, type: "label" },
            { val: "Mo", type: "label" }, { val: "Tu", type: "label" }, { val: "We", type: "label" },
            { val: "Th", type: "label" }, { val: "Fr", type: "label" }, { val: "Sa", type: "label" },
            { val: "Su", type: "label" },
        ];

        const firstOfMonth = new Date(year, month, 1);
        let startDay = firstOfMonth.getDay(); // 0 is Sun
        if (startDay === 0) startDay = 7; // Convert to 1-7 (Mo-Su)

        // Previous month days to fill the first week
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        const prevDaysCount = startDay - 1;

        const allDays = [];

        for (let i = prevDaysCount - 1; i >= 0; i--) {
            allDays.push({ val: String(daysInPrevMonth - i), type: "other" });
        }

        // Current month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            allDays.push({ val: String(i), type: "date" });
        }

        // Next month to fill the last week
        const remaining = (7 - (allDays.length % 7)) % 7;
        for (let i = 1; i <= remaining; i++) {
            allDays.push({ val: String(i), type: "other" });
        }

        const getISOWeek = (d: Date) => {
            const date = new Date(d.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            const week1 = new Date(date.getFullYear(), 0, 4);
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        };

        // Group into weeks and add week number
        for (let i = 0; i < allDays.length; i += 7) {
            const firstDayOfWeek = allDays[i];
            let weekDate;
            if (firstDayOfWeek.type === 'other' && Number(firstDayOfWeek.val) > 7) {
                weekDate = new Date(year, month - 1, Number(firstDayOfWeek.val));
            } else if (firstDayOfWeek.type === 'other' && Number(firstDayOfWeek.val) < 7) {
                weekDate = new Date(year, month + 1, Number(firstDayOfWeek.val));
            } else {
                weekDate = new Date(year, month, Number(firstDayOfWeek.val));
            }

            const thursday = new Date(weekDate);
            thursday.setDate(weekDate.getDate() + 3);

            data.push({ val: String(getISOWeek(thursday)), type: "week" });
            data.push(...allDays.slice(i, i + 7));
        }

        return data;
    }, [currentMonth]);
    return (
        <section className="py-12 md:py-20 3xl:py-32 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-32 4xl:px-48 overflow-hidden">
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2000px] w-full flex flex-col">
                {/* Top Section */}
                <div className="mb-20 4xl:mb-40">
                    <div className="flex flex-col items-center relative mb-12 4xl:mb-24">
                        {/* Pill */}
                        <SectionPill text="News & Events" className="mb-10 4xl:mb-16" />

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl 3xl:text-55px 4xl:text-80px text-center text-gray-900 leading-tight">
                            Stay Updated With What's Happening <br /> At SRM AHS
                        </h2>

                        {/* Arrows (Desktop positioned right, Mobile flow below) */}
                        {displayEvents.length > 2 && (
                            <div className="hidden md:flex absolute right-0 bottom-2 4xl:bottom-10 gap-3 4xl:gap-6 4xl:scale-125">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 4xl:gap-16 lg:h-[381px] 3xl:h-[450px] 4xl:h-[600px] h-auto">
                        {/* Calendar Card */}
                        <div className="bg-[#C5E6FD] rounded-xl 4xl:rounded-3xl p-6 4xl:p-12 text-gray-800 flex flex-col">
                            <div className="flex items-center justify-center gap-4 text-lg font-serif mb-6 4xl:mb-12">
                                <span className="font-heading text-2xl 3xl:text-3xl 4xl:text-5xl">{monthNames[currentMonth.getMonth()]}</span>
                            </div>
                            <div className='w-full h-[1px] border-t my-5 4xl:my-8 border-dashed border-[#9F9F9F]' />
                            <div className="grid grid-cols-8 gap-y-4 4xl:gap-y-8 gap-x-2 text-15px md:text-13px 3xl:text-base 4xl:text-2xl lg:text-sm text-center font-medium">
                                {calendarData.map((item, index) => {
                                    if (item.type === "label") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 4xl:h-12 text-[#333333]">
                                                {item.val}
                                            </div>
                                        );
                                    }
                                    if (item.type === "week") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 4xl:h-12 text-[#333333] text-sm 3xl:text-base 4xl:text-2xl">
                                                {item.val}
                                            </div>
                                        );
                                    }
                                    if (item.type === "other") {
                                        return (
                                            <div key={index} className="flex items-center justify-center h-7 4xl:h-12 text-[#333333]">
                                                {item.val}
                                            </div>
                                        );
                                    }

                                    const isHighlighted = highlightedDays.includes(item.val);

                                    return (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-center w-7 h-7 3xl:w-9 3xl:h-9 4xl:w-14 4xl:h-14 mx-auto transition-all ${isHighlighted
                                                ? "bg-yellow-400 font-bold text-gray-900 shadow-sm rounded-lg"
                                                : "text-gray-600 rounded-full"
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
                                    className="flex flex-col gap-4 4xl:gap-8"
                                >
                                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg 4xl:rounded-3xl overflow-hidden group relative">
                                        <img loading="lazy" decoding="async"
                                            src={event.image}

                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
                                    </div>
                                    <div className="flex flex-col gap-2 4xl:gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1 h-4 4xl:w-2 4xl:h-8 bg-yellow-400"></div>
                                            <span className="text-sm 3xl:text-base 4xl:text-2xl text-gray-600 font-medium">{event.date}</span>
                                        </div>
                                        <h3 className="text-xl 3xl:text-2xl 4xl:text-4xl text-gray-900 leading-tight">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm 3xl:text-base 4xl:text-2xl text-gray-500 leading-relaxed line-clamp-2">
                                            {event.description}
                                        </p>
                                        <a href={event.link} className="text-sm 3xl:text-base 4xl:text-2xl text-[#006BB3] hover:underline mt-1 font-medium inline-flex items-center gap-1 group">
                                            Read More
                                            <ArrowUpRight size={14} className="4xl:size-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
                <div className="mt-24 4xl:mt-48">
                    <h2 className="text-3xl md:text-4xl 3xl:text-45px 4xl:text-70px text-center text-gray-900 mb-12 4xl:mb-24">
                        Start Your Journey Today!
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 4xl:gap-16">
                        {/* Card 1 */}
                        <div className="bg-[#A4DEFF] rounded-[20px] 4xl:rounded-[40px] h-[240px] 3xl:h-[300px] 4xl:h-[450px] flex flex-col items-center justify-center p-6 4xl:p-12 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 3xl:w-18 3xl:h-18 4xl:w-28 4xl:h-28 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg] 4xl:scale-150" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 4xl:py-5 4xl:px-14 shadow-sm text-sm 3xl:text-lg 4xl:text-2xl font-medium text-gray-800">
                                Connect With Us
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#FFF3B0] rounded-[20px] 4xl:rounded-[40px] h-[240px] 3xl:h-[300px] 4xl:h-[450px] flex flex-col items-center justify-center p-6 4xl:p-12 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 3xl:w-18 3xl:h-18 4xl:w-28 4xl:h-28 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg] 4xl:scale-150" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 4xl:py-5 4xl:px-14 shadow-sm text-sm 3xl:text-lg 4xl:text-2xl font-medium text-gray-800">
                                Course Enquiry
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#E0E0E0] rounded-[20px] 4xl:rounded-[40px] h-[240px] 3xl:h-[300px] 4xl:h-[450px] flex flex-col items-center justify-center p-6 4xl:p-12 relative group cursor-pointer hover:-translate-y-1 transition-transform">
                            <div className="w-14 h-14 3xl:w-18 3xl:h-18 4xl:w-28 4xl:h-28 bg-white rounded-full flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                                <IconArrowNarrowRight className="text-gray-900 -rotate-[35deg] 4xl:scale-150" size={40} strokeWidth={1.5} />
                            </div>
                            <div className="bg-white rounded-full py-2.5 px-8 4xl:py-5 4xl:px-14 shadow-sm text-sm 3xl:text-lg 4xl:text-2xl font-medium text-gray-800">
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
