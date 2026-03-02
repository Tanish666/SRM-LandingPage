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
    { name: "Course Name", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" },
    { name: "Course Name", image: "https://images.unsplash.com/photo-1584432810601-6c7f4158ee1f?w=800&h=600&fit=crop" },
    { name: "Course Name", image: "https://images.unsplash.com/photo-1551076805-e1869005e561?w=800&h=600&fit=crop" },
    { name: "Course Name", image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop" },
    { name: "Course Name", image: "https://images.unsplash.com/photo-1581594693702-fbdc51c276b4?w=800&h=600&fit=crop" },
    { name: "Course Name", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop" },
]

const Department = () => {
    return (
        <section className={`flex flex-col items-center px-8 md:px-20 py-16 text-center ${inter.className}`}>
            <h2 className={`${marcellus.className} text-3xl md:text-[42px] text-black mb-4 font-normal`}>
                Department
            </h2>
            <p className="max-w-4xl text-gray-500 mb-10 text-[15px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="flex items-center bg-white border-2 border-[#FFD812] rounded-full p-1 mb-14 shadow-sm w-[300px] justify-between">
                <button className="flex-1 py-2.5 bg-white text-gray-700 font-medium rounded-full text-[14px]">
                    Basic Module
                </button>
                <button className="flex-1 py-2.5 bg-[#FFD812] text-black font-semibold rounded-full text-[14px]">
                    Pre-Clinical
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {courses.map((course, idx) => (
                    <div key={idx} className="relative rounded-[20px] overflow-hidden aspect-[1.1] group cursor-pointer shadow-sm bg-gray-100">
                        <img
                            src={course.image}
                            alt={course.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8 opacity-90">
                            <h3 className={`${marcellus.className} text-white/95 text-xl font-normal tracking-wide`}>
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
