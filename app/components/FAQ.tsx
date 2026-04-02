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
  {
    question: "What languages does EVE support?",
    answer:
      "EVE currently delivers the best experience in English. We're actively expanding language support to serve our global community, with more languages coming soon. Stay tuned for announcements in the Mindvalley app.",
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

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-gray-200">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}>
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <h3 className="title-bold-5 text-[#1A1A1A] mb-2">Still have questions?</h3>
          <p className="body-small text-gray-500 mb-5">
            EVE is live and ready to answer anything — or reach our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#get-started"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              Ask EVE directly
            </a>
            <a
              href="https://support.mindvalley.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-gray-300 hover:text-[#1A1A1A] transition-colors"
            >
              Visit support center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
