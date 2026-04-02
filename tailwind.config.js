// tailwind.config.js — loaded via @config in globals.css
// Adds the Mindvalley typography (Google Sans Flex) plugin for Tailwind v4 compatibility
const typographyGsf = require('@mindvalley/design-system/dist/tailwind/plugins/typography-gsf.js')

module.exports = {
  plugins: [
    typographyGsf.default({
      brands: ['mindvalley'],
    }),
  ],
}
