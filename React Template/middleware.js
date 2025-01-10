import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/api/webhooks/clerk',
  '/api/check-profile',
  '/select-role',
]);

export default clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims } = auth();
  const { pathname } = new URL(request.url);

  // Allow public routes without any redirects
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  const isCompletingProfile = pathname === '/complete-profile';
  const isProfileCompleted = sessionClaims?.metadata?.profileCompleted;
  
  if (!isProfileCompleted && !isCompletingProfile) {
    return NextResponse.redirect(new URL('/complete-profile', request.url));
  }

  if (isCompletingProfile && isProfileCompleted) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|api/auth|api/webhooks|.*\\..*).*)',
  ],
};
