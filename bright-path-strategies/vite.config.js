// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.NODE_ENV === 'production' ? 'https://mountaincharlie.github.io/brightpathstrategies/' : '/',
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// // Determine the base URL dynamically based on the environment variable
// const baseURL = process.env.NODE_ENV === 'production' ? 'https://mountaincharlie.github.io/brightpathstrategies/' : '/';
// console.log('vite config mode: ', process.env.NODE_ENV)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: baseURL,
});
