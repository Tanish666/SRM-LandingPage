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

const faculty = [
    {
        name: 'Dr.Kumar Ebenezer',
        qualification: 'M.Sc., Ph.D.',
        designation: 'Professor & Principal',
        image: '/deptimage.png',
        left: 98,
    },
    {
        name: 'Dr.G.Rohini',
        qualification: 'M.Sc., Ph.D. Biochemistry / PDF',
        designation: 'Associate Professor',
        image: '/deptimage.png',
        left: 530,
    },
    {
        name: 'Dr.A.Vijayan',
        qualification: 'M.Sc., Ph.D.',
        designation: 'Assistant Professor',
        image: '/deptimage.png',
        left: 962,
    },
]

const DeptFacultySection = () => {
    return (
        <section className="w-full bg-white overflow-hidden py-20">
            <div className="relative mx-auto" style={{ width: '1440px', height: '650px' }}>

                <div className="relative w-full h-full">
                    {faculty.map((member, index) => (
                        <React.Fragment key={index}>
                            {/* Image Container  */}
                            <div
                                className="absolute"
                                style={{
                                    width: '375px',
                                    height: '394px',
                                    left: `${member.left}px`,
                                    top: '0px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    background: '#F5F5F5', 
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    style={{
                                        transform: 'scale(1.1)',
                                        objectPosition: 'center 10%',
                                    }}
                                />
                            </div>

                            {/* Yellow Accent Bar */}
                            <span
                                className="absolute"
                                style={{
                                    width: '9px',
                                    height: '22px',
                                    backgroundColor: '#FFD812',
                                    left: `${member.left}px`,
                                    top: '419px',
                                }}
                            />

                            {/* Name + Qualification  */}
                            <h3
                                className={`${marcellus.className} absolute text-[30px] text-black capitalize`}
                                style={{
                                    width: '700px', 
                                    lineHeight: '38px',
                                    letterSpacing: '-0.03em',
                                    left: `${member.left + 15}px`,
                                    top: '411px',
                                }}
                            >
                                {member.name}
                                <span className="text-[16px] ml-2 font-normal">
                                    {member.qualification}
                                </span>
                            </h3>

                            {/* Designation */}
                            <p
                                className="absolute font-normal text-[#0071BC]"
                                style={{
                                    fontFamily: 'Inder, sans-serif',
                                    fontSize: '19.3089px',
                                    lineHeight: '26px',
                                    letterSpacing: '-0.03em',
                                    left: `${member.left + 15}px`,
                                    top: '455px',
                                }}
                            >
                                {member.designation}
                            </p>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DeptFacultySection;