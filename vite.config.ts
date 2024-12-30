import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  define: {
    VITE_API_URL: JSON.stringify(`${process.env.VITE_API_URL}`),
    VITE_OPENAI_API_KEY: JSON.stringify(`${process.env.VITE_OPENAI_API_KEY}`),
  },
});
