import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  server: {
    host: true,
    port: 3000, // This is the port which we will use in docker
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  }
});
