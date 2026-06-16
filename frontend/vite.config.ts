import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42042,
    proxy: {
      '/api': {
        target: 'http://localhost:42043',
        changeOrigin: true,
      },
    },
  },
});
