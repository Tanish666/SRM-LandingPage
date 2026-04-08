'use client'

import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['500'] })

interface SectionPillProps {
  text: string
  className?: string
}

const SectionPill = ({ text, className = "" }: SectionPillProps) => {
  return (
    <div className={`flex items-center gap-2 border border-brandBorder px-5 4xl:px-10 py-2 4xl:py-5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm w-fit ${className}`}>
      <span className="size-[10px] 4xl:size-4 bg-brand-yellow rounded-full"></span>
      <span className={`${inter.className} text-base 3xl:text-xl 4xl:text-[28px] text-navy-800 tracking-wide font-medium capitalize`}>
        {text}
      </span>
    </div>
  )
}

export default SectionPill
