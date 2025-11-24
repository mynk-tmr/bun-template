import '../index.css';
import { Quote } from './quote';

export function App() {
  return (
    <main className="grid place-content-center min-h-screen">
      <h1 className="text-3xl font-bold">Fullstack Hono + React + Bun</h1>
      <Quote />
    </main>
  );
}
