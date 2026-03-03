'use client'
import React from 'react'
import { Marcellus } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
})

const DeptCTABanner = () => {
    return (
        <section className="py-12 px-6 md:px-20 max-w-8xl mx-auto w-full">
            <div className="bg-gradient-to-r from-[#003C65] to-[#0066A9] rounded-[30px] px-8 md:px-16 py-14 md:py-20 flex flex-col items-center text-center relative overflow-hidden">
                {/* Title */}
                <h2 className={`${marcellus.className} text-3xl md:text-[42px] text-white leading-tight mb-4 max-w-[700px]`}>
                    Hope The Value Of Healthcare And Take Your Journey Today!
                </h2>

                {/* Subtitle */}
                <p className="text-white/70 text-sm md:text-base max-w-[500px] mb-8 leading-relaxed">
                    Join SRM Allied Health Sciences And Shape Your Future In Healthcare Excellence.
                </p>

                {/* CTA Button */}
                <a
                    href="#"
                    className="inline-flex items-center gap-2.5 bg-[#FFD700] hover:bg-[#FFC800] text-slate-900 font-semibold text-sm rounded-full px-7 py-3.5 transition-colors"
                >
                    Apply Now
                    <span className="inline-flex items-center justify-center bg-white/40 rounded-full w-6 h-6">
                        <ArrowUpRight size={14} />
                    </span>
                </a>
            </div>
        </section>
    )
}

export default DeptCTABanner
