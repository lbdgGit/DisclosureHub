/**
 * DisclosureMaturity.tsx — LBDG public "Disclosure Maturity" section.
 *
 * DATA: place the seven track JSON files (military.json, government.json, …) in
 *   /content/tracks/ (or wherever you prefer) and import them, OR load them at
 *   build time. Simplest for Next.js App Router: import the JSON directly.
 *
 *   import military from "@/content/tracks/military.json";
 *   ...
 *   const TRACKS = [military, government, legislative, scientific, financial, media, international]
 *     .sort((a, b) => a.order - b.order);
 *
 * This file is a self-contained client component. Palette matches the PNG cards
 * (navy #1B2A4A / gold #C9A84C / cream #FAF8F4). No external UI deps.
 *
 * Anchors: each rung is addressable as #<trackId>-rung-<n> for citable deep links.
 */
"use client";

import React, { useState, useEffect, useRef } from "react";

/* ---------- types (mirror _schema.json) ---------- */
type Status = "achieved" | "partial" | "notYet";
type Tier = "primary" | "official-proceeding" | "secondary" | "none";
type Source = { label: string; url?: string; tier: Tier; note?: string };
type Rung = {
  n: number; title: string; status: Status; oneLiner: string;
  firstPrinciples?: string; statusRationale?: string; limitation?: string;
  sources: Source[]; flags?: string[];
};
type Track = {
  id: string; name: string; icon: IconKind; order: number;
  scope: string; excludes?: string; method: string; scopeNote?: string;
  read?: string; insight?: string;
  statusCount: { achieved: number; partial: number; notYet: number };
  summary: string; sourcingQuality: string; lastReviewed: string;
  rungs: Rung[];
  excludedClaims?: { claim: string; reason: string }[];
  crossTrackNotes?: string;
};
type IconKind =
  | "chevrons" | "pediment" | "gavel" | "atom" | "candlesticks" | "broadcast" | "globe";

/* ---------- tokens ---------- */
const C = {
  navy: "#1B2A4A", gold: "#C9A84C", cream: "#FAF8F4",
  green: "#4E8B45", blue: "#4A7FB5", rust: "#B04A3A",
  ink: "#3A4256", mute: "#6E7480", line: "#E3DCCE", white: "#FFFFFF",
};
const STATUS: Record<Status, { color: string; label: string; def: string }> = {
  achieved: { color: C.green, label: "Achieved", def: "threshold crossed — nothing significant left to do here" },
  partial: { color: C.blue, label: "Partial", def: "real, but can still progress substantially" },
  notYet: { color: C.rust, label: "Not yet", def: "the step has not been taken" },
};
const TIER: Record<Tier, { color: string; label: string }> = {
  primary: { color: C.green, label: "primary source" },
  "official-proceeding": { color: C.blue, label: "official proceeding" },
  secondary: { color: "#C98A2E", label: "press / secondary" },
  none: { color: C.mute, label: "absence" },
};
const mono = "ui-monospace, Menlo, monospace";
const eyebrow: React.CSSProperties = {
  fontFamily: mono, fontSize: 11, textTransform: "uppercase",
  letterSpacing: "0.12em", color: C.gold, fontWeight: 700,
};

/* ---------- icons (gold line art, echoing the PNG cards) ---------- */
function Icon({ kind, size = 30, color = C.gold }: { kind: IconKind; size?: number; color?: string }) {
  const s: React.CSSProperties = { width: size, height: size, stroke: color, fill: "none", strokeWidth: 2 };
  switch (kind) {
    case "chevrons": return <svg viewBox="0 0 40 40" style={s}><polyline points="8,20 20,10 32,20" /><polyline points="8,30 20,20 32,30" /></svg>;
    case "pediment": return <svg viewBox="0 0 40 40" style={{ ...s, fill: color, stroke: "none" }}><polygon points="20,6 4,16 36,16" /><rect x="6" y="18" width="28" height="3" /><rect x="9" y="23" width="3" height="11" /><rect x="16" y="23" width="3" height="11" /><rect x="22" y="23" width="3" height="11" /><rect x="28" y="23" width="3" height="11" /><rect x="5" y="35" width="30" height="3" /></svg>;
    case "gavel": return <svg viewBox="0 0 40 40" style={{ width: size, height: size }}><g stroke={color} strokeLinecap="round"><line x1="25" y1="13" x2="13" y2="25" strokeWidth="3.5" /><line x1="20" y1="8" x2="31" y2="17" strokeWidth="8" /><line x1="8" y1="31" x2="22" y2="31" strokeWidth="4" /></g></svg>;
    case "atom": return <svg viewBox="0 0 40 40" style={s}><circle cx="20" cy="20" r="3" fill={color} stroke="none" /><ellipse cx="20" cy="20" rx="16" ry="6" /><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(60 20 20)" /><ellipse cx="20" cy="20" rx="16" ry="6" transform="rotate(120 20 20)" /></svg>;
    case "candlesticks": return <svg viewBox="0 0 40 40" style={{ ...s, stroke: color }}><line x1="11" y1="6" x2="11" y2="34" /><rect x="7" y="12" width="8" height="14" fill={color} stroke="none" /><line x1="22" y1="9" x2="22" y2="36" /><rect x="18" y="16" width="8" height="15" fill={color} stroke="none" /><line x1="32" y1="7" x2="32" y2="30" /><rect x="28" y="12" width="8" height="11" fill={color} stroke="none" /></svg>;
    case "broadcast": return <svg viewBox="0 0 40 40" style={s}><circle cx="20" cy="24" r="2.5" fill={color} stroke="none" /><path d="M12 20 A11 11 0 0 1 28 20" /><path d="M8 16 A17 17 0 0 1 32 16" /><line x1="20" y1="24" x2="20" y2="34" /></svg>;
    case "globe": return <svg viewBox="0 0 40 40" style={s}><circle cx="20" cy="20" r="15" /><line x1="5" y1="20" x2="35" y2="20" /><ellipse cx="20" cy="20" rx="6" ry="15" /><line x1="20" y1="5" x2="20" y2="35" /></svg>;
    default: return null;
  }
}

/* ---------- atoms ---------- */
function Dot({ status, size = 13 }: { status: Status; size?: number }) {
  const c = STATUS[status].color;
  const filled = status !== "notYet";
  return <span style={{ width: size, height: size, borderRadius: "50%", display: "inline-block", flex: "none", background: filled ? c : C.white, border: `2.5px solid ${c}`, boxSizing: "border-box" }} />;
}

function CountNumbers({ count }: { count: Track["statusCount"] }) {
  const items: [Status, number][] = [["achieved", count.achieved], ["partial", count.partial], ["notYet", count.notYet]];
  return (
    <div style={{ display: "flex", gap: 14, fontSize: 13, fontFamily: mono }}>
      {items.map(([k, v]) => (
        <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 5, color: C.ink }}>
          <Dot status={k} size={10} /> {v}
        </span>
      ))}
    </div>
  );
}

function CountBar({ count }: { count: Track["statusCount"] }) {
  const segs: [Status, number][] = [["achieved", count.achieved], ["partial", count.partial], ["notYet", count.notYet]];
  return (
    <div style={{ display: "flex", gap: 3, width: "100%", height: 12 }}>
      {segs.filter(([, n]) => n > 0).map(([k, n]) => (
        <div key={k} style={{ flex: n, background: STATUS[k].color, borderRadius: 3 }} />
      ))}
    </div>
  );
}

function TierBadge({ tier }: { tier: Tier }) {
  const t = TIER[tier];
  return <span style={{ fontSize: 10.5, fontFamily: mono, textTransform: "uppercase", letterSpacing: "0.06em", color: t.color, border: `1px solid ${t.color}`, borderRadius: 3, padding: "1px 6px", whiteSpace: "nowrap" }}>{t.label}</span>;
}
function Flag({ text }: { text: string }) {
  return <span style={{ fontSize: 10.5, fontFamily: mono, textTransform: "uppercase", letterSpacing: "0.05em", color: "#8A6D1F", background: "#F3ECD6", borderRadius: 3, padding: "1px 6px" }}>{text}</span>;
}
function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 10 }}>
      <div style={eyebrow}>{label}</div>
      <div style={{ color: C.ink, fontSize: 14, lineHeight: 1.6, marginTop: 3 }}>{children}</div>
    </div>
  );
}

function Legend() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 26px", background: C.white, border: `1px solid ${C.line}`, borderRadius: 8, padding: "14px 18px" }}>
      {(Object.keys(STATUS) as Status[]).map((k) => (
        <div key={k} style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <Dot status={k} size={13} />
          <span style={{ fontWeight: 700, color: C.navy, fontSize: 14 }}>{STATUS[k].label}</span>
          <span style={{ color: C.mute, fontSize: 13.5 }}>— {STATUS[k].def}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- rung ---------- */
function RungRow({ trackId, r, isLast }: { trackId: string; r: Rung; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!(r.firstPrinciples || (r.sources && r.sources.length));
  return (
    <div id={`${trackId}-rung-${r.n}`} style={{ display: "flex", gap: 16, scrollMarginTop: 90 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "none", width: 20 }}>
        <Dot status={r.status} />
        {!isLast && <div style={{ flex: 1, width: 2, background: C.line, marginTop: 2 }} />}
      </div>
      <div style={{ paddingBottom: 22, flex: 1 }}>
        <button onClick={() => hasDetail && setOpen(!open)} style={{ all: "unset", cursor: hasDetail ? "pointer" : "default", display: "block", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: mono, fontSize: 12, color: C.mute }}>{String(r.n).padStart(2, "0")}</span>
            <span style={{ fontWeight: 700, color: C.navy, fontSize: 16.5, letterSpacing: "-0.01em" }}>{r.title}</span>
            {r.flags?.map((f) => <Flag key={f} text={f} />)}
            {hasDetail && <span style={{ marginLeft: "auto", color: C.mute, fontSize: 15, fontFamily: mono }}>{open ? "–" : "+"}</span>}
          </div>
          <div style={{ color: C.mute, fontSize: 13.5, marginTop: 3, lineHeight: 1.5 }}>{r.oneLiner}</div>
        </button>

        {open && hasDetail && (
          <div style={{ marginTop: 12, borderLeft: `2px solid ${C.line}`, paddingLeft: 14 }}>
            {r.firstPrinciples && <Detail label="Why this rung">{r.firstPrinciples}</Detail>}
            {r.statusRationale && <Detail label={`Why ${STATUS[r.status].label.toLowerCase()}`}>{r.statusRationale}</Detail>}
            {r.limitation && <Detail label="Limitation">{r.limitation}</Detail>}
            {r.sources?.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <div style={eyebrow}>Evidence</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 6 }}>
                  {r.sources.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <TierBadge tier={s.tier} />
                      {s.url && s.tier !== "none" ? (
                        <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: C.navy, fontSize: 13.5, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: 3 }}>{s.label}{s.note ? <span style={{ color: C.mute }}> — {s.note}</span> : null}</a>
                      ) : (
                        <span style={{ color: C.mute, fontSize: 13.5, fontStyle: s.tier === "none" ? "italic" : "normal" }}>{s.label}{s.note ? ` — ${s.note}` : ""}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Collapsible({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginTop: 10, borderTop: `1px solid ${C.line}`, paddingTop: 16 }}>
      <button onClick={() => setOpen(!open)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={eyebrow}>{label}</span>
        <span style={{ color: C.mute, fontFamily: mono, fontSize: 15 }}>{open ? "–" : "+"}</span>
      </button>
      {open && <div style={{ marginTop: 12, maxWidth: 760 }}>{children}</div>}
    </div>
  );
}

/* ---------- fiche ---------- */
function Fiche({ track }: { track: Track }) {
  return (
    <div style={{ background: C.cream, border: `1px solid ${C.line}`, borderRadius: 10, padding: "34px 34px 30px", marginTop: 20 }}>
      <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
        <div style={{ flex: "none", marginTop: 4 }}><Icon kind={track.icon} size={46} /></div>
        <div style={{ flex: 1 }}>
          <div style={eyebrow}>Disclosure Maturity Track</div>
          <h2 style={{ margin: "4px 0 0", color: C.navy, fontSize: 34, letterSpacing: "-0.02em", fontFamily: mono, fontWeight: 700 }}>{track.name.toUpperCase()}</h2>
          <div style={{ marginTop: 12 }}><CountNumbers count={track.statusCount} /></div>
        </div>
      </div>

      <p style={{ color: C.ink, fontSize: 15.5, lineHeight: 1.65, marginTop: 20, maxWidth: 760 }}>{track.summary}</p>

      {track.read && (
        <div style={{ marginTop: 18, background: C.white, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.gold}`, borderRadius: 6, padding: "14px 18px", maxWidth: 760 }}>
          <div style={eyebrow}>The read</div>
          <div style={{ color: C.ink, fontSize: 14.5, lineHeight: 1.6, marginTop: 5 }}>{track.read}</div>
        </div>
      )}

      <div style={{ marginTop: 30 }}>
        {track.rungs.map((r, i) => <RungRow key={r.n} trackId={track.id} r={r} isLast={i === track.rungs.length - 1} />)}
      </div>

      {track.excludedClaims && track.excludedClaims.length > 0 && (
        <Collapsible label="Deliberately excluded">
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {track.excludedClaims.map((x, i) => (
              <div key={i} style={{ fontSize: 14, lineHeight: 1.55 }}>
                <span style={{ color: C.navy, fontWeight: 600 }}>{x.claim}</span>
                <span style={{ color: C.mute }}> — {x.reason}</span>
              </div>
            ))}
          </div>
        </Collapsible>
      )}

      <Collapsible label="Scope, method & sourcing">
        <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, lineHeight: 1.6, color: C.ink }}>
          <div><b style={{ color: C.navy }}>Scope.</b> {track.scope}</div>
          {track.excludes && <div><b style={{ color: C.navy }}>Excludes.</b> {track.excludes}</div>}
          <div><b style={{ color: C.navy }}>Method.</b> {track.method}</div>
          <div><b style={{ color: C.navy }}>Sourcing.</b> {track.sourcingQuality}</div>
          {track.crossTrackNotes && <div><b style={{ color: C.navy }}>Cross-track.</b> {track.crossTrackNotes}</div>}
          <div style={{ color: C.mute, fontFamily: mono, fontSize: 12 }}>Last reviewed {track.lastReviewed}</div>
        </div>
      </Collapsible>
    </div>
  );
}

/* ---------- tile ---------- */
function Tile({ track, active, onClick }: { track: Track; active: boolean; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        all: "unset", cursor: "pointer", boxSizing: "border-box",
        background: C.white, border: `1px solid ${active ? C.gold : C.line}`,
        borderRadius: 10, padding: "20px 20px 18px", display: "flex", flexDirection: "column", gap: 14,
        boxShadow: hover || active ? "0 6px 20px rgba(27,42,74,0.08)" : "none",
        transform: hover ? "translateY(-2px)" : "none", transition: "all 0.18s ease",
        outline: active ? `1px solid ${C.gold}` : "none",
      }}
    >
      <Icon kind={track.icon} size={32} />
      <div style={{ fontFamily: mono, fontWeight: 700, fontSize: 18, color: C.navy, letterSpacing: "-0.01em" }}>{track.name}</div>
      <CountNumbers count={track.statusCount} />
      <CountBar count={track.statusCount} />
    </button>
  );
}

/* ---------- section ---------- */
export default function DisclosureMaturity({ tracks }: { tracks: Track[] }) {
  const ordered = [...tracks].sort((a, b) => a.order - b.order);
  const [activeId, setActiveId] = useState(ordered[0]?.id ?? "");
  const ficheRef = useRef<HTMLDivElement>(null);
  const active = ordered.find((t) => t.id === activeId);

  // deep-link support: #<trackId> or #<trackId>-rung-<n>
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    if (hash) {
      const tid = hash.split("-rung-")[0];
      if (ordered.some((t) => t.id === tid)) setActiveId(tid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeId && ficheRef.current) ficheRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeId]);

  const totals = ordered.reduce(
    (a, t) => ({ achieved: a.achieved + t.statusCount.achieved, partial: a.partial + t.statusCount.partial, notYet: a.notYet + t.statusCount.notYet }),
    { achieved: 0, partial: 0, notYet: 0 }
  );

  return (
    <div style={{ background: C.cream, padding: "40px 24px 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ borderBottom: `2px solid ${C.navy}`, paddingBottom: 18, marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={eyebrow}>Readyfordisclosure.com · LBDG</div>
            <div style={{ fontFamily: mono, fontWeight: 700, color: C.gold, fontSize: 15 }}>LBDG</div>
          </div>
          <h1 style={{ margin: "10px 0 0", color: C.navy, fontSize: 40, letterSpacing: "-0.02em", fontWeight: 800 }}>Disclosure Maturity</h1>
          <p style={{ color: C.ink, fontSize: 16, lineHeight: 1.6, marginTop: 10, maxWidth: 720 }}>
            Where institutional disclosure actually stands, one sector at a time. Seven tracks, each built from first principles and measured against the public record. Every status is sourced; the gaps are where the exposure lives.
          </p>
        </div>

        <Legend />

        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", margin: "22px 0 22px" }}>
          <span style={{ ...eyebrow, color: C.mute }}>Across all seven</span>
          <CountNumbers count={totals} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
          {ordered.map((t) => (
            <Tile key={t.id} track={t} active={t.id === activeId} onClick={() => setActiveId(t.id)} />
          ))}
        </div>

        <div ref={ficheRef}>{active && <Fiche track={active} />}</div>
      </div>
    </div>
  );
}
