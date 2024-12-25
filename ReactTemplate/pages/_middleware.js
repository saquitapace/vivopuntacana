// middleware.js
import { withClerkMiddleware } from '@clerk/nextjs/server';

export default withClerkMiddleware();
export const config = {
  matcher: '/((?!_next).*)', // Protect all routes except Next.js-specific ones
};
