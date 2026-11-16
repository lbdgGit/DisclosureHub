import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'lbdg-admin-session';
const SESSION_SECONDS = 8 * 60 * 60;

export function isAdminConfigured() {
  return Boolean(process.env.LBDG_ADMIN_PASSWORD && process.env.LBDG_ADMIN_SESSION_SECRET);
}

function constantTimeMatch(a: string, b: string) {
  const digestA = createHash('sha256').update(a).digest();
  const digestB = createHash('sha256').update(b).digest();
  return timingSafeEqual(digestA, digestB);
}

export function checkAdminPassword(value: unknown) {
  const expected = process.env.LBDG_ADMIN_PASSWORD;
  return Boolean(expected && typeof value === 'string' && constantTimeMatch(value, expected));
}

export function issueSession() {
  const secret = process.env.LBDG_ADMIN_SESSION_SECRET;
  if (!secret) throw new Error('Admin authentication is not configured');
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `${expires}.${randomBytes(24).toString('base64url')}`;
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return { token: `${payload}.${signature}`, maxAge: SESSION_SECONDS };
}

export async function isAdminAuthenticated() {
  const secret = process.env.LBDG_ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [expires, nonce, signature] = parts;
  if (!/^\d+$/.test(expires) || Number(expires) <= Date.now() / 1000 || !/^[a-zA-Z0-9_-]+$/.test(nonce)) return false;
  const expected = createHmac('sha256', secret).update(`${expires}.${nonce}`).digest('base64url');
  return constantTimeMatch(expected, signature);
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
};

export { COOKIE_NAME };

export function assertSameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  if (!origin || !host || new URL(origin).host !== host) {
    throw new Error('Cross-origin requests are not permitted');
  }
}
