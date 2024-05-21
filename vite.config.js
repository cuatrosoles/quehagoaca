import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig ({
  path: path.join (__dirname, 'public'),
  plugins: [react ()],
});
