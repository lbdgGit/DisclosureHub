'use client';

import { useEffect, useRef, useState } from 'react';

const SERIF = 'Playfair Display, serif';
const MONO = 'DM Mono, monospace';
const NAVY = '#1B2A4A';

type Stat = {
  // numeric target to count to
  target: number;
  // how to render: prefix + formatted number + suffix
  prefix?: string;
  suffix?: string;
  // if true, format with thousands separators (2,000)
  thousands?: boolean;
  label: string;
};

const STATS: Stat[] = [
  { target: 2000, suffix: '+', thousands: true, label: 'UAP cases tracked by AARO (confirmed by Sec. Hegseth, 2026)' },
  { target: 34,   label: 'Senior officials on record in The Age of Disclosure (Amazon Prime)' },
  { target: 66,   label: 'Verified institutional events in the DVI dataset (40 since 2017)' },
  { target: 22,   prefix: '$', suffix: 'M', label: 'Pentagon secret UAP program AATIP 2007-2012 (NYT, 2017)' },
];

function formatNumber(n: number, thousands?: boolean): string {
  const rounded = Math.round(n);
  if (thousands) return rounded.toLocaleString('en-US');
  return String(rounded);
}

function CountUp({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1400; // ms
    const startTime = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(stat.target * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(stat.target);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.target]);

  return (
    <span style={{ fontFamily: SERIF, fontWeight: 700, color: NAVY, fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1, display: 'inline-block' }}>
      {stat.prefix ?? ''}{formatNumber(value, stat.thousands)}{stat.suffix ?? ''}
    </span>
  );
}

export default function AnimatedStats() {
  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // respect reduced motion: show final values immediately
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStart(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {STATS.map((stat, idx) => (
        <div key={idx} className="text-center">
          <div style={{ marginBottom: 6 }}>
            <CountUp stat={stat} start={start} />
          </div>
          <div className="text-xs leading-snug" style={{ fontFamily: MONO, color: '#8A9BB5' }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
