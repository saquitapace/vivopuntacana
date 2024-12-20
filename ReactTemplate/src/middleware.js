// middleware.js
import { withClerkMiddleware } from '@clerk/nextjs/server';

export default withClerkMiddleware((req, res, next) => {
  console.log('Clerk middleware is running!');
  next();
});
export const config = {
  matcher: '/((?!_next).*)', // Protect all routes except Next.js-specific ones
};
