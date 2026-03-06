import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ExploreButtonProps {
    text: string
    onClick?: () => void
    className?: string
}

const CTAButton = ({ text, onClick, className }: ExploreButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group flex items-center justify-between gap-4 bg-[#FFEC22] pl-8 pr-1.5 py-1.5 border border-[#E5E5E5] rounded-[33.57px] shadow-md hover:shadow-lg transition-all duration-300 w-fit min-w-[160px]",
                className
            )}
        >
            <span className="text-[#000000] font-medium tracking-wide whitespace-nowrap">{text}</span>
            <div className="bg-[#FFFFFF] rounded-full p-2.5 group-hover:bg-slate-50 transition-colors shadow-sm">
                <ArrowUpRight className="size-5 text-slate-900" />
            </div>
        </button>
    )
}

export default CTAButton
