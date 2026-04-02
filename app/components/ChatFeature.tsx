"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "eve";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "eve",
    content: "Hi! I'm EVE, your personal growth companion. I know your learning history, your goals, and what moves you. What would you like to explore today?",
  },
];

const QUICK_REPLIES = [
  { label: "Help me manage stress", key: "stress" },
  { label: "Suggest a morning routine", key: "morning" },
  { label: "What should I learn today?", key: "learn" },
];

const EVE_RESPONSES: Record<string, string> = {
  stress:
    "Managing stress is one of the most transformational skills you can develop. Based on your journey, I'd recommend starting with Vishen Lakhiani's 6 Phase Meditation — it's one of the most effective tools in our library. Just 20 minutes a day has been shown to reduce cortisol by up to 40%. Want me to add it to your path today?",
  morning:
    "Let's build your perfect morning together! Given your current programs, here's what I'd suggest: Begin with 12 minutes of Alpha Level meditation, followed by journaling using our guided prompts, then 15 minutes from your chosen program. This gentle ritual sets a powerful intention for the day. Shall I schedule your first session?",
  learn:
    "Based on your progress and where you left off, today is perfect for the next lesson in Jim Kwik's Superbrain — you were exploring memory palace techniques. I also noticed you bookmarked a lesson on habit formation by B.J. Fogg. Which feels more energizing right now?",
  default:
    "That's a wonderful area to explore! Let me draw from your personal context and Mindvalley's vast library to create something meaningful just for you. I think I know exactly the right path to suggest — would you like me to curate it?",
};

function EveAvatar({ size = "sm" }: { size?: "sm" | "xs" }) {
  const dim = size === "sm" ? "w-8 h-8" : "w-6 h-6";
  return (
    <div className={`${dim} rounded-full bg-[#0D0920] flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-500/30`}>
      <Image src="/EVE-icon.svg" alt="EVE" width={size === "sm" ? 18 : 14} height={size === "sm" ? 18 : 14} />
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <EveAvatar />
      <div className="bg-[#1A0F3A] border border-violet-900/50 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </div>
  );
}

export default function ChatFeature() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [usedReplies, setUsedReplies] = useState<Set<string>>(new Set());
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (content: string, key?: string) => {
    if (!content.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    if (key) setUsedReplies((prev) => new Set([...prev, key]));
    setIsTyping(true);

    const responseKey = key ?? "default";
    const response = EVE_RESPONSES[responseKey] ?? EVE_RESPONSES.default;

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "eve",
          content: response,
        },
      ]);
    }, 1600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const availableReplies = QUICK_REPLIES.filter((r) => !usedReplies.has(r.key));

  return (
    <section
      id="chat-feature"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #202548 0%, #454468 100%)" }}
      aria-label="Conversational AI feature"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-900/15 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: Chat Demo */}
          <div>
            <div className="rounded-3xl overflow-hidden border border-white/8 shadow-2xl shadow-violet-900/30" style={{ background: "#0F0A20" }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/6">
                <EveAvatar size="sm" />
                <div>
                  <p className="text-white font-semibold text-sm">EVE</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-white/40">Online · Your personal guide</span>
                  </div>
                </div>
                <div className="ml-auto flex gap-1.5" aria-hidden="true">
                  {["bg-red-500/60", "bg-yellow-500/60", "bg-green-500/60"].map((c, i) => (
                    <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div ref={messagesContainerRef} className="h-72 overflow-y-auto px-5 py-5 space-y-4 scroll-smooth" role="log" aria-live="polite" aria-label="Chat messages">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {msg.role === "eve" && <EveAvatar />}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "eve"
                          ? "bg-[#1A0F3A] border border-violet-900/50 text-white/85 rounded-bl-sm"
                          : "text-white rounded-br-sm"
                      }`}
                      style={msg.role === "user" ? { background: "linear-gradient(135deg, #5693F6, #8A87EF)" } : {}}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && <TypingIndicator />}
              </div>

              {/* Quick replies */}
              {availableReplies.length > 0 && !isTyping && (
                <div className="px-5 pb-3 flex flex-wrap gap-2">
                  {availableReplies.map((reply) => (
                    <button
                      key={reply.key}
                      onClick={() => sendMessage(reply.label, reply.key)}
                      className="text-xs px-3 py-1.5 rounded-full border border-violet-500/30 text-violet-300 hover:bg-violet-500/15 hover:border-violet-400/50 transition-all duration-200 font-medium"
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/6 border border-white/8 rounded-2xl px-4 py-3 focus-within:border-violet-500/50 focus-within:bg-white/8 transition-all duration-200">
                  <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask EVE anything…"
                    className="flex-1 bg-transparent text-sm text-white/80 placeholder:text-white/25 outline-none min-w-0"
                    aria-label="Message input"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #9B37F2, #7A12D4)" }}
                    aria-label="Send message"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Caption */}
            <p className="text-center text-white/30 text-xs mt-4">
              ✦ This is a preview. Try clicking the quick replies above.
            </p>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="title-bold-3 text-white mb-6">
              Conversations that <span className="text-white">transform</span>
            </h2>
            <p className="body text-white max-w-lg">
              EVE engages with you like a knowledgeable friend who truly knows
              you. Ask anything, explore ideas, and receive guidance that&apos;s
              always grounded in your personal growth journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
