'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/aboutUs' },
        { label: 'Academics', path: '/academics' },
        { label: 'Campus Life', path: '/campus-life' },
        { label: 'Professional Activities', path: '/professional-activities' },
        { label: 'Careers', path: '/careers' },
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className='sticky top-0 z-50 bg-white items-center justify-between w-full px-6 md:px-16 py-1 shadow-sm'>
            <div className='flex items-center justify-between w-full'>
                {/* Logo */}
                <div className='flex items-center shrink-0'>
                    <img
                        src="srmLogo.svg"
                        alt="Logo"
                        className="cursor-pointer h-12 md:h-16"
                        onClick={() => {
                            router.push('/')
                            setIsOpen(false)
                        }}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center'>
                    <ul className='flex items-center gap-8 cursor-pointer list-none'>
                        {navLinks.map((link) => {
                            const active = pathname === link.path;
                            return (
                                <li
                                    key={link.label}
                                    style={{ fontWeight: 400 }}
                                    onClick={() => router.push(link.path)}
                                    className={`transition-all duration-200 text-[15px] font-medium ${active
                                        ? 'text-blue-500 hover:text-blue-600'
                                        : 'text-slate-500 hover:text-black'
                                        }`}
                                >
                                    {link.label}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Action Buttons & Mobile Toggle */}
                <div className='flex items-center gap-3'>
                    <div className='flex items-center bg-[#FFEB3B] rounded-full p-1 sm:p-1.5 transition-all'>
                        <button className='bg-white text-black px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-semibold text-[13px] sm:text-base leading-none shadow-sm transition-all hover:bg-gray-100 active:scale-95'>
                            Admission
                        </button>
                        <button className='text-black px-3 py-1.5 sm:px-5 sm:py-2 font-semibold text-[13px] sm:text-base leading-none transition-all hover:opacity-70 active:scale-95'>
                            Contact
                        </button>
                    </div>

                    {/* Hamburger Button for Mobile */}
                    <button
                        className='lg:hidden p-2 text-slate-600 hover:text-black transition-colors'
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='flex flex-col h-full bg-[#f9fafb] p-8'>
                    <ul className='flex flex-col gap-6 list-none'>
                        {navLinks.map((link) => {
                            const active = pathname === link.path;
                            return (
                                <li
                                    key={link.label}
                                    onClick={() => {
                                        router.push(link.path)
                                        setIsOpen(false)
                                    }}
                                    className={`text-xl font-semibold border-b border-slate-200 pb-2 transition-colors ${active ? 'text-blue-600 cursor-default' : 'text-slate-700 hover:text-black cursor-pointer'
                                        }`}
                                >
                                    {link.label}
                                </li>
                            )
                        })}
                    </ul>
                    <div className='mt-10 flex flex-col gap-4'>
                        <button className='w-full py-4 bg-[#FFEB3B] text-black font-bold rounded-xl shadow-md'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar