import { serve } from 'bun';
import app from './backend/app';
import index from './frontend/index.html';

serve({
  routes: {
    '/': index,
  },
  fetch: app.fetch,
  development: process.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },
});

console.log('Server started on http://localhost:3000');
