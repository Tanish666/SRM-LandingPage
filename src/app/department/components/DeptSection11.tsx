'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

interface Testimonial {
    name: string
    department: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Saranya Mohan',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
    {
        name: 'Saranya Mohan',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
    {
        name: 'Saranya Mohan',
        department: 'B.Sc Cardiac Care Technology',
        image: '/depsecpic5.jpg',
        quote:
            'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Dui',
    },
]

const DeptSection11 = () => {
    const active = testimonials[1]
    const left = testimonials[0]
    const right = testimonials[2]

    return (
        <>
            {/* Insights From Our Learners*/}
            <section className="py-16 w-full bg-white">
                <div className="mx-auto" style={{ maxWidth: '1440px' }}>
                    {/* Title */}
                    <h2
                        className={`${marcellus.className} text-[45px] text-black leading-[1] text-center mb-0`}
                    >
                        Insights From Our Learners
                    </h2>

                    <div
                        className="relative mx-auto mt-10"
                        style={{ width: '1281px', height: '533px' }}
                    >
                        {/*  Left Side Card */}
                        <div
                            className="absolute z-10"
                            style={{
                                width: '208px',
                                height: '270px',
                                left: '22px',
                                top: '218px',
                            }}
                        >
                            <div className="relative w-full h-full rounded-[15.38px] overflow-hidden shadow-md">
                                <Image
                                    src={left.image}
                                    alt={left.name}
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-12">
                                    <p className={`${marcellus.className} text-white text-[18.45px] leading-tight`}>
                                        {left.name}
                                    </p>
                                    <p className={`${inter.className} text-white/70 text-[12.3px] mt-0.5`}>
                                        {left.department}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Text Box  */}
                        <div
                            className="absolute bg-[#FDFDFD] rounded-[18.64px] z-20 overflow-hidden"
                            style={{
                                width: '584px',
                                height: '330px',
                                left: '444px',
                                top: '168px',
                                border: '1.86px solid #E8E8E8',
                            }}
                        >
                            {/* Quote icon — background element */}
                            <svg
                                width="125"
                                height="125"
                                viewBox="0 0 40 32"
                                fill="none"
                                className="absolute"
                                style={{ top: '15px', left: '200px', zIndex: 0 }}
                            >
                                <path
                                    d="M0 32V12.8C0 9.06667 1.06667 5.76 3.2 2.88C5.33333 0.96 7.73333 0 10.4 0L13.6 5.6C11.4667 6.4 9.86667 7.73333 8.8 9.6C7.73333 11.4667 7.2 13.6 7.2 16H16V32H0ZM24 32V12.8C24 9.06667 25.0667 5.76 27.2 2.88C29.3333 0.96 31.7333 0 34.4 0L37.6 5.6C35.4667 6.4 33.8667 7.73333 32.8 9.6C31.7333 11.4667 31.2 13.6 31.2 16H40V32H24Z"
                                    fill="rgba(0, 113, 188, 0.11)"
                                />
                            </svg>

                            <div
                                className="flex flex-col justify-center h-full relative"
                                style={{ paddingLeft: '200px', paddingRight: '32px', zIndex: 1 }}
                            >
                                <p
                                    className={`${inter.className} font-normal text-[15px] text-[#4B4B4B] mb-5`}
                                    style={{
                                        lineHeight: '25px',
                                        maxWidth: '423px',
                                    }}
                                >
                                    {active.quote}
                                </p>

                                <p className={`${marcellus.className} text-[24px] text-[#0071BC] leading-tight`}>
                                    Swetha
                                </p>
                                <p className={`${inter.className} font-normal text-[16px] text-[#666] mt-1`}>
                                    {active.department}
                                </p>
                            </div>
                        </div>

                        {/*  Center Image  */}
                        <div
                            className="absolute z-30 rounded-[20px] overflow-hidden shadow-xl"
                            style={{
                                width: '309px',
                                height: '401px',
                                left: '255px',
                                top: '132px',
                            }}
                        >
                            <Image
                                src={active.image}
                                alt={active.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-5 pb-5 pt-16">
                                <p className={`${marcellus.className} text-white text-[18.45px] font-normal leading-tight`}>
                                    {active.name}
                                </p>
                                <p className={`${inter.className} text-white/80 text-[12.3px] mt-0.5`}>
                                    {active.department}
                                </p>
                            </div>
                        </div>

                        {/*  Right Side Card */}
                        <div
                            className="absolute z-10"
                            style={{
                                width: '208px',
                                height: '270px',
                                left: '1052px',
                                top: '214px',
                            }}
                        >
                            <div className="relative w-full h-full rounded-[15.38px] overflow-hidden shadow-md">
                                <Image
                                    src={right.image}
                                    alt={right.name}
                                    fill
                                    className="object-cover grayscale"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 pb-3 pt-12">
                                    <p className={`${marcellus.className} text-white text-[18.45px] leading-tight`}>
                                        {right.name}
                                    </p>
                                    <p className={`${inter.className} text-white/70 text-[12.3px] mt-0.5`}>
                                        {right.department}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*  Left Arrow  */}
                        <button
                            className="absolute z-40 flex items-center justify-center rounded-full hover:brightness-95 transition-colors"
                            style={{
                                width: '43px',
                                height: '42px',
                                left: '0px',
                                top: '322px',
                                backgroundColor: '#FFD812',
                            }}
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft size={18} className="text-black" />
                        </button>

                        {/*  Right Arrow */}
                        <button
                            className="absolute z-40 flex items-center justify-center rounded-full hover:brightness-95 transition-colors"
                            style={{
                                width: '43px',
                                height: '42px',
                                left: '1238px',
                                top: '322px',
                                backgroundColor: '#0071BC',
                            }}
                            aria-label="Next testimonial"
                        >
                            <ArrowRight size={18} className="text-white" />
                        </button>
                    </div>

                    {/* Pagination Pills */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <span className="h-[6px] w-5 rounded-full bg-gray-300" />
                        <span className="h-[6px] w-12 rounded-full bg-[#FFD812]" />
                        <span className="h-[6px] w-5 rounded-full bg-gray-300" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default DeptSection11