import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://datadecision.consulting/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
