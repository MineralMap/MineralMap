/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors - easily replaceable when branding is finalized
        brand: {
          primary: '#8A142B', // Maroon
          secondary: '#EFCD02', // Gold
          neutral: '#FFFFFF', // White
          dark: '#2E2E2E', // Dark Gray
          light: '#F5F5F5', // Light Gray
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        museum: {
          'primary': '#8A142B',
          'primary-content': '#ffffff',
          
          'secondary': '#EFCD02',
          'secondary-content': '#2E2E2E',
          
          'accent': '#EFCD02',
          'accent-content': '#2E2E2E',
          
          'neutral': '#2E2E2E',
          'neutral-content': '#ffffff',
          
          'base-100': '#ffffff',
          'base-200': '#F5F5F5',
          'base-300': '#e5e5e5',
          'base-content': '#2E2E2E',
          
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',
          
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'none',
          '--btn-focus-scale': '0.95',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',
        },
      },
      'light',
      'dark',
      'cupcake',
      'corporate',
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
