import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
})

const courses = [
    { name: "Course Name", image: "/ADSec4Pic1.svg" },
    { name: "Course Name", image: "/ADSec4Pic2.svg" },
    { name: "Course Name", image: "/ADSec4Pic3.svg" },
    { name: "Course Name", image: "/ADSec4Pic4.svg" },
    { name: "Course Name", image: "/ADSec4Pic5.svg" },
    { name: "Course Name", image: "/ADSec4Pic6.svg" },
]

const Department = () => {
    return (
        <section className={`py-12 md:py-20 3xl:py-28 4xl:py-48 w-full flex justify-center px-4 md:px-10 lg:px-20 3xl:px-40 4xl:px-60 overflow-hidden text-center`}>
            <div className="max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full flex flex-col items-center">
                <h2 className={"text-h2 md:text-h1 3xl:text-7xl 4xl:text-display-1 text-navy-900 mb-4 4xl:mb-12 font-heading font-normal"}>
                    Department
                </h2>
                <p className="max-w-4xl 3xl:max-w-6xl 4xl:max-w-[1700px] text-navy-800/70 mb-10 md:mb-12 3xl:mb-16 4xl:mb-24 text-sm md:text-base 3xl:text-xl 4xl:text-4xl leading-relaxed 3xl:leading-snug 4xl:leading-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>

                <div className="flex items-center bg-brand-yellow rounded-full p-1 3xl:p-2 4xl:p-4 mb-10 md:mb-14 3xl:mb-20 4xl:mb-32 shadow-sm w-fit">
                    <button className="px-6 md:px-8 py-2 md:py-2.5 3xl:px-12 3xl:py-4 4xl:px-20 4xl:py-8 bg-white text-navy-900 font-medium rounded-full text-sm 3xl:text-xl 4xl:text-4xl shadow-sm whitespace-nowrap">
                        Under Graduate
                    </button>
                    <button className="px-6 md:px-8 py-2 md:py-2.5 3xl:px-12 3xl:py-4 4xl:px-20 4xl:py-8 text-navy-900 font-medium rounded-full text-sm 3xl:text-xl 4xl:text-4xl whitespace-nowrap">
                        Post Graduate
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 3xl:gap-24 4xl:gap-40 max-w-7xl 3xl:max-w-[1600px] 4xl:max-w-[2400px] w-full px-4 md:px-0">
                    {courses.map((course, idx) => (
                        <div key={idx} className="relative rounded-3xl 3xl:rounded-brand-md 4xl:rounded-brand-lg overflow-hidden aspect-[0.9] group cursor-pointer shadow-sm bg-slate-100 w-full max-w-[22rem] 3xl:max-w-[32rem] 4xl:max-w-[46rem] mx-auto transition-transform hover:-translate-y-1">
                            <img loading="lazy" decoding="async"
                                src={course.image}
                                alt={course.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent flex items-end justify-center pb-8 3xl:pb-12 4xl:pb-24 opacity-90 text-center px-4">
                                <h3 className={"text-white text-2xl lg:text-3xl 3xl:text-4xl 4xl:text-6xl font-heading font-normal tracking-wide"}>
                                    {course.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Department
