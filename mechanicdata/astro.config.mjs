// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Mode static pour génération de site statique (défaut)
  output: 'static',
  
  // Configuration pour GitHub Pages
  site: 'https://Taglhydz.github.io',
  base: '/mechanicdata',
  
  // Options de build
  build: {
    assets: '_assets'
  }
});
