import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/', // Change 'your-repo-name' to your actual repo name
});