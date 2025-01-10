import { NextResponse } from 'next/server';

const locales = ['en', 'es'];

// Get the preferred locale, similar to above
function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  return acceptLanguage.split(',')[0].split('-')[0];
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Skip if the request is for a static file or API
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.includes('.') ||
    pathname.includes('/static/') ||
    pathname.includes('assets')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request) || 'en';
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|static|.*\\..*).*)',
  ],
};
