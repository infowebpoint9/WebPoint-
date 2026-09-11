import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
    {
        q: "What is included in the ₹1,999 package?",
        a: "Everything you need to launch: professional store design, 40+ winning products with images, descriptions and pricing, a free domain, a custom business logo, complete store setup, mobile-responsive design and A–Z guidance after delivery.",
    },
    {
        q: "How many products will be added?",
        a: "Your store comes with 40+ carefully selected, high-demand products. Each product is listed with proper images, a written description and sensible pricing.",
    },
    {
        q: "Do you provide the domain?",
        a: "Yes. A free domain is included in the package, chosen together with you so it fits your store's name and brand.",
    },
    {
        q: "Will my store work on mobile?",
        a: "Yes. Your store is built mobile-first, so it looks and works beautifully on phones, tablets and desktops — where most of your customers will actually shop.",
    },
    {
        q: "Can I request design changes?",
        a: "Of course. We share the design with you during the build, and reasonable revisions — colours, layout preferences, content tweaks — are a normal part of the process.",
    },
    {
        q: "When will my website be ready?",
        a: "Our stated service target is ready within 24 hours of confirming your requirements. We will always tell you honestly if anything needs a little more time.",
    },
    {
        q: "When do I make the payment?",
        a: "Only after your website is completed and shown to you. There is 0% advance — you see the finished store first, then pay.",
    },
    {
        q: "Are there any hidden charges?",
        a: "No. ₹1,999 is the complete, all-inclusive price for everything listed on this page. Nothing is added later.",
    },
    {
        q: "Will I receive guidance after setup?",
        a: "Yes. A–Z guidance is included — we walk you through how your store works and what to do next, so you're never left figuring things out alone.",
    },
];

export const Faq = () => {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="relative py-20 sm:py-28" data-testid="faq-section">
            <div className="mx-auto max-w-3xl px-5 sm:px-8">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Questions, Answered Honestly."
                    sub="Everything most people ask before starting — in plain words."
                    align="center"
                />
                <Reveal className="mt-12">
                    <div className="divide-y divide-[#FCF4E1]/10 rounded-3xl border border-[#FCF4E1]/10 bg-[#FCF4E1]/[0.02]">
                        {FAQS.map((faq, i) => {
                            const isOpen = open === i;
                            return (
                                <div key={faq.q} data-testid={`faq-item-${i}`}>
                                    <button
                                        type="button"
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                        aria-expanded={isOpen}
                                        data-testid={`faq-question-${i}`}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#FCF4E1]/[0.03]"
                                    >
                                        <span className={`text-sm font-semibold sm:text-base ${isOpen ? "text-[#FCF4E1]" : "text-[#B5B0A4]"}`}>
                                            {faq.q}
                                        </span>
                                        <span
                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                                isOpen ? "rotate-180 border-[#C8242B] bg-[#C8242B] text-[#FCF4E1]" : "border-[#FCF4E1]/15 text-[#B5B0A4]"
                                            }`}
                                        >
                                            <ChevronDown size={14} />
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-sm leading-relaxed text-[#B5B0A4]" data-testid={`faq-answer-${i}`}>
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
