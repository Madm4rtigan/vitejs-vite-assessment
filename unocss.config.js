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
  rules: [['bg-ds-gray', { backgroundcolor: '#CCCCCC' }]],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
