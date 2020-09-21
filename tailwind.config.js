module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/TopHeaderImage.jpg')"
      })
    },
  },
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
