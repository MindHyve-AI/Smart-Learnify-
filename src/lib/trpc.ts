import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { type AppRouter } from '@/server/api/root';

export const api = createTRPCReact<AppRouter>();

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/trpc`,
      // You can pass any HTTP headers you wish here
      headers() {
        return {
          authorization: typeof localStorage !== 'undefined' ? localStorage.getItem('token') || '' : '',
        };
      },
    }),
  ],
});

/**
 * Inference helpers for input/output
 */
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>; 