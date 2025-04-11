import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Shadows-of-the-Mirror/',
  build: {
    outDir: 'dist',
  },
}) 
