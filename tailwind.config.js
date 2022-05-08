module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  safelist: [
    {
      pattern: /^btn-.*/,
    },
    {
      pattern: /^text-.*/,
    },
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        landscape: { raw: '(orientation: landscape)' },
        xs: { max: '425px' },
        fold: { max: '280px' },
        tall: { raw: '(max-width: 540px) and (min-height: 768px)' },
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@rvxlab/tailwind-plugin-ios-full-height'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  daisyui: {
    themes: [
      {
        agentmate: {
          primary: '#AE0736',
          'primary-focus': '#d53b66',
          'primary-content': '#ffffff',

          secondary: '#DB0026',
          'secondary-focus': '#d92c4a',
          'secondary-content': '#ffffff',

          accent: '#9467DE',
          'accent-focus': '#C9B2EE',
          'accent-content': '#ffffff',

          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',

          info: '#2094f3',
          success: '#199759',
          warning: '#ff9900',
          error: '#f22510',
        },
      },
      'light',
    ],
  },
}
