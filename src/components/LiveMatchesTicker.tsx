"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";

const matches = [
    {
        type: "LIVE",
        content: "Kings Cross FC 2 - 1 Camden United",
    },
    {
        type: "UPCOMING",
        content: "Shoreditch Rovers vs Hackney Lions",
    },
    {
        type: "RESULT",
        content: "Brixton Blues 0 - 3 Peckham Elite",
    },
];

export function LiveMatchesTicker() {
    return (
        <div className="absolute bottom-0 w-full bg-navy-800/50 border-t border-white/10 backdrop-blur-md py-4 overflow-hidden">
            <Marquee className="[--duration:30s] [--gap:3rem]" pauseOnHover>
                {matches.map((match, idx) => (
                    <div key={idx} className="flex items-center gap-12">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-bold">{match.type}:</span>
                            <span className="font-bold uppercase tracking-widest text-sm text-slate-100">
                                {match.content}
                            </span>
                        </div>
                        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
