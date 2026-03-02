import React from 'react'
import { Marcellus, Inter } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
})

const courses = [
    { name: "Course Name", image: "/ADSec4Pic1.svg  " },
    { name: "Course Name", image: "/ADSec4Pic2.svg" },
    { name: "Course Name", image: "/ADSec4Pic3.svg" },
    { name: "Course Name", image: "/ADSec4Pic4.svg" },
    { name: "Course Name", image: "/ADSec4Pic5.svg" },
    { name: "Course Name", image: "/ADSec4Pic6.svg" },
]

const Department = () => {
    return (
        <section className={`flex flex-col items-center px-8 md:px-20 py-16 text-center ${inter.className}`}>
            <h2 className={`${marcellus.className} text-4xl md:text-[50px] text-black mb-4 font-normal`}>
                Department
            </h2>
            <p className="max-w-4xl text-gray-600 mb-12 text-[16px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </p>

            <div className="flex items-center bg-[#FFD812] rounded-full p-1.5 mb-14 shadow-sm w-fit">
                <button className="px-8 py-2.5 bg-white text-gray-900 font-medium rounded-full text-[15px] shadow-sm">
                    Under Graduate
                </button>
                <button className="px-8 py-2.5 text-gray-900 font-medium rounded-full text-[15px]">
                    Post Graduate
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-7xl w-full">
                {courses.map((course, idx) => (
                    <div key={idx} className="relative rounded-[20.69px] overflow-hidden aspect-[1.1] group cursor-pointer shadow-sm bg-gray-100 w-[362.05px] h-[393.08px]">
                        <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 opacity-90">
                            <h3 className={`${marcellus.className} text-[#FFFFFF] text-xl font-normal tracking-wide text-[30px]`}>
                                {course.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Department
