# Disclosure Hub

Portail de référence sur la disclosure UAP — Next.js 15 App Router + Tailwind CSS.

## Stack

- **Framework** : Next.js 15 (App Router)
- **Styling** : Tailwind CSS + design system custom
- **Fonts** : Syne (display) + JetBrains Mono + Instrument Serif
- **Icônes** : Lucide React
- **Déploiement** : Vercel (recommandé) ou Netlify

## Structure

```
disclosure-project/
├── app/
│   ├── layout.tsx          ← Layout global (Navbar, Footer, fonts)
│   ├── page.tsx            ← Homepage
│   ├── lexique/page.tsx    ← Lexique filtrable (Pilier 1)
│   ├── frise/page.tsx      ← Timeline interactive (Pilier 1)
│   ├── faq/page.tsx        ← FAQ accordion (Pilier 1)
│   ├── chatbot/page.tsx    ← IA documentaire locale (Pilier 1)
│   ├── toolkits/page.tsx   ← Boîtes à outils + email gate (Pilier 2)
│   ├── rapports/page.tsx   ← Rapports payants Stripe/Gumroad (Pilier 3)
│   └── api/
│       └── subscribe/route.ts  ← Endpoint email kit
├── components/
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data/
│   ├── lexique.ts          ← 12 entrées UAP
│   ├── timeline.ts         ← 17 événements 1947→2025
│   ├── faq.ts              ← 10 questions/réponses
│   ├── chatbot.ts          ← Arbre de décision local (9 nœuds)
│   └── resources.ts        ← 6 toolkits + 4 rapports
└── lib/
    └── utils.ts
```

## Lancement

```bash
# Installation
npm install

# Copier les variables d'env
cp .env.local.example .env.local
# → Remplir RESEND_API_KEY (ou autre provider email)

# Développement
npm run dev
# → http://localhost:3000

# Build
npm run build
```

## TODO pour aller en prod

### Pilier 1 — Chatbot
- [ ] Enrichir `data/chatbot.ts` avec plus de nœuds
- [ ] Option : brancher Claude API avec un system prompt strict (sources institutionnelles uniquement)

### Pilier 2 — Email gate toolkits
- [ ] Créer un compte Resend (gratuit jusqu'à 3k/mois) ou Brevo
- [ ] Remplir `RESEND_API_KEY` dans `.env.local`
- [ ] Décommenter le code d'envoi dans `app/api/subscribe/route.ts`
- [ ] Uploader les vrais PDF dans `/public/downloads/`
- [ ] Connecter un CRM ou stocker les emails (Airtable, Notion, Supabase)

### Pilier 3 — Rapports payants
- [ ] Créer les vrais rapports PDF
- [ ] Créer des produits sur Stripe ou Gumroad
- [ ] Remplacer les `achat_url` dans `data/resources.ts` par les vrais liens
- [ ] Ajouter webhook Stripe pour envoi PDF automatique après paiement

### SEO & Contenu
- [ ] Ajouter `/actualites` page (flux RSS ou agrégation manuelle)
- [ ] Ajouter `sitemap.xml` et `robots.txt`
- [ ] Écrire les mentions légales, CGV, politique confidentialité
- [ ] Intégrer Google Analytics ou Plausible

### Design
- [ ] Créer `public/og-image.jpg` (1200x630)
- [ ] Créer `public/favicon.svg`

## Déploiement Vercel

```bash
npx vercel --prod
```

Ajouter les variables d'env dans le dashboard Vercel.
