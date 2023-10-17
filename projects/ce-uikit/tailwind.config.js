/** @type {import('tailwindcss').Config} */

const LIMITED_PALETTE_VARIANTS = [50, 300, 'DEFAULT', 700, 900]
const PALETTE_VARIANTS = [50, 100, 200, 300, 400, 'DEFAULT', 600, 700, 800, 900];

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ...generatePalettes(['primary', 'secondary'], LIMITED_PALETTE_VARIANTS), // brand
        ...generatePalettes(['success', 'warning', 'error'], PALETTE_VARIANTS), // semantic
        ...generatePalettes(['neutral'], PALETTE_VARIANTS), // neutrals
        ...generatePalettes(['border'], LIMITED_PALETTE_VARIANTS), // brand
        'text': 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-disabled': 'var(--text-disabled)',
      },
    },
    gradientColorStops: {},
    fontSize: {
      'small': 'var(--font-size-small)',
      'base': 'var(--font-size-base)',
      'lg': 'var(--font-size-lg)',
      'xl': 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
    },
    fontFamily: {
      'sans': "var(--font-sans)"
    }
  },
  plugins: [],
  safelist: [
    { pattern: /^(bg|text)-(primary|secondary|success|warning|error)(-(50|300|700|900))?$/ },
    { pattern: /^text-(text|text-muted|text-disabled|white)$/ },
    { pattern: /^bg-neutral(-(50|100|200|300|400|500|600|700|800|900))?$/ },
    { pattern: /^border(-[t|b|l|r])?-(primary|secondary|success|warning|error|border)(-(50|300|700|900))?$/ }
  ]
}

/**
 * Generate color variants for each color name given
 * 
 * ex: generatePalettes(['primary','secondary'], [100,200]))
 * will generate the following palettes :
 * [
 *  'primary': {
 *    100: 'var(--primary-100)',
 *    200: 'var(--primary-200)'
 *   },
 *   'secondary': {
 *    100: 'var(--secondary-100)',
 *    200: 'var(--secondary-200)'
 *   }
 * ]
 * @param {*} colorNames list of color names to generate
 * @param {*} variants all possible variants [50 to 900] for given colors
 * @returns all palettes for the given color names
 */
function generatePalettes(colorNames, variants) {
  const colors = {}

  for (const colorName of colorNames) {
    const variantColors = {}
    for (const variant of variants) {
      variantColors[variant] = variant === 'DEFAULT' ? `var(--${colorName})` : `var(--${colorName}-${variant})`;
    }
    colors[colorName] = variantColors;
  }
  return colors;
}
