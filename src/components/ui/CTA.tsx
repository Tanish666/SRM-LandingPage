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
                "group flex items-center gap-3 bg-[#FFEC22] pl-6 pr-1 py-1 border border-[#E5E5E5] rounded-[33.57px] shadow-md hover:shadow-lg transition-all duration-300 w-fit",
                className
            )}
        >
            <span className="text-[#000000] ml-2">{text}</span>
            <div className="bg-[#FFFFFF] rounded-full p-2 group-hover:bg-slate-50 transition-colors">
                <ArrowUpRight className="size-5 text-slate-900" />
            </div>
        </button>
    )
}

export default CTAButton
