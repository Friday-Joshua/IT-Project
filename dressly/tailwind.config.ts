import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:'#FCFCFC',
        secondary:'#FFFFFF',
        accent:'#D53597',
        a: {
          50:'#FBEAF4',
          100:'#2A091D',
          200:'#54123B',
          300:'#7F1A58',
          400:'#A92375',
          500:'#D53597',
          600:'#DC56A8',
          700:'#E580BE',
          800:'#EDABD4',
          900:'#F6D5E9',
        },
        w: {
          50:'#FFFFFF',
          100:'#E8E8E8',
          200:'#EBEBEB',
          300:'#EDEDED',
          400:'#F0F0F0',
          500:'#F2F2F2',
          600:'#F5F5F5',
          700:'#F7F7F7',
          800:'#FAFAFA',
          900:'#FCFCFC',
        },
        b: {
          50:'#000000',
          100:'#111111',
          200:'#222222',
          300:'#333333',
          400:'#444444',
          500:'#555555',
          600:'#666666',
          700:'#777777',
          800:'#888888',
          900:'#999999',
        },

      },
      text: {
        primary:'#FCFCFC',
        secondary:'#FFFFFF',
        accent:'#D53597',
        a: {
          50:'#FBEAF4',
          100:'#2A091D',
          200:'#54123B',
          300:'#7F1A58',
          400:'#A92375',
          500:'#D53597',
          600:'#DC56A8',
          700:'#E580BE',
          800:'#EDABD4',
          900:'#F6D5E9',
        },
        w: {
          50:'#FFFFFF',
          100:'#E8E8E8',
          200:'#EBEBEB',
          300:'#EDEDED',
          400:'#F0F0F0',
          500:'#F2F2F2',
          600:'#F5F5F5',
          700:'#F7F7F7',
          800:'#FAFAFA',
          900:'#FCFCFC',
        },
        b: {
          50:'#000000',
          100:'#111111',
          200:'#222222',
          300:'#333333',
          400:'#444444',
          500:'#555555',
          600:'#666666',
          700:'#777777',
          800:'#888888',
          900:'#999999',
        }
      },
      fontSize: {
        h1:'2.986rem',
        h2:'2.488rem',
        h3:'2.074rem',
        h4:'1.728rem',
        h5:'1.44rem',
        h6:'1.2rem',
        p:'1rem',
        'small-1':'0.833rem',
        'small-2':'0.694rem'
      },
      backgroundColor: {
        primary:'#FCFCFC',
        secondary:'#FFFFFF',
        accent:'#D53597',
        a: {
          50:'#FBEAF4',
          100:'#2A091D',
          200:'#54123B',
          300:'#7F1A58',
          400:'#A92375',
          500:'#D53597',
          600:'#DC56A8',
          700:'#E580BE',
          800:'#EDABD4',
          900:'#F6D5E9',
        },
        w: {
          50:'#FFFFFF',
          100:'#E8E8E8',
          200:'#EBEBEB',
          300:'#EDEDED',
          400:'#F0F0F0',
          500:'#F2F2F2',
          600:'#F5F5F5',
          700:'#F7F7F7',
          800:'#FAFAFA',
          900:'#FCFCFC',
        },
        b: {
          50:'#000000',
          100:'#111111',
          200:'#222222',
          300:'#333333',
          400:'#444444',
          500:'#555555',
          600:'#666666',
          700:'#777777',
          800:'#888888',
          900:'#999999',
        },
      },
      borderColor: {
        a: {
          50:'#FBEAF4',
          100:'#2A091D',
          200:'#54123B',
          300:'#7F1A58',
          400:'#A92375',
          500:'#D53597',
          600:'#DC56A8',
          700:'#E580BE',
          800:'#EDABD4',
          900:'#F6D5E9',
        },
        w: {
          50:'#FFFFFF',
          100:'#E8E8E8',
          200:'#EBEBEB',
          300:'#EDEDED',
          400:'#F0F0F0',
          500:'#F2F2F2',
          600:'#F5F5F5',
          700:'#F7F7F7',
          800:'#FAFAFA',
          900:'#FCFCFC',
        },
        b: {
          50:'#000000',
          100:'#111111',
          200:'#222222',
          300:'#333333',
          400:'#444444',
          500:'#555555',
          600:'#666666',
          700:'#777777',
          800:'#888888',
          900:'#999999',
        }
      },
      accentColor: {
        primary:'#D53597'
      }
    },
  },
  plugins: [],
}
export default config
