'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Radio, AlertCircle } from 'lucide-react';
import { findResponse, type ChatMessage } from '@/data/chatbot';
import { cn } from '@/lib/utils';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: 'assistant',
    content:
      "Welcome to **Signal**, LBDG's information terminal on the disclosure process.\n\nI am a documentary assistant based on verified institutional sources. I can help you understand key UAP concepts, institutional actors, historical events, and organizational risk frameworks.\n\nWhat would you like to know?",
    timestamp: Date.now(),
  },
];

const QUICK_QUESTIONS = [
  'What exactly is Disclosure?',
  'What is AARO?',
  'Who is David Grusch?',
  'What did Secretary Rubio say?',
  'What are the Five Observables?',
  'What is PURSUE?',
];

function formatContent(text: string) {
  const parts = text.split('\n');
  return parts.map((line, i) => {
    if (line === '') return <br key={i} />;
    if (line.startsWith('- ')) {
      const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
      return (
        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
          <span className="text-signal mt-1.5 shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </li>
      );
    }
    if (line.startsWith('•')) {
      const content = line.slice(1).trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
      return (
        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
          <span className="text-signal mt-1.5 shrink-0">•</span>
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </li>
      );
    }
    const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-bright">$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-body/90">$1</em>');
    return <p key={i} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />;
  });
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: text.trim(), timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const node = findResponse(text);
      const botMsg: ChatMessage = { role: 'assistant', content: node.response, timestamp: Date.now() };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-6 flex flex-col" style={{ height: '100dvh' }}>
      {/* Header */}
      <div className="mb-4 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <Radio size={14} className="text-signal" />
          <span className="text-2xs font-mono text-signal tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Signal Terminal
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse ml-1" />
        </div>
        <h1 className="font-display text-xl font-700 text-bright" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
          Disclosure Q&A
        </h1>
        <div className="flex items-center gap-1.5 mt-1">
          <AlertCircle size={11} className="text-muted" />
          <p className="text-2xs font-mono text-muted" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Based on verified institutional sources only. No speculation.
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 py-2 min-h-0">
        {messages.map((msg, i) => (
          <div key={i} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            <div
              className={cn(
                'max-w-[85%] px-4 py-3 rounded-xl text-sm space-y-1',
                msg.role === 'user'
                  ? 'bg-signal/15 text-bright border border-signal/20'
                  : 'bg-surface border border-border text-body',
              )}
            >
              {msg.role === 'assistant' ? (
                <div className="space-y-1">{formatContent(msg.content)}</div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-surface border border-border px-4 py-3 rounded-xl">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick questions */}
      {messages.length <= 2 && (
        <div className="shrink-0 py-3">
          <p className="text-2xs font-mono text-muted mb-2 tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Suggested questions
          </p>
          <div className="flex flex-wrap gap-2">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="px-3 py-1.5 rounded text-xs font-mono text-muted border border-border hover:text-bright hover:border-signal/30 transition-all"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="shrink-0 flex gap-2 pt-3 border-t border-border/50">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about UAP, disclosure, AARO, Grusch…"
          className="flex-1 px-4 py-2.5 rounded border border-border bg-surface text-bright text-sm placeholder:text-muted/50 focus:outline-none focus:border-signal/40 transition-colors"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="px-4 py-2.5 rounded border border-signal/40 text-signal hover:bg-signal/10 disabled:opacity-40 transition-all"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
