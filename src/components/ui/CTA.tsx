import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ExploreButtonProps {
    text: string
    onClick?: () => void
    className?: string
    disabled?: boolean
}

const CTAButton = ({ text, onClick, className, disabled = false }: ExploreButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "group flex items-center justify-between gap-4 bg-brand-yellow pl-8 pr-1.5 py-1.5 border border-brandBorder rounded-full shadow-md transition-all duration-300 w-fit min-w-[160px]",
                "hover:shadow-lg hover:bg-brand-yellow/90", // Hover state
                "active:scale-[0.98] active:shadow-sm", // Active state
                "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-md disabled:active:scale-100 disabled:hover:bg-brand-yellow", // Disabled state
                className
            )}
        >
            <span className="text-black font-medium tracking-wide whitespace-nowrap">{text}</span>
            <div className={cn(
                "bg-white rounded-full p-2.5 shadow-sm transition-colors",
                !disabled && "group-hover:bg-slate-50"
            )}>
                <ArrowUpRight className={cn("size-5", disabled ? "text-slate-400" : "text-slate-900")} />
            </div>
        </button>
    )
}

export default CTAButton
