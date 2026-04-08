'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Marquee } from '@/components/ui/marquee'
import { Plus } from 'lucide-react'

export default function HeroMarquee() {
    const items = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ]

    return (
        <div className='pt-5'>
            <div className='bg-[#FFEC22] py-4 text-lg font-semibold uppercase tracking-wide border-y border-black/5 rotate-[0.95deg]'>
                <Marquee className=' [--duration:30s]' pauseOnHover>
                    {items.map((text, i) => (
                        <div key={i} className='flex items-center gap-3 whitespace-nowrap'>
                            <span className='text-black'>{text}</span>
                            <Plus className='size-5 text-black' strokeWidth={4} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}


