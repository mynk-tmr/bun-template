import { hc } from 'hono/client';
import type { RPC } from '@/backend/app';

const { api: rpc } = hc<RPC>('http://localhost:3000');

export { rpc };
