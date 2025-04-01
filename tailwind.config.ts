import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  				'50': '#ebf9ee',
  				'100': '#c0eccc',
  				'200': '#a2e5b3',
  				'300': '#77d990',
  				'400': '#5dd27a',
  				'500': '#43c759',
  				'600': '#2fb551',
  				'700': '#258d3f',
  				'800': '#1d6d31',
  				'900': '#165425',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#e6f6fb',
  				'100': '#b2e3f4',
  				'200': '#8cdefe',
  				'300': '#58c3e7',
  				'400': '#38b7e2',
  				'500': '#06a5db',
  				'600': '#0596c7',
  				'700': '#04759b',
  				'800': '#035b78',
  				'900': '#03455c',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			error: {
  				'50': '#FEF2F2',
  				'100': '#FEE2E2',
  				'200': '#FECACA',
  				'300': '#FCA5A5',
  				'400': '#F87171',
  				'500': '#F43F5E',
  				'600': '#E11D48',
  				'700': '#be125f',
  				'800': '#9F1239',
  				'900': '#881337'
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
  			border: 'hsl(var(--border))',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  transitionTimingFunction: {
			"minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
		  },
  		keyframes: {
			"bg-position": {
				"0%": { backgroundPosition: "0% 50%" },
				"100%": { backgroundPosition: "100% 50%" },
			  },
	  
			meteor: {
				"0%": { transform: "translateY(-20%) translateX(-50%)" },
				"100%": { transform: "translateY(300%) translateX(-50%)" },
			  },
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			"marquee-x": {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			  },
			"marquee-y": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			  },
			  fadeIn: {
				from: { opacity: "0" },
				to: { opacity: "1" },
			  },
			  "reveal-up": {
				"0%": { opacity: "0", transform: "translateY(80%)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
			  },
			  "reveal-down": {
				"0%": { opacity: "0", transform: "translateY(-80%)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
			  },
				"content-blur": {
				"0%": { filter: "blur(0.3rem)" },
				"100%": { filter: "blur(0)" },
			  },
  		},
  		animation: {
			fadeIn: "fadeIn 0.5s ease-in",
			"bg-position": "bg-position 3s infinite alternate",
			meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			"marquee-horizontal": "marquee-x var(--duration) infinite linear",
			"marquee-vertical": "marquee-y var(--duration) linear infinite",
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
