'use client'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/aboutUs' },
        { label: 'Academics', path: '/academics' },
        { label: 'Campus Life', path: '/campus-life' },
        { label: 'Professional Activities', path: '/professional-activities' },
        { label: 'Careers', path: '/careers' },
    ]

    return (
        <nav className='sticky top-0 z-50 bg-[#FFFFFF] flex items-center justify-between w-full px-16 py-1 shadow-sm'>
            <div className='flex items-center justify-between'>
                <img src="srmLogo.svg" alt="" className="cursor-pointer" onClick={() => router.push('/')} />
            </div>
            <div className='flex items-center'>
                <ul className='flex items-center gap-8 cursor-pointer list-none'>
                    {navLinks.map((link) => {
                        const active = pathname === link.path;
                        return (
                            <li
                                key={link.label}
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
            <div className='flex items-center bg-[#FFEB3B] rounded-full p-2'>
                <button className='bg-white text-black px-5 py-2.5 rounded-full font-medium leading-none shadow-sm transition-all hover:bg-gray-100'>
                    Admission
                </button>
                <button className='text-black px-5 py-2.5 font-medium leading-none transition-all hover:opacity-80'>
                    Contact
                </button>
            </div>
        </nav>
    )
}

export default Navbar