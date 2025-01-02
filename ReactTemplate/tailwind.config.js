/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		zIndex: {
  			'1': 1,
  			'2': 2,
  			'3': 3,
  			'4': 4,
  			'5': 5,
  			'6': 6,
  			'7': 7,
  			'8': 8,
  			'9': 9,
  			'11': 11,
  			'12': 12,
  			'13': 13,
  			'14': 14,
  			'15': 15,
  			'16': 16,
  			'17': 17,
  			'18': 18,
  			'19': 19,
  			'21': 21,
  			'22': 22,
  			'23': 23,
  			'24': 24,
  			'25': 25,
  			'26': 26,
  			'27': 27,
  			'28': 28,
  			'29': 29,
  			'31': 31
  		},
  		fontSize: {
  			xxxs: '.4rem',
  			xxs: '.5rem'
  		},
  		width: {
  			'1/7': '14.2857143%'
  		},
  		maxWidth: {
  			'1/7': '14.2857143%'
  		},
  		minWidth: {
  			'0': '0',
  			'40': '40px',
  			'48': '48px',
  			'56': '56px',
  			'100': '100px',
  			'168': '168px',
  			'248': '248px',
  			'448': '448px',
  			'1/4': '25%',
  			'1/2': '50%',
  			'3/4': '75%',
  			full: '100%'
  		},
  		height: {
  			'11px': '11px',
  			'580px': '580px'
  		},
  		minHeight: {
  			list: 'calc(100vh - 117px)',
  			'mail-list': 'calc(100vh - 145px)'
  		},
  		flex: {
  			'basis-56': '0 56px',
  			'basis-168': '0 168px'
  		},
  		colors: {
  			brown1: {
  				'100': '#EFEBE9',
  				'200': '#D7CCC8',
  				'300': '#BCAAA4',
  				'400': '#A1887F',
  				'500': '#8D6E63',
  				'600': '#795548',
  				'700': '#6D4C41',
  				'800': '#4E342E',
  				'900': '#3E2723'
  			},
  			gold3: {
  				'100': '#FFF8E1',
  				'200': '#FFECB3',
  				'300': '#FFE082',
  				'400': '#FFD54F',
  				'500': '#FFCA28',
  				'600': '#FFC107',
  				'700': '#FFB300',
  				'800': '#FF8F00',
  				'900': '#FF6F00'
  			},
  			cyan7: {
  				'100': '#E4FBFE',
  				'200': '#C6F6FD',
  				'300': '#7CECFA',
  				'400': '#48E4F9',
  				'500': '#00DAF7',
  				'600': '#00C5DF',
  				'700': '#00ADC4',
  				'800': '#0090A3',
  				'900': '#006876'
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  		}
  	}
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
