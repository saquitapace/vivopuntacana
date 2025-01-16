import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/i18n';

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

// Define public paths without locale prefix
const publicPaths = [
  '/sign-in',
  '/sign-up',
  '/',
  '/select-role',
  // '',
  '/contact',
];

// Define paths that should bypass middleware completely
const bypassPaths = ['/api/webhooks/clerk', '/api/check-profile'];

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth();
  const url = new URL(req.url);
  const { pathname } = url;

  // Bypass middleware for static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.includes('assets') ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|ico|woff|woff2|ttf|eot)$/) ||
    bypassPaths.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  // Handle internationalization first
  const response = intlMiddleware(req);

  const locale = pathname.split('/')[1] || defaultLocale;
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');

  if (
    pathname === '/' ||
    pathWithoutLocale === '/' ||
    pathname === `/${locale}`
  ) {
    return response; // Allow access to public root
  }

  if (pathname.includes('api') || pathWithoutLocale.includes('api')) {
    return NextResponse.next();
  }
  // Check if it's a public path
  const isPublicPath = publicPaths.some(
    (path) =>
      pathWithoutLocale === path || pathWithoutLocale.startsWith(`${path}/`)
  );

  // If it's a public path, return the intl response
  if (isPublicPath) {
    console.log('public path', pathWithoutLocale, pathname);
    return response;
  }

  // Handle protected routes
  if (!userId) {
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
  }

  // Check profile completion for protected routes
  const isProfileCompleted = sessionClaims?.metadata?.profileCompleted;
  if (!isProfileCompleted && pathWithoutLocale !== '/complete-profile') {
    return NextResponse.redirect(
      new URL(`/${locale}/complete-profile`, req.url)
    );
  }

  return response;
});

export const config = {
  matcher: [
    // Match all paths except Next.js assets and API routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
