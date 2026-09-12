import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/MCPE-WEBSKIN/',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
  }
}));
