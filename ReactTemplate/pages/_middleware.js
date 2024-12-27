import { withClerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

function isRouteProtected(pathname) {
  const protectedPatterns = [
    /^\/calendar(\/.*)?$/, // Protect `/calendar` and subroutes like `/calendar/*`
  ];

  if (pathname.includes('calendar')) {
    console.log(
      'route is protected:',
      pathname,
      protectedPatterns.some((pattern) => pattern.test(pathname))
    );
  }
  return protectedPatterns.some((pattern) => pattern.test(pathname));
}

export default withClerkMiddleware((req) => {
  const { pathname } = req.nextUrl;
  if (!isRouteProtected(pathname)) {
    return NextResponse.next();
  }
  console.log('route is protected:', pathname);
  const authStatus = req?.__clerkAuthStatus;

  if (authStatus !== 'signed-in') {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/calendar/:path*'],
};
