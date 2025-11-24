import { hc } from 'hono/client';
import type { RPC } from '@/backend/app';

const { api: rpc } = hc<RPC>(window.location.origin);

export { rpc };
