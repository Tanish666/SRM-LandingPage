'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'
import Image from 'next/image'

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
        <section className="pb-16 w-full bg-white">
            <div className="mx-auto" style={{ maxWidth: '1440px' }}>
                {/* Title */}
                <h2
                    className={`${marcellus.className} text-[45px] text-black text-center capitalize`}
                    style={{
                        lineHeight: '56px',
                        width: '545px',
                        margin: '0 auto',
                    }}
                >
                    Insights From Our Learners
                </h2>

                <div
                    className="relative mx-auto"
                    style={{ width: '1281px', height: '533px', marginTop: '0px' }}
                >
                    {/* Left Side Card */}
                    <div
                        className="absolute z-10"
                        style={{
                            width: '208.05px',
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
                                className="object-cover grayscale brightness-40"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-12">
                                <p
                                    className={`${marcellus.className} text-white capitalize`}
                                    style={{
                                        fontSize: '18.4524px',
                                        lineHeight: '19px',
                                    }}
                                >
                                    {left.name}
                                </p>
                                <p
                                    className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap`}
                                    style={{
                                        fontSize: '12.3016px',
                                        lineHeight: '19px',
                                    }}
                                >
                                    {left.department}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Text Box */}
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
                        {/* Quote icon from public folder */}
                        <img
                            src="/quoteicon.svg"
                            alt=""
                            aria-hidden="true"
                            className="absolute"
                            style={{
                                width: '125px',
                                height: '125px',
                                top: '11px',
                                left: '153px',
                                zIndex: 0,
                            }}
                        />

                        <div
                            className="flex flex-col justify-center h-full relative"
                            style={{ paddingLeft: '153px', paddingRight: '32px', paddingTop: '30px', zIndex: 1 }}
                        >
                            {/* Quote text */}
                            <p
                                className={`${inter.className} font-normal text-[#4B4B4B] capitalize mb-18`}
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '25px',
                                    width: '423px',
                                }}
                            >
                                {active.quote}
                            </p>

                            {/* Name */}
                            <p
                                className={`${marcellus.className} text-[24px] text-[#0071BC] mt-5`}
                                style={{ lineHeight: '30px' }}
                            >
                                Swetha
                            </p>
                            {/* Department */}
                            <p
                                className={`${inter.className} font-normal text-[16px] text-[#4B4B4B] capitalize mt-1`}
                                style={{ lineHeight: '25px' }}
                            >
                                {active.department}
                            </p>
                        </div>
                    </div>

                    {/* Center Image */}
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
                            <p
                                className={`${marcellus.className} text-white font-normal capitalize`}
                                style={{
                                    fontSize: '24px',
                                    lineHeight: '25px',
                                }}
                            >
                                {active.name}
                            </p>
                            <p
                                className={`${inter.className} text-white font-normal capitalize mt-0.5`}
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '25px',
                                }}
                            >
                                {active.department}
                            </p>
                        </div>
                    </div>

                    {/* Right Side Card */}
                    <div
                        className="absolute z-10"
                        style={{
                            width: '208.05px',
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
                                className="object-cover grayscale brightness-40"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-12">
                                <p
                                    className={`${marcellus.className} text-white capitalize`}
                                    style={{
                                        fontSize: '18.4524px',
                                        lineHeight: '19px',
                                    }}
                                >
                                    {right.name}
                                </p>
                                <p
                                    className={`${inter.className} text-white font-normal capitalize mt-0.5 whitespace-nowrap`}
                                    style={{
                                        fontSize: '12.3016px',
                                        lineHeight: '19px',
                                    }}
                                >
                                    {right.department}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{
                            width: '43px',
                            height: '42px',
                            left: '0px',
                            top: '322px',
                        }}
                        aria-label="Previous testimonial"
                    >
                        <img src="/left_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        className="absolute z-40 p-0 border-none bg-transparent hover:brightness-95 transition-colors cursor-pointer"
                        style={{
                            width: '43px',
                            height: '42px',
                            left: '1238px',
                            top: '322px',
                        }}
                        aria-label="Next testimonial"
                    >
                        <img src="/right_arrow.svg" alt="" style={{ width: '43px', height: '42px' }} />
                    </button>
                </div>

                {/* Pagination Pills */}
                <div
                    className="flex items-center justify-center mt-8"
                    style={{ gap: '16px' }}
                >
                    <span
                        style={{
                            width: '30px',
                            height: '10px',
                            background: '#D9D9D9',
                            borderRadius: '8px',
                        }}
                    />
                    <span
                        style={{
                            width: '88px',
                            height: '10px',
                            background: '#FFE45E',
                            borderRadius: '8px',
                        }}
                    />
                    <span
                        style={{
                            width: '30px',
                            height: '10px',
                            background: '#D9D9D9',
                            borderRadius: '8px',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default DeptSection11