import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px',
		},
		extend: {
			transformStyle: {
				'preserve-3d': 'preserve-3d',
			},
			animation: {
				shine: 'shine var(--duration) infinite linear',
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			},
			colors: {
				pill: {
					border: '#DBDBDB',
					background: '#F9F9F9',
					dot: '#0071BC',
				},
				brand: {
					yellow: '#FFEC22',
					'yellow-light': '#FFF4B1',
					'yellow-light2': '#FFFDF1',
					'yellow-border': '#FFE043',
					'yellow-primary': '#FFD100',
					blue: '#008EED',
					'blue-dark': '#0071BC',
					'blue-bright': '#17A1FA',
					'blue-cyan': '#00ADEF',
					lightBlue: '#B9E3FF',
					'lightBlue-soft': '#D2EDFF',
					'lightBlue-tint': '#F4F7FD',
				},
				footer: {
					bg: '#0275B8',
					text: '#E0F2FE',
					heading: '#F8FAFC',
				},
				clipPath: {
					'slash-cut': 'polygon(100% 0%, 100% 50%, 0 100%, 0 0%)'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#00F2FF',
					foreground: '#050B18'
				},
				secondary: {
					DEFAULT: '#7000FF',
					foreground: '#FFFFFF'
				},
				navy: {
					900: '#050B18',
					850: '#003C65',
					800: '#0D1526',
					700: '#162035',
					600: '#0066A9',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				gray: {
					dark: '#3E3E3E',
				},
				border: 'hsl(var(--border))',
				brandBorder: '#E5E5E5',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontSize: {
				'heroText': '50px',
				'subText': '16px',
				'headText': '45px',
				'subText2': '30px',
				'subText3': '24px',
				'2-75rem': 'var(--fs-2-75rem)',
				'1-35rem': 'var(--fs-1-35rem)',
				'1-6rem': 'var(--fs-1-6rem)',
				'100px': 'var(--fs-100px)',
				'10px': 'var(--fs-10px)',
				'11px': 'var(--fs-11px)',
				'13px': 'var(--fs-13px)',
				'15px': 'var(--fs-15px)',
				'16px': 'var(--fs-16px)',
				'16-5px': 'var(--fs-16-5px)',
				'17px': 'var(--fs-17px)',
				'18px': 'var(--fs-18px)',
				'1rem': 'var(--fs-1rem)',
				'2-25rem': 'var(--fs-2-25rem)',
				'2-5rem': 'var(--fs-2-5rem)',
				'20px': 'var(--fs-20px)',
				'22px': 'var(--fs-22px)',
				'24px': 'var(--fs-24px)',
				'28px': 'var(--fs-28px)',
				'2rem': 'var(--fs-2rem)',
				'38px': 'var(--fs-38px)',
				'4-5rem': 'var(--fs-4-5rem)',
				'40px': 'var(--fs-40px)',
				'45px': 'var(--fs-45px)',
				'48px': 'var(--fs-48px)',
				'5-5rem': 'var(--fs-5-5rem)',
				'54px': 'var(--fs-54px)',
				'55px': 'var(--fs-55px)',
				'60px': 'var(--fs-60px)',
				'5rem': 'var(--fs-5rem)',
				'65px': 'var(--fs-65px)',
				'70px': 'var(--fs-70px)',
				'7rem': 'var(--fs-7rem)',
				'80px': 'var(--fs-80px)',
				'display-1': ['110px', { lineHeight: '1.1', fontWeight: '400' }],
				'display-2': ['80px', { lineHeight: '1.1', fontWeight: '400' }],
				'display-3': ['60px', { lineHeight: '1.1', fontWeight: '400' }],
				'display-4': ['45px', { lineHeight: '1.1', fontWeight: '400' }],
				'h1': ['45px', { lineHeight: '1.1', fontWeight: '400' }],
				'h2': ['36px', { lineHeight: '1.2', fontWeight: '400' }],
				'body-lg': ['20px', { lineHeight: '1.5', fontWeight: '300' }],
				'body': ['16px', { lineHeight: '1.5', fontWeight: '300' }],
			},
			fontFamily: {
				sans: ["var(--font-inter)", "sans-serif"],
				display: ["var(--font-space-grotesk)", "sans-serif"],
				serif: ["var(--font-marcellus)", "serif"],
				heading: ["var(--font-marcellus)", "serif"]
			},
			maxWidth: {
				'layout': '1450px',
			},
			lineHeight: {
				'1-8': '1.8',
			},
			borderRadius: {
				none: "0",
				sm: "0.125rem",
				DEFAULT: "0.25rem",
				md: "0.375rem",
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				"3xl": "1.5rem",
				"brand-pill": "2rem",
				"20px": "20px",
				"brand-md": "3rem",
				"brand-lg": "4rem",
				"brand-xl": "6rem",
				full: "9999px",
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
				'38': '9.5rem',
				'42': '10.5rem',
				'46': '11.5rem',
				'50': '12.5rem',
				'54': '13.5rem',
				'58': '14.5rem',
				'60': '15rem',
				'70': '17.5rem',
				'80': '20rem',
				'90': '22.5rem',
				'100': '25rem',
				'120': '30rem',
				'140': '35rem',
				'160': '40rem',
				'200': '50rem',
				'300': '75rem',
				'400px': '400px',
				'1100px': '1100px',
				'1400px': '1400px',
				'1800px': '1800px',
				'2400px': '2400px',
				'208px': '208px',
				'156px': '156px',
				'120%': '120%',
				'150%': '150%',
			},
			dropShadow: {
				'footer-bar': [
					'0px 1px 10px #424E541F',
					'0px 4px 5px #424E5424',
					'0px 2px 4px #424E5433'
				]
			},
			keyframes: {
				shine: {
					'0%': { backgroundPosition: '0% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'100%': { backgroundPosition: '0% 0%' }
				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

