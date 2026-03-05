'use client'
import React from 'react'
import { Marcellus, Inter, Inder } from 'next/font/google'
import Image from 'next/image'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

const inder = Inder({
    subsets: ['latin'],
    weight: ['400'],
})

const faculty = [
    {
        name: 'Dr.Kumar Ebenezer',
        qualification: 'M.Sc., Ph.D.',
        designation: 'Professor & Principal',
        image: '/deptimagefinal.png',
        leftOffset: 0,
    },
    {
        name: 'Dr.G.Rohini',
        qualification: 'M.Sc., Ph.D. Biochemistry / PDF',
        designation: 'Associate Professor',
        image: '/deptimagefinal.png',
        leftOffset: 432,
    },
    {
        name: 'Dr.A.Vijayan',
        qualification: 'MSc., Ph.D.',
        designation: 'Assistant Professor',
        image: '/deptimagefinal.png',
        leftOffset: 864,
    },
]

const DeptFacultySection = () => {
    return (
        <section className="w-full bg-white mt-[88px]">
            <div
                className="relative mx-auto"
                style={{ width: '1440px', height: '790px' }}
            >
                {/*  Title */}
                <h2
                    className={`${marcellus.className} absolute text-[45px] text-black text-center capitalize`}
                    style={{
                        width: '235px',
                        lineHeight: '56px',
                        top: '0px',
                        left: 'calc(50% - 235px / 2 - 3.5px)',
                    }}
                >
                    Our Faculty
                </h2>

                {/* ── Description ── */}
                <p
                    className={`${inter.className} absolute font-light text-[18px] text-black text-center`}
                    style={{
                        width: '1005px',
                        lineHeight: '27px',
                        top: '87px',
                        left: 'calc(50% - 1005px / 2 + 11.5px)',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut laboreLorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod
                </p>

                {/* ── Faculty Images Grid ── */}
                <div
                    className="absolute"
                    style={{
                        width: '1239px',
                        height: '489px',
                        left: '98px',
                        top: '191px',
                    }}
                >
                    {faculty.map((member, index) => (
                        <div
                            key={index}
                            className="absolute overflow-hidden rounded-[20px]"
                            style={{
                                width: '375px',
                                height: '394px',
                                left: `${member.leftOffset}px`,
                                top: '0px',
                            }}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                            {/* Gradient overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05)), linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Yellow Bars + Names + Qualifications + Designations  */}
                {faculty.map((member, index) => {
                    const barLeft = [99, 530, 962][index]
                    const textLeft = barLeft + 15

                    return (
                        <React.Fragment key={`info-${index}`}>
                            {/* Yellow Accent Bar — 9×22 */}
                            <span
                                className="absolute"
                                style={{
                                    width: '9px',
                                    height: '22px',
                                    backgroundColor: '#FFD812',
                                    left: `${barLeft}px`,
                                    top: '618px',
                                }}
                            />

                            {/* Name + Qualification inline */}
                            <div
                                className="absolute flex items-baseline gap-[6px]"
                                style={{
                                    left: `${textLeft}px`,
                                    top: '610px',
                                }}
                            >
                                <span
                                    className={`${marcellus.className} text-[30px] text-black`}
                                    style={{
                                        lineHeight: '38px',
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    {member.name}
                                </span>
                                <span
                                    className={`${marcellus.className} text-[16px] text-black`}
                                    style={{
                                        lineHeight: '20px',
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    {member.qualification}
                                </span>
                            </div>

                            {/* Designation */}
                            <span
                                className={`${inder.className} absolute font-normal text-[#0071BC]`}
                                style={{
                                    fontSize: '19.3089px',
                                    lineHeight: '26px',
                                    letterSpacing: '-0.03em',
                                    left: `${textLeft}px`,
                                    top: '654px',
                                }}
                            >
                                {member.designation}
                            </span>
                        </React.Fragment>
                    )
                })}

                {/*  View All Faculty Button  */}
                <a
                    href="#"
                    className="absolute inline-flex items-center justify-between bg-[#FFEC22] hover:brightness-95 transition-all"
                    style={{
                        width: '216px',
                        height: '47px',
                        top: '714px',
                        left: 'calc(50% - 216px / 2 - 4px)',
                        border: '1.12px solid #E5E5E5',
                        borderRadius: '33.57px',
                        paddingLeft: '20px',
                        paddingRight: '4px',
                    }}
                >
                    <span
                        className={`${inter.className} font-normal text-[18px] text-black capitalize`}
                        style={{ lineHeight: '28px' }}
                    >
                        View All Faculty
                    </span>
                    <span
                        className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
                        style={{ width: '39px', height: '38px' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="19" x2="19" y2="5" />
                            <polyline points="9 5 19 5 19 15" />
                        </svg>
                    </span>
                </a>
        </div>
        </section>
    )
}

export default DeptFacultySection