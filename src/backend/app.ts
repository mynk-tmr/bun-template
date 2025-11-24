import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono()
  .use(logger())
  .basePath('api')
  .get('/quote/:id', async (c) => {
    const { id } = c.req.param();
    const { quote } = await fetch(`https://dummyjson.com/quotes/${id}`).then(
      (res) => res.json(),
    );
    return c.json({ quote });
  });

export default app;

export type RPC = typeof app;
