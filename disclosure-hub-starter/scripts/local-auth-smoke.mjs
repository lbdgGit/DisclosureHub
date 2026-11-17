import { spawn } from 'node:child_process';

const port = 3019;
const origin = `http://127.0.0.1:${port}`;
const password = 'temporary-local-admin-test';
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '-H', '127.0.0.1', '-p', String(port)], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    LBDG_ADMIN_PASSWORD: password,
    LBDG_ADMIN_SESSION_SECRET: 'temporary-local-session-secret-with-64-randomish-characters-not-for-production',
    LBDG_GITHUB_TOKEN: '',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});

let tail = '';
for (const stream of [child.stdout, child.stderr]) {
  stream.on('data', data => { tail = `${tail}${data.toString()}`.slice(-3000); });
}

async function waitUntilReady() {
  for (let attempt = 0; attempt < 150; attempt++) {
    if (child.exitCode !== null) throw new Error(`Next exited (${child.exitCode}): ${tail}`);
    try {
      const response = await fetch(`${origin}/admin`, { signal: AbortSignal.timeout(1500) });
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  throw new Error(`Local server not ready: ${tail}`);
}

try {
  await waitUntilReady();
  const before = await fetch(`${origin}/admin`);
  const beforeHtml = await before.text();
  if (!beforeHtml.includes('Mot de passe administrateur')) throw new Error('Login form not found before authentication');

  const login = await fetch(`${origin}/api/admin/login`, {
    method: 'POST',
    headers: { origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
    redirect: 'manual',
  });
  const result = await login.json();
  const setCookie = login.headers.get('set-cookie') || '';
  if (!login.ok || !result.ok || !setCookie.includes('lbdg-admin-session=')) {
    throw new Error(`Login failed: status=${login.status}, body=${JSON.stringify(result)}, cookie=${Boolean(setCookie)}`);
  }
  const cookie = setCookie.split(';')[0];
  const verify = await fetch(`${origin}/api/admin/login`, { headers: { cookie } });
  const session = await verify.json();
  if (!verify.ok || !session.authenticated) throw new Error('Session verification endpoint rejected the issued cookie');
  const after = await fetch(`${origin}/admin`, { headers: { cookie } });
  const afterHtml = await after.text();
  if (!afterHtml.includes('Sourcer') || afterHtml.includes('Mot de passe administrateur')) {
    throw new Error(`Session cookie not recognized after login: status=${after.status}`);
  }
  console.log('PASS: login returns a session cookie; authenticated /admin renders the DVI editor');
} catch (error) {
  console.error(`FAIL: ${error.message}`);
  process.exitCode = 1;
} finally {
  child.kill('SIGTERM');
}
