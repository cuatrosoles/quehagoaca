import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig ({
  plugins: [react ()],

  build: {
    lib: {
      entry: path.resolve (__dirname, 'public/index.html'),
      name: 'Index',
      ////fileName: (format) => `my-lib.${format}.js`
    },
  },
});
