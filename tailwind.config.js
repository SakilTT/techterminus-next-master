/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      screens: {
        xxs: '250px',
        xs: '400px',
        sm: '640px',
        md: '768px',
        md2: '992px',
        lg: '1024px',
        xl: '1280px',
        'max-md6': { max: '768px' },
        'max-md2': { max: '991px' },
        'max-lg': { max: '1024px' },
        'max-lg2': { max: '1200px' },
        'max-xl2': { max: '1400px' },
        'max-md3': { max: '992px' },
        'max-sm2': { max: '576px' },
      },
      keyframes: {
        stickySlideDown: {
          '0%': { transform: 'translateY(-100%);' },
          '100%': { transform: 'translateY(0%);' },
        },
      },
      animation: {
        slideDown: 'stickySlideDown 0.65s cubic-bezier(0.23, 1, 0.32, 1) both',
      },
      cursor: {
        close: 'url(/assets/images/close.png) 16 16, default',
      },
      backgroundPosition: {
        leftCenter: 'left center',
      },
      boxShadow: {
        mainMenu: '3px 3px 15px 0 rgba(0, 0, 0, 0.1)',
        popupClose: '0px 0px 0px 0px rgba( 0, 0, 0, 0.75 )',
        missionAndVisoinBox: '-2px 4px 18px 0px #00000026',
        contactBox: '0px 4px 20px 0px #00000040',
        processEngineering: ' 0px 4px 20px 0px #00000029',
        ourClientBox: '0px 4px 20px 0px #0000001F',
      },
      fontFamily: {
        lora: '"Lora", sans-serif',
        lato: '"Lato", sans-serif',
      },
      colors: {
        white: {
          0: '#ffffff',
          1: '#e3e2e2',
          2: '#AAAAAA',
          3: '#000000',
          100: '#FFFFFF17',
          200: 'rgba(255, 255, 255, 0.35)',
          300: 'rgba(255, 255, 255, 0.6)',
          400: 'rgba(248, 248, 248, 1)',
        },
        black: {
          0: '#2a2a2a',
          1: '#2f2f2f',
          2: '#555555',
          3: '#1a1a1a',
          4: '#050505',
          5: '#323232',
          6: '#606060',
          7: '#333333',
          overlay: 'rgba(0, 0, 0, 0.7)',
          overlayThumb: 'rgba(0, 0, 0, 25%)',
          overlayThumbHover: 'rgba(255, 255, 255, 0.19)',
          solid: '#000000',
          popupClose: 'rgba( 50, 50, 50, 1.00 )',
          100: 'rgba(0, 0, 0, 1)',
        },
        gray: {
          0: '#B6B6B6',
          1: 'rgba(255, 255, 255, 0.4)',
          2: '#444444',
          3: '#ffffff1a',
          4: '#9397a7',
          5: '#A3A3A3',
          6: '#9f9e9e',
          7: '#e0e0e0',
          8: '#f4f4f4',
          9: '#FAFAFA',
          10: '#8F8F8F',
          11: '#efefef',
          12: '#F2F4FF',
          13: '#F8F8F8',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          14: '#FFFFFF',
          15: 'rgba(201, 201, 201, 1)',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
          1: 'rgba(21, 39, 135, 1)',
          2: '#152787',
        },
        orange: {
          0: '#EA831A',
          1: '#E8BE00',
          'light-bg': '#E8BE0012',
        },
      },
      flex: {
        1: '1 0 33.33%',
      },
      backgroundImage: {
        render: 'url(/images/portfolio/virtual.png)',
        countup: 'url(/images/about-us/c-up.jpg)',
        slidePattern: 'url(/images/bg1-studio.jpg)',
        Rectangle: 'url(/images/icons/Rectangle 8.png)',
        breadCumbLinkPattern: 'linear-gradient(0deg, #7e7e7e, #f5f5f5)',
        secondMenu:
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 48.4%, rgba(255, 255, 255, 0) 97.81%)',
        outClient:
          'linear-gradient(89.99deg, rgba(217, 217, 217, 0) 0.01%, rgba(217, 217, 217, 0.2) 47.92%, rgba(217, 217, 217, 0) 99.99%)',
      },
    },
  },
  plugins: [],
};
