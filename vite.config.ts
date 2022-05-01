import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  resolve:{
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, './src') },
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: 'config', replacement: path.resolve(__dirname, './src/config') },
      { find: 'data', replacement: path.resolve(__dirname, './src/data') },
      { find: 'hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: 'styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: 'tests', replacement: path.resolve(__dirname, './src/tests') },
      { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: 'components', replacement: path.resolve(__dirname, './src/components') },
    ]
  }
});

