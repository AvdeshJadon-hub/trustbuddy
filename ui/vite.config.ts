// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',   // or '0.0.0.0' to bind to all network interfaces
    port: 8000,          // ensure the port is not in use by another app
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    testTimeout: 20000, 
    include: '**/*.{spec,e2e}.?(c|m)[jt]s?(x)',
  },
});
