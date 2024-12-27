// middleware.js
import { withClerkMiddleware } from '@clerk/nextjs/server';

export default function middleware(request) {
  return withClerkMiddleware(request);
}
export const config = {
  matcher: '/((?!_next).*)', // Protect all routes except Next.js-specific ones
};
