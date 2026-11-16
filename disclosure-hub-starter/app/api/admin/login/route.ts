import { NextResponse } from 'next/server';
import { assertSameOrigin, checkAdminPassword, COOKIE_NAME, isAdminConfigured, issueSession, sessionCookieOptions } from '@/lib/dvi-admin-auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    if (!isAdminConfigured()) return NextResponse.json({ error: 'Admin setup incomplete' }, { status: 503 });
    const { password } = await request.json();
    if (!checkAdminPassword(password)) {
      // Intentionally make password probing more costly. Use platform rate limits too.
      await new Promise(resolve => setTimeout(resolve, 400));
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
    const session = issueSession();
    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, session.token, { ...sessionCookieOptions, maxAge: session.maxAge });
    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid login request' }, { status: 400 });
  }
}
