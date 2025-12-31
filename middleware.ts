import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rewrite /siti-web-{city} to /siti-web/{city} internally
  // This allows URLs like /siti-web-reggio-emilia to work
  // The URL in the browser will remain /siti-web-reggio-emilia
  if (pathname.startsWith('/siti-web-') && pathname !== '/siti-web') {
    const city = pathname.replace('/siti-web-', '')
    if (city && city.length > 0) {
      const rewriteUrl = new URL(`/siti-web/${city}`, request.url)
      // Use rewrite (not redirect) to keep the original URL visible in the browser
      return NextResponse.rewrite(rewriteUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

