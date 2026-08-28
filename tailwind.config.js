/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF0',
          100: '#FEFEF5',
          200: '#FEFCF8',
        },
        primary: {
          50: '#f0fdfa',
          100: '#ecfeff',
          200: '#d1fae8',
          300: '#99f6e4',
          400: '#5eead4',
          500: '#2D5C4C',
          600: '#24523F',
          700: '#1d4231',
          800: '#193628',
          900: '#152b1f',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
