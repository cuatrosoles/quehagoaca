import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig ({
  root: path.join (__dirname, 'public'),
  base: path.join (__dirname, 'public'),
  plugins: [react ()],
});
