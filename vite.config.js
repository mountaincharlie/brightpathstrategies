import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // Determine the base URL dynamically based on the environment variable
const baseURL = process.env.NODE_ENV === 'production' ? '/brightpathstrategies/' : '/';
// console.log('vite config mode: ', baseURL)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseURL,
});
