'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Radio, AlertCircle } from 'lucide-react';
import { findResponse, type ChatMessage } from '@/data/chatbot';
import { cn } from '@/lib/utils';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: 'assistant',
    content:
      "Bienvenue sur **Signal**, terminal d'information sur la disclosure.\n\nJe suis un assistant documentaire basé sur des sources institutionnelles vérifiées. Je peux vous renseigner sur les concepts UAP, les acteurs clés, les événements historiques et les enjeux prospectifs.\n\nQuelle est votre question ?",
    timestamp: Date.now(),
  },
];

const QUICK_QUESTIONS = [
  "C'est quoi la Disclosure ?",
  "Qu'est-ce que l'AARO ?",
  "Qui est David Grusch ?",
  "Les 5 observables, c'est quoi ?",
  "Différence entre UAP et OVNI ?",
];

// Formater le markdown simple
function formatContent(text: string) {
  const parts = text.split('\n');
  return parts.map((line, i) => {
    if (line === '') return <br key={i} />;
    if (line.startsWith('- ')) {
      return (
        <li key={i} className="flex items-start gap-2 my-0.5">
          <span className="text-signal mt-1.5 text-xs">•</span>
          <span dangerouslySetInnerHTML={{ __html: boldify(line.slice(2)) }} />
        </li>
      );
    }
    return (
      <span key={i} className="block mb-1" dangerouslySetInnerHTML={{ __html: boldify(line) }} />
    );
  });
}

function boldify(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bright font-semibold">$1</strong>');
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: text.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulation délai réseau
    setTimeout(() => {
      const node     = findResponse(text);
      const response = node.response;

      const assistantMsg: ChatMessage = {
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setLoading(false);
    }, 600 + Math.random() * 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-8 flex flex-col h-[100dvh]">
      {/* Header */}
      <div className="mb-6 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <Radio size={20} className="text-cold" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-cold animate-pulse" />
          </div>
          <h1
            className="font-display text-2xl font-700 text-bright"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            Signal — Assistant documentaire
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <AlertCircle size={12} className="text-muted" />
          <p
            className="text-2xs font-mono text-muted"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Base documentaire locale — Sources institutionnelles uniquement — Sans appel API externe
          </p>
        </div>
      </div>

      {/* Zone de messages */}
      <div className="flex-1 overflow-y-auto rounded-lg border border-border bg-surface/30 p-4 space-y-4 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              'flex gap-3 animate-fade-in',
              msg.role === 'user' ? 'flex-row-reverse' : 'flex-row',
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                'shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-600',
                msg.role === 'user'
                  ? 'bg-signal/20 text-signal border border-signal/30'
                  : 'bg-cold/20 text-cold border border-cold/30',
              )}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {msg.role === 'user' ? 'U' : 'S'}
            </div>

            {/* Bulle */}
            <div
              className={cn(
                'max-w-[80%] px-4 py-3 rounded-lg text-sm leading-relaxed',
                msg.role === 'user'
                  ? 'bg-signal/10 border border-signal/20 text-bright'
                  : 'bg-panel border border-border text-body/90',
              )}
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {formatContent(msg.content)}
            </div>
          </div>
        ))}

        {/* Indicateur de chargement */}
        {loading && (
          <div className="flex gap-3">
            <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-cold/20 text-cold border border-cold/30 text-xs font-mono">
              S
            </div>
            <div className="px-4 py-3 rounded-lg bg-panel border border-border">
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-cold/60 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Questions rapides */}
      <div className="mb-3 flex flex-wrap gap-2 shrink-0">
        {QUICK_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => sendMessage(q)}
            disabled={loading}
            className="px-3 py-1.5 rounded-full border border-border text-xs font-mono text-muted hover:text-bright hover:border-signal/30 disabled:opacity-40 transition-all"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="shrink-0 flex gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question sur la disclosure…"
          disabled={loading}
          className="flex-1 px-4 py-3 rounded-lg border border-border bg-surface text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-cold/50 disabled:opacity-50 transition-colors"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="px-4 py-3 rounded-lg bg-cold/10 border border-cold/30 text-cold hover:bg-cold/20 disabled:opacity-40 transition-all"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
