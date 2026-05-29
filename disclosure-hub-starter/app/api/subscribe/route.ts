import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, kitId } = body;

    // Validation basique
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // TODO : intégrer ici votre solution d'email
    // Options : Resend, SendGrid, Brevo (Sendinblue), Mailchimp, ConvertKit
    //
    // Exemple avec Resend :
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'disclosure-hub@votre-domaine.fr',
    //   to: email,
    //   subject: `Votre kit "${kitId}" est disponible`,
    //   html: `<p>Bonjour,<br/>Voici votre kit...</p>`,
    // });
    //
    // Exemple avec Brevo :
    // await fetch('https://api.brevo.com/v3/smtp/email', {
    //   method: 'POST',
    //   headers: {
    //     'api-key': process.env.BREVO_API_KEY!,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     sender: { name: 'Disclosure Hub', email: 'noreply@disclosure-hub.fr' },
    //     to: [{ email }],
    //     subject: `Votre kit "${kitId}"`,
    //     htmlContent: '<p>...</p>',
    //   }),
    // });

    // Pour l'instant : log et réponse OK
    console.log(`[subscribe] email=${email} kit=${kitId}`);

    return NextResponse.json({ success: true, message: 'Email enregistré' }, { status: 200 });

  } catch (err) {
    console.error('[subscribe] error:', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
