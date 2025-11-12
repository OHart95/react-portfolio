import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

const repoName = 'my-fullstack-portfolio'

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      // Define '@' to map directly to the 'src' directory
      '@': path.resolve(__dirname, './src'), 
    },
  },
});