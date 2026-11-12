import { useState } from "react";
import { FAQS } from "../data/faqs";
import { cn } from "../utils/cn";
import { ChevronDownIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Section FAQ: accordion (satu item terbuka pada satu waktu).
export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section
      id="faq"
      className="bg-sand py-20 sm:py-28"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="faq-title"
            eyebrow="Pertanyaan Umum"
            title="Ada yang Ingin Kamu Tanyakan?"
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <Reveal key={item.id} delay={index * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-gold shadow-lg"
                      : "border-charcoal/10 hover:border-gold/60"
                  )}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                    >
                      <span className="font-serif text-lg text-charcoal">
                        {item.question}
                      </span>
                      <ChevronDownIcon
                        className={cn(
                          "h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </h3>

                  {/* grid-rows 0fr -> 1fr untuk animasi tinggi yang halus */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-charcoal/70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
