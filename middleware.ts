// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PROJECT_ROUTES } from './constants';

export function middleware(request: NextRequest) {
    // If user requests /ciloc, rewrite to /somewhere
    if (request.nextUrl.pathname === '/ciloc') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.ciloc; // target route
        return NextResponse.redirect(url);
    }else if (request.nextUrl.pathname === '/hawiyat') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.hawiyat; // target route
        return NextResponse.redirect(url);
    }
    else if (request.nextUrl.pathname === '/portfolio') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.portfolio; // target route
        return NextResponse.redirect(url);
    } else if (request.nextUrl.pathname === '/qg-restaurant') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.qg_restaurant; // target route
        return NextResponse.redirect(url);
    } else if (request.nextUrl.pathname === '/setif-travelers') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.setif_travelers; // target route
        return NextResponse.redirect(url);
    }
    else if (request.nextUrl.pathname === '/bejaia-immo') {
        const url = request.nextUrl.clone();
        url.href = PROJECT_ROUTES.bejaia_immo; // target route
        return NextResponse.redirect(url);
    }

    // Continue without change
    return NextResponse.next();
}

// Optional: define what paths this middleware applies to
export const config = {
    matcher: ['/ciloc/:path*'], // run middleware for /ciloc and subpaths
};
