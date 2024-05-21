import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig ({
  path: __dirname | '/public/index.html',
  plugins: [react ()],
});
