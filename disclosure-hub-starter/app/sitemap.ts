import type { MetadataRoute } from 'next';

const BASE = 'https://readyfordisclosure.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Priority guide:
  // 1.0  home
  // 0.9  money pages (toolkits, reports) + the 3 SEO panic pages
  // 0.8  proof instruments (velocity, maturity)
  // 0.7  scenarios
  // 0.6  lexicon, faq, about
  // 0.3  legal pages
  const routes: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/',                     priority: 1.0, changeFreq: 'weekly'  },
    { path: '/toolkits',             priority: 0.9, changeFreq: 'weekly'  },
    { path: '/rapports',             priority: 0.9, changeFreq: 'weekly'  },
    { path: '/workforce-disclosure', priority: 0.9, changeFreq: 'monthly' },
    { path: '/leadership-disclosure',priority: 0.9, changeFreq: 'monthly' },
    { path: '/finance-disclosure',   priority: 0.9, changeFreq: 'monthly' },
    { path: '/signals',              priority: 0.8, changeFreq: 'daily'   },
    { path: '/maturity',             priority: 0.8, changeFreq: 'weekly'  },
    { path: '/framework',            priority: 0.7, changeFreq: 'monthly' },
    { path: '/lexique',              priority: 0.6, changeFreq: 'monthly' },
    { path: '/faq',                  priority: 0.6, changeFreq: 'monthly' },
    { path: '/about',                priority: 0.6, changeFreq: 'yearly'  },
    { path: '/legal',                priority: 0.3, changeFreq: 'yearly'  },
    { path: '/privacy',              priority: 0.3, changeFreq: 'yearly'  },
    { path: '/terms',                priority: 0.3, changeFreq: 'yearly'  },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
