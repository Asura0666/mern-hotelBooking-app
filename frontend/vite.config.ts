import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import env from 'dotenv';

// Load environment variables from .env files
// env.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
