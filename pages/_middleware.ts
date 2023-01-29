import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const token = req.cookies.get('token');

    // console.log(token);
    if (pathname.includes('/api/auth')) {
        return NextResponse.json({ token }, { status: 200 });
    }

    return NextResponse.next();
}
