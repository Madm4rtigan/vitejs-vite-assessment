import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Open Sans'],
        serif: ['Roboto Slab'],
      },
    }),
  ],
  rules: [
    ['bg-ds-gray', { 'background-color': '#CCCCCC' }],
    ['bg-ds-blue', { 'background-color': '#0D6EFD' }],
    ['border-ds-blue', { 'border-color': '#0D6EFD' }],
    ['input-ds-gray', { color: '#6C757D' }],
    [
      'ds-drop-shadow',
      { filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' },
    ],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
