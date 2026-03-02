'use client'
import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { IconArrowNarrowRight, IconArrowNarrowLeft } from '@tabler/icons-react';
import { Marcellus } from 'next/font/google';
const marcellus = Marcellus({ subsets: ['latin'], weight: ['400'] });
const HomeSection10 = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="mb-20">
                    <div className="flex flex-col items-center relative mb-12">
                        {/* Pill */}
                        <div className="flex items-center gap-2 bg-[#F9F9F9] border border-[#DBDBDB] rounded-full px-4 py-1.5 mb-10 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            <span className="text-sm font-medium text-gray-700">News & Events</span>
                        </div>
                        {/* Heading */}
                        <h2 className={`text-3xl md:text-5xl font-serif text-center text-gray-900 leading-tight ${marcellus.className}`}>
                            Stay Updated With What's Happening <br /> At SRM AHS
                        </h2>

                        {/* Arrows (Desktop positioned right, Mobile flow below) */}
                        <div className="hidden md:flex absolute right-0 bottom-2 gap-3">
                            <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white hover:-translate-x-1 transition-transform">
                                <IconArrowNarrowLeft size={30} strokeWidth={1.5} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-[#006BB3] flex items-center justify-center text-white hover:translate-x-1 transition-transform">
                                <IconArrowNarrowRight size={30} strokeWidth={1.5} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[381px]">
                        {/* Calendar Card */}
                        <div className="bg-[#C5E6FD] rounded-xl p-6 text-gray-800">
                            <div className="flex items-center justify-center gap-4 text-lg font-serif mb-6">
                                <span>•</span>
                                <span className={`${marcellus.className} text-[24px]`}>August</span>
                                <span>•</span>
                            </div>
                            <div className='w-full h-[1px] border-t my-5 border-dashed border-[#9F9F9F]' />
                            <div className="grid grid-cols-8 gap-y-4 gap-x-2 text-[15px] md:text-[13px] lg:text-sm text-center font-medium">
                                {/* Header Row */}
                                <div className="flex items-center justify-center h-7 text-[#333333]">08.</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Mo</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Tu</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">We</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Th</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Fr</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Sa</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">Su</div>

                                {/* Row 1 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">31</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">28</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">29</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">30</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">31</div>
                                <div className="flex items-center justify-center h-7">1</div>
                                <div className="flex items-center justify-center h-7">2</div>
                                <div className="flex items-center justify-center h-7">3</div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">32</div>
                                <div className="bg-yellow-400 rounded-sm font-semibold flex items-center justify-center w-7 h-7 mx-auto">4</div>
                                <div className="flex items-center justify-center h-7">5</div>
                                <div className="flex items-center justify-center h-7">6</div>
                                <div className="flex items-center justify-center h-7">7</div>
                                <div className="flex items-center justify-center h-7">8</div>
                                <div className="flex items-center justify-center h-7">9</div>
                                <div className="flex items-center justify-center h-7">10</div>

                                {/* Row 3 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">33</div>
                                <div className="flex items-center justify-center h-7">11</div>
                                <div className="flex items-center justify-center h-7">12</div>
                                <div className="flex items-center justify-center h-7">13</div>
                                <div className="bg-yellow-400 rounded-sm font-semibold flex items-center justify-center w-7 h-7 mx-auto">14</div>
                                <div className="flex items-center justify-center h-7">15</div>
                                <div className="flex items-center justify-center h-7">16</div>
                                <div className="flex items-center justify-center h-7">17</div>

                                {/* Row 4 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">34</div>
                                <div className="bg-yellow-400 rounded-sm font-semibold flex items-center justify-center w-7 h-7 mx-auto">18</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">19</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">20</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">21</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">22</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">23</div>
                                <div className="flex items-center justify-center h-7 text-[#333333]">24</div>

                                {/* Row 5 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">35</div>
                                <div className="flex items-center justify-center h-7">25</div>
                                <div className="flex items-center justify-center h-7">26</div>
                                <div className="flex items-center justify-center h-7">27</div>
                                <div className="flex items-center justify-center h-7">28</div>
                                <div className="flex items-center justify-center h-7">29</div>
                                <div className="bg-yellow-400 rounded-sm font-semibold flex items-center justify-center w-7 h-7 mx-auto">30</div>
                                <div className="flex items-center justify-center h-7">31</div>

                                {/* Row 6 */}
                                <div className="flex items-center justify-center h-7 text-[#333333] text-[14px]">36</div>
                                <div className="flex items-center justify-center h-7">1</div>
                                <div className="flex items-center justify-center h-7">2</div>
                                <div className="flex items-center justify-center h-7">3</div>
                                <div className="flex items-center justify-center h-7">4</div>
                                <div className="flex items-center justify-center h-7">5</div>
                                <div className="flex items-center justify-center h-7">6</div>
                                <div className="flex items-center justify-center h-7">7</div>
                            </div>
                        </div>

                        {/* Event Card 1 */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full aspect-[4/3] bg-gray-300 rounded-lg"></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-4 bg-yellow-400"></div>
                                    <span className="text-sm text-gray-600 font-medium">August 25.2025</span>
                                </div>
                                <h3 className={`${marcellus.className} text-xl font-serif text-gray-900`}>Guest Lecture On Hemophilia</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <a href="#" className="text-sm text-[#006BB3] hover:underline mt-1 font-medium">
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Event Card 2 */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full aspect-[4/3] bg-gray-300 rounded-lg"></div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-4 bg-yellow-400"></div>
                                    <span className="text-sm text-gray-600 font-medium">August 25.2025</span>
                                </div>
                                <h3 className={`${marcellus.className} text-xl font-serif text-gray-900`}>Guest Lecture On Hemophilia</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                                <a href="#" className="text-sm text-[#006BB3] hover:underline mt-1 font-medium">
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Mobile Nav Arrows Container if needed, keeping simple for now */}
                        <div className="flex md:hidden justify-center gap-4 mt-4">
                            <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                                <ArrowLeft size={20} strokeWidth={2.5} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-[#006BB3] flex items-center justify-center text-white">
                                <ArrowRight size={20} strokeWidth={2.5} />
                            </button>
                        </div>
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
