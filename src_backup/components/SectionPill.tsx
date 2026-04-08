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
    <div className={`flex items-center gap-2 border border-[#DBDBDB] px-5 py-2 rounded-full bg-[#F9F9F9] backdrop-blur-sm shadow-sm w-fit ${className}`}>
      <span className="size-[10px] bg-[#0071BC] rounded-full"></span>
      <span style={{ fontWeight: 400 }} className={`${inter.className} text-base text-foreground tracking-wide`}>
        {text}
      </span>
    </div>
  )
}

export default SectionPill
