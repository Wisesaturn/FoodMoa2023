/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js}'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '1280px',
    },
    maxWidth: {
      full: '1280px',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
        p: { fontSize: theme('fontSize.base') },
        span: { fontSize: theme('fontSize.sm') },
      });
    }),
  ],
};
