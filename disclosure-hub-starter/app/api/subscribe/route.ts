import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TOOLKIT_NAMES: Record<string, { name: string; path: string }> = {
  hr:      { name: 'HR Operational Toolkit',             path: '/downloads/LBDG-HR-Toolkit-Operational-2025.pdf'             },
  finance: { name: 'Finance Operational Toolkit',        path: '/downloads/LBDG-Finance-Toolkit-Operational-2025.pdf'        },
  comms:   { name: 'Communications Operational Toolkit', path: '/downloads/LBDG-Communications-Toolkit-Operational-2025.pdf' },
  board:   { name: 'Leadership & Board Toolkit',         path: '/downloads/LBDG-Leadership-Board-Toolkit-2025.pdf'           },
};

export async function POST(req: NextRequest) {
  try {
    const { email, kitId, reportId, reportTitle } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // ─── Report waitlist ──────────────────────────────────
    if (kitId === 'report-waitlist') {
      const title = reportTitle ?? reportId ?? 'LBDG Report';

      // Confirmation to user
      await resend.emails.send({
        from: 'LBDG <contact@readyfordisclosure.com>',
        to: email,
        subject: `You're on the waitlist: ${title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #ffffff;">
            <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 32px;">
              <p style="font-family: 'Courier New', monospace; font-size: 12px; color: #8A9BB5; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 6px 0;">
                LBDG · Leadership Bureau for Disclosure Guidance
              </p>
            </div>
            <h1 style="font-size: 22px; font-weight: 700; color: #1B2A4A; margin: 0 0 16px 0;">
              You're on the list.
            </h1>
            <p style="font-size: 15px; color: #4A5D78; line-height: 1.7; margin: 0 0 16px 0;">
              We'll notify you as soon as <strong>${title}</strong> is available. You'll be among the first to access it.
            </p>
            <div style="background: #F1F5F9; border-left: 3px solid #C9A84C; padding: 16px 20px; margin: 28px 0; border-radius: 0 4px 4px 0;">
              <p style="font-size: 13px; color: #4A5D78; margin: 0 0 8px 0; font-weight: 600;">
                While you wait — the Executive Starter Pack is free.
              </p>
              <p style="font-size: 13px; color: #4A5D78; margin: 0 0 12px 0;">
                It covers the DVI, sector exposure grid, CEO orchestration sequence, and readiness check. The right starting point before any report.
              </p>
              <a href="https://readyfordisclosure.com/rapports#starter" style="display: inline-block; padding: 10px 20px; background: #1B2A4A; color: #C9A84C; text-decoration: none; font-family: 'Courier New', monospace; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; border-radius: 4px;">
                Download free →
              </a>
            </div>
            <p style="font-size: 13px; color: #4A5D78; line-height: 1.7; margin: 0 0 8px 0;">
              Current DVI: <strong>6.6 / 10 — READINESS</strong>. Track live signals at readyfordisclosure.com/signals.
            </p>
            <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; margin-top: 32px;">
              <p style="font-family: 'Courier New', monospace; font-size: 11px; color: #8A9BB5; margin: 0;">
                © 2026 LBDG — readyfordisclosure.com<br/>
                To unsubscribe: reply with "unsubscribe" in the subject line.
              </p>
            </div>
          </div>
        `,
      });

      // Notify Laurent — lead + demand signal
      await resend.emails.send({
        from: 'LBDG Leads <contact@readyfordisclosure.com>',
        to: 'contact@readyfordisclosure.com',
        subject: `Report waitlist: ${title}`,
        html: `
          <p><strong>New report waitlist signup</strong></p>
          <p>Email: <strong>${email}</strong></p>
          <p>Report: ${title} (${reportId})</p>
          <p>Time: ${new Date().toISOString()}</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    // ─── Toolkit download ─────────────────────────────────
    const toolkit = TOOLKIT_NAMES[kitId];
    const downloadUrl = `https://readyfordisclosure.com${toolkit?.path ?? ''}`;
    const kitName = toolkit?.name ?? 'LBDG Toolkit';

    await resend.emails.send({
      from: 'LBDG <contact@readyfordisclosure.com>',
      to: email,
      subject: `Your LBDG toolkit: ${kitName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #ffffff;">
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 32px;">
            <p style="font-family: 'Courier New', monospace; font-size: 12px; color: #8A9BB5; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 6px 0;">
              LBDG · Leadership Bureau for Disclosure Guidance
            </p>
          </div>
          <h1 style="font-size: 24px; font-weight: 700; color: #1B2A4A; margin: 0 0 16px 0;">
            Your toolkit is ready.
          </h1>
          <p style="font-size: 15px; color: #4A5D78; line-height: 1.7; margin: 0 0 24px 0;">
            Thank you for accessing the <strong>${kitName}</strong>. Your PDF is available at the link below.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="${downloadUrl}" style="display: inline-block; padding: 14px 32px; background: #1B2A4A; color: #C9A84C; text-decoration: none; font-family: 'Courier New', monospace; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; border-radius: 4px;">
              Download ${kitName} PDF →
            </a>
          </div>
          <div style="background: #F1F5F9; border-left: 3px solid #C9A84C; padding: 16px 20px; margin: 32px 0; border-radius: 0 4px 4px 0;">
            <p style="font-size: 13px; color: #4A5D78; margin: 0 0 8px 0; font-weight: 600;">
              Current signal level: DVI 6.6 — READINESS
            </p>
            <p style="font-size: 13px; color: #4A5D78; margin: 0;">
              Secretary of State Rubio, former UAP Task Force Director Stratton, and 32 other senior officials are on record. Pentagon PURSUE program is live at war.gov/ufo.
            </p>
          </div>
          <p style="font-size: 13px; color: #4A5D78; line-height: 1.7; margin: 0 0 8px 0;">
            You will receive LBDG signal alerts when new toolkits are released or the DVI level changes significantly.
          </p>
          <p style="font-size: 13px; color: #8A9BB5; margin: 0 0 24px 0;">
            <a href="https://readyfordisclosure.com/signals" style="color: #C9A84C; text-decoration: none;">
              View the Signal Monitor →
            </a>
          </p>
          <div style="border-top: 1px solid #E2E8F0; padding-top: 20px; margin-top: 32px;">
            <p style="font-family: 'Courier New', monospace; font-size: 11px; color: #8A9BB5; margin: 0;">
              © 2026 LBDG — readyfordisclosure.com<br/>
              To unsubscribe: reply with "unsubscribe" in the subject line.
            </p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'LBDG Leads <contact@readyfordisclosure.com>',
      to: 'contact@readyfordisclosure.com',
      subject: `New lead: ${kitName}`,
      html: `
        <p><strong>New toolkit download</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Toolkit: ${kitName}</p>
        <p>Time: ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: true });
  }
}
