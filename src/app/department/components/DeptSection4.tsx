'use client'
import React from 'react'
import { Marcellus, Inter } from 'next/font/google'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptSection4 = () => {
    return (
        <section
            className="relative mx-auto w-full mt-14"
            style={{
                width: '1368px',
                height: '502px',
                marginTop: '50px',
                marginBottom: '50px'
            }}
        >
            <div
                className="flex flex-col lg:flex-row gap-12 lg:gap-20 p-12 md:p-20 h-full"
                style={{
                    background: 'linear-gradient(270deg, #0066A9 0%, #003C65 100%)',
                    borderRadius: '30px',
                }}
            >
                {/* Vision Box */}
                <div className="bg-white rounded-[30px] px-10 py-8 md:px-10 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-[#46A2FF]">
                                <img src="deptvision.png" alt="Vision Icon" />
                            </div>
                            <h3
                                className={`${marcellus.className} text-[45px] text-[#000000] capitalize`}
                                style={{
                                    width: '120px',
                                    height: '56px',
                                    lineHeight: '56px'
                                }}
                            >
                                Vision
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize`}
                            style={{
                                fontSize: '15px',
                                lineHeight: '25px',
                                width: '485px',
                                height: '152px',
                            }}
                        >
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
                        </p>
                    </div>
                </div>

                {/* Mission Box */}
                <div className="bg-white rounded-[30px] px-10 py-8 md:px-14 md:py-10 flex-1 flex flex-col relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="text-[#46A2FF]">
                                <img src="deptmission.png" alt="Mission Icon" />
                            </div>
                            <h3
                                className={`${marcellus.className} text-[45px] text-[#000000] capitalize`}
                                style={{
                                    width: '170px',
                                    height: '56px',
                                    lineHeight: '56px'
                                }}
                            >
                                Mission
                            </h3>
                        </div>
                        <p
                            className={`${inter.className} text-[#515151] capitalize`}
                            style={{
                                fontSize: '15px',
                                lineHeight: '25px',
                                width: '485px',
                                height: '152px',
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeptSection4;