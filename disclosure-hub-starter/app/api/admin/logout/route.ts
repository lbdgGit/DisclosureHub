import { NextResponse } from 'next/server';
import { assertSameOrigin, COOKIE_NAME, sessionCookieOptions } from '@/lib/dvi-admin-auth';

export async function POST(request: Request) {
  try { assertSameOrigin(request); } catch { return NextResponse.json({ error: 'Origin mismatch' }, { status: 403 }); }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, '', { ...sessionCookieOptions, maxAge: 0 });
  return response;
}
