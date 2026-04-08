'use client'
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer className="relative bg-[#0275B8] text-white pt-16 pb-0 overflow-hidden border-none shrink-0 z-50">
      {/* Decorative background waves (approximate with CSS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[50%] -left-[10%] w-[120%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent rounded-[100%]" />
        <div className="absolute top-[20%] -right-[20%] w-[100%] h-[120%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black/10 via-transparent to-transparent rounded-[100%]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12">
        {/* Column 1: Logo & Social */}
        <div className="flex flex-col gap-6">
          <div className="inline-block" style={{ width: '208px', height: '156px' }}>
            <img loading="lazy" decoding="async" src="/footerLogo.svg" alt="SRM Logo" className="w-full h-auto object-contain" />
          </div>
          <p className="text-[#E0F2FE] text-[15px] leading-relaxed pr-4 font-light">
            Lorem Ipsum Dolor Sit Amet,<br />
            Consectetur Adipiscing Elit, Sed Do<br />
            Eiusmod Tempor Incididunt Ut
          </p>
          <div className="mt-2">
            <h4 className="font-serif text-xl sm:text-2xl mb-4 text-[#F8FAFC]">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-400 transition-colors"><FaFacebookF size={30} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><FaTwitter size={30} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><FaYoutube size={30} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><FaLinkedinIn size={30} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><FaInstagram size={30} /></a>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:pl-6">
          <h4 className="font-serif text-2xl sm:text-[28px] mb-6 text-[#F8FAFC]">Quick Link</h4>
          <ul className="space-y-4 text-[15px] text-[#E0F2FE] font-light">
            <li><Link href="#" className="hover:underline">Admissions</Link></li>
            <li><Link href="#" className="hover:underline">Campus Life</Link></li>
            <li><Link href="#" className="hover:underline">Placements</Link></li>
            <li><Link href="#" className="hover:underline">Academics</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3: Academics */}
        <div>
          <h4 className="font-serif text-2xl sm:text-[28px] mb-6 text-[#F8FAFC]">Academics</h4>
          <ul className="space-y-4 text-[15px] text-[#E0F2FE] font-light">
            <li><Link href="#" className="hover:underline">Bachelor of Physiotherapy</Link></li>
            <li><Link href="#" className="hover:underline">Master of Physiotherapy</Link></li>
            <li><Link href="#" className="hover:underline">Bachelor of Occupational Therapy</Link></li>
            <li><Link href="#" className="hover:underline">Master of Occupational Therapy</Link></li>
            <li><Link href="#" className="hover:underline">Master of Science</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 className="font-serif text-2xl sm:text-[28px] mb-6 text-[#F8FAFC]">Contact Us</h4>
          <div className="space-y-6 text-[15px] text-[#E0F2FE] font-light">
            <div className="flex gap-4 items-start">
              <FaLocationDot className="text-yellow-400 text-[22px] shrink-0 mt-1" />
              <p className="leading-relaxed">
                Trichy SRM Medical College Hospital & Research<br />
                Center, SRM Nagar, Trichy – Chennai Highway,<br />
                Irungalur Village, Tiruchirapalli – 621105<br />
                Tamil Nadu, India.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaEnvelope className="text-yellow-400 text-xl shrink-0" />
              <p>srmahs@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaPhone className="text-yellow-400 text-xl shrink-0" />
              <p>000-000-000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div
          className="relative z-20"
          style={{
            filter: "drop-shadow(0px 1px 10px #424E541F) drop-shadow(0px 4px 5px #424E5424) drop-shadow(0px 2px 4px #424E5433)"
          }}
        >
          <div
            className="bg-white text-black text-[10px] sm:text-xs md:text-sm py-2 px-12 md:px-24 lg:w-[1100px] flex items-center justify-center text-center font-semibold"
            style={{
              clipPath: "polygon(35px 0, calc(100% - 35px) 0, 100% 100%, 0 100%)"
            }}
          >
            <p>SRM AHS College © 2025 - All Right Reserved | Designed & Developed by Xtracut</p>
          </div>
        </div>
      </div>

      {/* pattern */}
      <img loading="lazy" decoding="async" src="footerSvg.svg" alt="" className="absolute -top-10 object-cover w-full h-full -z-10 pointer-events-none opacity-[0.15]" />
      <img loading="lazy" decoding="async" src="footerSvg2.svg" alt="" className="absolute top-0 object-cover w-full h-full -z-20 pointer-events-none opacity-[0.14]" />
      <img loading="lazy" decoding="async" src="footerSvg3.svg" alt="" className="absolute top-16 object-cover w-full h-full -z-20 pointer-events-none opacity-[0.8]" />
      <img loading="lazy" decoding="async" src="footerSvg3.svg" alt="" className="absolute top-48 object-cover w-full h-full -z-30 pointer-events-none opacity-[0.2]" />
    </motion.footer>
  );
}

export default Footer;