'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { Marquee } from '@/components/ui/marquee'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const AboutSection5 = () => {
    const marqueeLogos = [
        "sec7Logo1.svg",
        "sec7Logo2.svg",
        "sec7logo3.svg",
        "sec7Logo4.svg",
    ]

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center">

            <div className="flex items-center gap-2.5 border border-slate-200 px-5 py-2 rounded-full mb-6 bg-white shrink-0 shadow-sm">
                <span className="size-2 bg-[#0066FF] rounded-full"></span>
                <span className="text-sm font-medium text-slate-600 tracking-wide uppercase">Recognitions</span>
            </div>

            <h2 className={`${marcellus.className} text-3xl md:text-[44px] text-slate-900 mb-16 text-center leading-tight max-w-2xl`}>
                Accredited For Excellence In Technical Education
            </h2>

            <div className="relative flex flex-col gap-4 overflow-hidden w-full max-w-5xl mx-auto">
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white z-30"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white z-30"></div>

                <Marquee pauseOnHover className="[--duration:30s] flex items-center h-[100px]">
                    {marqueeLogos.map((logo, idx) => (
                        <div key={idx} className="w-[180px] h-[80px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[10px] flex items-center justify-center p-4 mx-4 hover:-translate-y-1 transition-transform">
                            {/* Assuming they are images, but using a placeholder or actual src if available */}
                            {/* We can realistically use src={logo} as in HomeSection7 */}
                            <img src={`/${logo}`} alt={`Logo ${idx}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                    {/* Add more to loop properly */}
                    {marqueeLogos.map((logo, idx) => (
                        <div key={`dup-${idx}`} className="w-[180px] h-[80px] bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[10px] flex items-center justify-center p-4 mx-4 hover:-translate-y-1 transition-transform">
                            <img src={`/${logo}`} alt={`Logo Dup ${idx}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

export default AboutSection5
