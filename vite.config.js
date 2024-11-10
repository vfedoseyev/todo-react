import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/todo-react/'  // Замените "todo-react" на название вашего репозитория
});
