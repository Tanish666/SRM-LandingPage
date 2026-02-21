"use client";
import Lenis from "lenis";
import { LiveMatchesTicker } from "@/components/LiveMatchesTicker";
import { useEffect } from "react";
import FuzzyText from "@/components/FuzzyText";
import { FloatingNavbar } from "@/components/FloatingNavbar";

export default function ClubDuelzPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2
    });
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, [])
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 font-sans">
      <FloatingNavbar />

      <main className="pt-0">
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-32">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/footballvideo.mp4" type="video/mp4" />
          </video>

          {/* Visual Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/20 to-navy-900"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Season 04 Now Live
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic font-display">
              Clash of the <br />
              <span className="w-full flex items-center justify-center">
                <FuzzyText
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-glow text-center italic"
                  baseIntensity={0.3}
                  hoverIntensity={0.5}
                  enableHover
                  fontWeight={1000}
                  fontSize={"clamp(2rem, 12vw, 12rem)"}
                  color="#00F2FF"
                  gradient={['#00FFD5', '#0066FF']}
                >Titans</FuzzyText>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Elite matchmaking for the streets. Challenge rivals, rise through
              the ranks, and secure your legend in the local circuit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-primary text-navy-900 font-black text-lg uppercase tracking-tighter hover:translate-y-[-2px] transition-all">
                Register Your Team
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/20 text-white font-black text-lg uppercase tracking-tighter backdrop-blur-sm hover:bg-white hover:text-navy-900 transition-all">
                Find a Match
              </button>
            </div>
          </div>
          <LiveMatchesTicker />
        </section>

        <section className="py-24 px-6 bg-navy-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 font-display">
                  Live Duels
                </h2>
                <p className="text-slate-500 font-medium">
                  Ongoing clashes and high-stakes matches starting soon.
                </p>
              </div>
              <a
                className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm"
                href="#"
              >
                View All Fixtures{" "}
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  arrow_right_alt
                </span>
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-navy-800 border-neon p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest animate-pulse">
                    Live Now
                  </span>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center w-2/5">
                    <img
                      alt="Team A"
                      className="w-16 h-16 mx-auto mb-3 object-cover rounded-full border-2 border-primary/20"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71zR5Pviz_Jw8FXnKjgZgDnWW1HgVnRdqF7m3m2gFwTrKoNtZTJONT8GzNqGNImHZu3qMKDIsHGa3UmIZb7Q-_LyG6Yy5dd3WByX3u2SAWczQZA82JXDtVcDzysbtYIWs9W7GciNSAusiQJ_CwSpU-b5XgsMd9_rblP0tPOs0JtdjNYIMwmHwzJr1W8n-kJ_uUrJwN94yIlo3oTFnsQTuJ1ofHDrOaflTYV6_ki79NPQrd3XatNnt0KlIoa2rYlnPBZtLfnT4JknN"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      North London FC
                    </span>
                  </div>
                  <div className="w-1/5 text-center">
                    <div className="text-2xl font-black text-primary">
                      2 - 1
                    </div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">
                      78'
                    </div>
                  </div>
                  <div className="text-center w-2/5">
                    <img
                      alt="Team B"
                      className="w-16 h-16 mx-auto mb-3 object-cover rounded-full border-2 border-white/10"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIs4Z2q06XBVH_xNpPbPMv0kqzK_1Ito3NiUK05wClIhfdJYo92tMlrddXbbZPGPGxvnJDSQuljt7eePidGkonl59wBAvEKY6kK-nOU0lLG-hP42s7rJlLrH2aBfJqm9hvpYmoBtwEkz4UUpbdjxa18gKkmwon9QWA4-GZwkJnFi-cBrodc3TI-YttP3F41rV5SiA3qx5cjUIPDawWqv2c1FVjEopXWe8th1NtaU1IUgWfFArKqPwqijTnOTUh_LRuA-lzj8WF77Zi"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Hackney United
                    </span>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    <span>Emirates Stadium Annex</span>
                  </div>
                  <button className="w-full py-3 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-navy-900 transition-all">
                    Watch Stream
                  </button>
                </div>
              </div>
              <div className="bg-navy-800 border border-white/5 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-2 py-1 bg-navy-700 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                    Countdown
                  </span>
                </div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center w-2/5">
                    <img
                      alt="Team C"
                      className="w-16 h-16 mx-auto mb-3 object-cover rounded-full border-2 border-white/10"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3m3toajmk4Yp7ofgey5_KDVcCTNjCKikk_9WWkEVcru09GwIKPUkSeCxKE5nn-Q1bCleFZBNgBXzTlepkJQIi6hTpaLdjuQoUqV7XL0Bd0Fdoh7kHjPOFBQ-8uoOplgvFx98uWcGE50NSQnar-DuzPZSTeGz5AO_yKAkD3_vNywSgWT64KreTAwLYBD7pZ3v8cQHAha-574LoG6gipj3C-q_qzkr4Gx7ZbsLfe0Dd-ikKFPTKSmvtcDx-E7EhGV6OcN9TPMy3abK"
                    />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      West Peak
                    </span>
                  </div>
                  <div className="w-1/5 text-center">
                    <div className="text-sm font-bold text-slate-500">VS</div>
                  </div>
                  <div className="text-center w-2/5">
                    <div className="w-16 h-16 bg-navy-700 border-2 border-dashed border-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white/20">
                        question_mark
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      TBD
                    </span>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-navy-900 p-2 border border-white/5">
                      <div className="text-lg font-black">02</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">
                        Days
                      </div>
                    </div>
                    <div className="bg-navy-900 p-2 border border-white/5">
                      <div className="text-lg font-black">14</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">
                        Hours
                      </div>
                    </div>
                    <div className="bg-navy-900 p-2 border border-white/5">
                      <div className="text-lg font-black">36</div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-500">
                        Mins
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white text-navy-900 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all">
                    Accept Challenge
                  </button>
                </div>
              </div>
              <div className="bg-navy-800 border border-white/5 p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center w-2/5">
                    <div className="w-16 h-16 bg-navy-700 rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-white/10 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71zR5Pviz_Jw8FXnKjgZgDnWW1HgVnRdqF7m3m2gFwTrKoNtZTJONT8GzNqGNImHZu3qMKDIsHGa3UmIZb7Q-_LyG6Yy5dd3WByX3u2SAWczQZA82JXDtVcDzysbtYIWs9W7GciNSAusiQJ_CwSpU-b5XgsMd9_rblP0tPOs0JtdjNYIMwmHwzJr1W8n-kJ_uUrJwN94yIlo3oTFnsQTuJ1ofHDrOaflTYV6_ki79NPQrd3XatNnt0KlIoa2rYlnPBZtLfnT4JknN"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">
                      South Side
                    </span>
                  </div>
                  <div className="w-1/5 text-center">
                    <div className="text-sm font-bold text-slate-500 italic">
                      TONIGHT
                    </div>
                  </div>
                  <div className="text-center w-2/5">
                    <div className="w-16 h-16 bg-navy-700 rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-white/10 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIs4Z2q06XBVH_xNpPbPMv0kqzK_1Ito3NiUK05wClIhfdJYo92tMlrddXbbZPGPGxvnJDSQuljt7eePidGkonl59wBAvEKY6kK-nOU0lLG-hP42s7rJlLrH2aBfJqm9hvpYmoBtwEkz4UUpbdjxa18gKkmwon9QWA4-GZwkJnFi-cBrodc3TI-YttP3F41rV5SiA3qx5cjUIPDawWqv2c1FVjEopXWe8th1NtaU1IUgWfFArKqPwqijTnOTUh_LRuA-lzj8WF77Zi"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Red Lions
                    </span>
                  </div>
                </div>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-center gap-4 py-2 bg-navy-900 border border-white/5">
                    <span className="text-lg font-black tracking-widest">
                      21:00
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-widest">
                      Kick Off
                    </span>
                  </div>
                  <button className="w-full py-3 bg-navy-700 text-white font-bold uppercase tracking-widest text-xs hover:bg-navy-600 transition-all">
                    Match Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-navy-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display">
                Top Clubs
              </h2>
              <p className="text-slate-400 font-medium">
                The elite of the amateur circuit. Are you ready to climb?
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    <th className="py-6 px-4 text-left">Rank</th>
                    <th className="py-6 px-4 text-left">Club</th>
                    <th className="py-6 px-4 text-center">Matches</th>
                    <th className="py-6 px-4 text-center">W / L</th>
                    <th className="py-6 px-4 text-center">Win %</th>
                    <th className="py-6 px-4 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <span className="text-primary font-black italic">
                        #01
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-10 h-10 rounded-full border border-white/10"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71zR5Pviz_Jw8FXnKjgZgDnWW1HgVnRdqF7m3m2gFwTrKoNtZTJONT8GzNqGNImHZu3qMKDIsHGa3UmIZb7Q-_LyG6Yy5dd3WByX3u2SAWczQZA82JXDtVcDzysbtYIWs9W7GciNSAusiQJ_CwSpU-b5XgsMd9_rblP0tPOs0JtdjNYIMwmHwzJr1W8n-kJ_uUrJwN94yIlo3oTFnsQTuJ1ofHDrOaflTYV6_ki79NPQrd3XatNnt0KlIoa2rYlnPBZtLfnT4JknN"
                        />
                        <span className="font-bold uppercase tracking-widest">
                          North London FC
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center font-bold">142</td>
                    <td className="py-6 px-4 text-center">
                      <span className="text-green-500">120</span> /{" "}
                      <span className="text-red-500">22</span>
                    </td>
                    <td className="py-6 px-4 text-center font-bold text-slate-400">
                      84.5%
                    </td>
                    <td className="py-6 px-4 text-right">
                      <span className="text-xl font-black text-white group-hover:text-primary transition-colors">
                        2,850
                      </span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <span className="text-white/40 font-black italic">
                        #02
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-10 h-10 rounded-full border border-white/10"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIs4Z2q06XBVH_xNpPbPMv0kqzK_1Ito3NiUK05wClIhfdJYo92tMlrddXbbZPGPGxvnJDSQuljt7eePidGkonl59wBAvEKY6kK-nOU0lLG-hP42s7rJlLrH2aBfJqm9hvpYmoBtwEkz4UUpbdjxa18gKkmwon9QWA4-GZwkJnFi-cBrodc3TI-YttP3F41rV5SiA3qx5cjUIPDawWqv2c1FVjEopXWe8th1NtaU1IUgWfFArKqPwqijTnOTUh_LRuA-lzj8WF77Zi"
                        />
                        <span className="font-bold uppercase tracking-widest">
                          Hackney United
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center font-bold">135</td>
                    <td className="py-6 px-4 text-center">
                      <span className="text-green-500">105</span> /{" "}
                      <span className="text-red-500">30</span>
                    </td>
                    <td className="py-6 px-4 text-center font-bold text-slate-400">
                      77.7%
                    </td>
                    <td className="py-6 px-4 text-right">
                      <span className="text-xl font-black text-white group-hover:text-primary transition-colors">
                        2,620
                      </span>
                    </td>
                  </tr>
                  <tr className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 px-4">
                      <span className="text-white/40 font-black italic">
                        #03
                      </span>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-10 h-10 rounded-full border border-white/10"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3m3toajmk4Yp7ofgey5_KDVcCTNjCKikk_9WWkEVcru09GwIKPUkSeCxKE5nn-Q1bCleFZBNgBXzTlepkJQIi6hTpaLdjuQoUqV7XL0Bd0Fdoh7kHjPOFBQ-8uoOplgvFx98uWcGE50NSQnar-DuzPZSTeGz5AO_yKAkD3_vNywSgWT64KreTAwLYBD7pZ3v8cQHAha-574LoG6gipj3C-q_qzkr4Gx7ZbsLfe0Dd-ikKFPTKSmvtcDx-E7EhGV6OcN9TPMy3abK"
                        />
                        <span className="font-bold uppercase tracking-widest">
                          West Peak Rovers
                        </span>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center font-bold">118</td>
                    <td className="py-6 px-4 text-center">
                      <span className="text-green-500">88</span> /{" "}
                      <span className="text-red-500">30</span>
                    </td>
                    <td className="py-6 px-4 text-center font-bold text-slate-400">
                      74.5%
                    </td>
                    <td className="py-6 px-4 text-right">
                      <span className="text-xl font-black text-white group-hover:text-primary transition-colors">
                        2,410
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-12 text-center">
              <button className="px-8 py-3 border border-white/10 hover:border-primary hover:text-primary transition-all font-bold uppercase tracking-[0.2em] text-xs">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 border-t border-white/10 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center transform rotate-12">
                  <span className="material-symbols-outlined text-navy-900 text-sm font-bold -rotate-12">
                    swords
                  </span>
                </div>
                <span className="text-xl font-black tracking-tighter uppercase italic">
                  Club Duelz
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                The premier competitive ecosystem for amateur football. Join the
                duel, prove your worth, become a titan.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 bg-navy-800 flex items-center justify-center border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a
                  className="w-10 h-10 bg-navy-800 flex items-center justify-center border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  className="w-10 h-10 bg-navy-800 flex items-center justify-center border border-white/5 hover:border-primary text-slate-400 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    smart_display
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
                How it Works
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-black text-xs mt-0.5">
                    01
                  </span>
                  <div className="text-sm font-medium text-slate-400">
                    Create a squad profile and upload your club crest.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-black text-xs mt-0.5">
                    02
                  </span>
                  <div className="text-sm font-medium text-slate-400">
                    Post match requests or challenge top-ranked rivals.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-black text-xs mt-0.5">
                    03
                  </span>
                  <div className="text-sm font-medium text-slate-400">
                    Play, record scores, and climb the elite leaderboard.
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
                Resources
              </h4>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Match Rules
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Fair Play Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Referee Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Team Kits Store
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    League Sponsorship
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">
                Stay Updated
              </h4>
              <p className="text-sm text-slate-500 mb-6 font-medium">
                Get the latest match results and league updates.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  className="bg-navy-800 border-white/10 text-white text-sm focus:border-primary focus:ring-0"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-primary text-navy-900 font-black uppercase tracking-widest text-xs py-3 hover:bg-white transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              © 2024 Club Duelz Interactive. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              <a className="hover:text-white" href="#">
                Privacy
              </a>
              <a className="hover:text-white" href="#">
                Terms
              </a>
              <a className="hover:text-white" href="#">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}