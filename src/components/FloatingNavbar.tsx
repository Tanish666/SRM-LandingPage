"use client";
import { motion } from 'framer-motion';
import React from "react";

export function FloatingNavbar() {
    return (
        <motion.header
            initial={{ y: -200, x: "-50%", width: "3.8%" }}
            animate={{ y: 0, width: "96%" }}
            transition={{
                y: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }, // Smoother Quart ease
                width: { duration: 5, ease: [0.16, 1, 0.3, 1], delay: 2 } // Starts as drop is ending
            }}
            className="fixed top-6 left-1/2 z-50 max-w-6xl border border-white/10 bg-navy-900/60 backdrop-blur-xl rounded-full shadow-2xl overflow-hidden"
        >
            <div className="flex items-center justify-between px-4 h-14">
                <div className="flex items-center gap-3">
                    <motion.div
                        initial={{ x: -8 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transform rotate-12 shadow-[0_0_20px_rgba(0,242,255,0.4)] flex-shrink-0">
                        <span className="material-symbols-outlined text-navy-900 font-bold -rotate-12">
                            swords
                        </span>
                    </motion.div>
                    <span className="text-xl font-black tracking-tighter uppercase italic text-slate-100">
                        Club Duelz
                    </span>
                </div>
                <nav className="hidden lg:flex items-center gap-8">
                    <a
                        className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-slate-300"
                        href="#"
                    >
                        Matches
                    </a>
                    <a
                        className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-slate-300"
                        href="#"
                    >
                        Teams
                    </a>
                    <a
                        className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-slate-300"
                        href="#"
                    >
                        Leagues
                    </a>
                    <a
                        className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors text-slate-300"
                        href="#"
                    >
                        Rankings
                    </a>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="text-xs font-bold uppercase tracking-widest hover:text-primary text-slate-300">
                        Login
                    </button>
                    <button className="bg-primary text-navy-900 px-6 py-2.5 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all shadow-lg shadow-primary/20 text-xs text-nowrap">
                        Join League
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
