"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Is EVE free to use?",
    answer:
      "EVE is available exclusively to Mindvalley members. With a Mindvalley membership, you get full access to EVE alongside 100+ transformational programs, live events, and a global community of like-minded learners. Check out our membership plans to find the right fit for you.",
  },
  {
    question: "Does EVE remember my conversations?",
    answer:
      "Yes! EVE maintains a rich memory of your conversations, learning progress, and personal context. Every interaction makes her more attuned to you — your preferences, challenges, and goals. Over time, her guidance becomes increasingly personalised and insightful.",
  },
  {
    question: "What makes EVE different from ChatGPT or other AI assistants?",
    answer:
      "EVE is purpose-built for personal growth and is deeply integrated with Mindvalley's 20+ years of transformational content. She doesn't just answer questions — she knows your learning journey, understands your goals, and actively guides you toward becoming the best version of yourself. She's a growth companion, not a general-purpose assistant.",
  },
  {
    question: "Is my data safe and private with EVE?",
    answer:
      "Absolutely. Your privacy is our highest priority. All conversations are encrypted end-to-end, and we never share your data with third parties. For extra privacy on sensitive topics, you can use EVE's Incognito Mode — a completely private chat space where conversations aren't stored.",
  },
  {
    question: "Can I use EVE on any device?",
    answer:
      "EVE is available on iOS and Android through the Mindvalley app, and accessible on the web through your Mindvalley account. Your progress, preferences, and conversation history sync seamlessly across all your devices.",
  },
  {
    question: "Can I speak to EVE instead of typing?",
    answer:
      "Yes! EVE supports voice input so you can have natural, hands-free conversations. Just like talking to a knowledgeable friend — speak your thoughts, questions, or goals, and EVE will respond. It's especially useful when you're on the go.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="title-bold-3 text-[#1A1A1A] mb-4">
            Everything you{" "}
            <span className="text-[#1A1A1A]">want to know</span>
          </h2>
          <p className="body-large text-gray-500">
            Can&apos;t find your answer? Ask EVE directly — she&apos;s rather good at answering questions.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3" role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-violet-200 shadow-sm shadow-violet-100"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                role="listitem"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="body font-semibold text-[#1A1A1A]">
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "rotate-45" : "bg-gray-100 rotate-0"
                    }`}
                    style={isOpen ? { background: "linear-gradient(135deg, #5693F6, #8A87EF)" } : {}}
                    aria-hidden="true"
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-gray-500"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="h-px bg-violet-100 mb-4" />
                    <p className="body text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
