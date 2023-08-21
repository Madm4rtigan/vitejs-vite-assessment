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
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
