import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const BEFORE = [
    "Cluttered, unstructured layout",
    "No consistent branding",
    "Poor product presentation",
    "Difficult to use on mobile",
    "Looks unfinished to visitors",
];

const AFTER = [
    "Clean, conversion-focused structure",
    "Consistent logo, colours and typography",
    "Professional product presentation",
    "Designed mobile-first",
    "Ready for real customers",
];

const CompareList = ({ items, good }) => (
    <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
            <li key={item} className={`flex items-start gap-3 text-sm ${good ? "text-[#FCF4E1]" : "text-[#7A766E]"}`}>
                <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        good ? "bg-[#C8242B] text-[#FCF4E1]" : "border border-[#FCF4E1]/15 text-[#7A766E]"
                    }`}
                >
                    {good ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
                </span>
                {item}
            </li>
        ))}
    </ul>
);

export const BeforeAfter = () => (
    <section className="relative py-12 sm:py-16" data-testid="before-after-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
                eyebrow="The Transformation"
                title="The Difference a Proper Store Makes."
                sub="We focus on presentation and structure — the things that decide whether a visitor trusts a store enough to buy from it."
                align="center"
            />
            <div className="relative mx-auto mt-8 sm:mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
                <div
                    className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C8242B] text-[#FCF4E1] shadow-[0_10px_30px_rgba(200,36,43,0.5)] md:flex"
                    aria-hidden="true"
                >
                    <ArrowRight size={18} />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-3xl border border-dashed border-[#FCF4E1]/15 bg-[#FCF4E1]/[0.015] p-7 sm:p-9"
                    data-testid="before-card"
                >
                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.28em] text-[#7A766E]">Before</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#B5B0A4]">Basic, Unstructured Store</h3>
                    <CompareList items={BEFORE} good={false} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="glass-card rounded-3xl border-[#C8242B]/40 p-7 shadow-[0_0_80px_-30px_rgba(200,36,43,0.45)] sm:p-9"
                    data-testid="after-card"
                >
                    <span className="font-mono-brand text-[10px] uppercase tracking-[0.28em] text-[#C8242B]">After</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#FCF4E1]">Professional, Conversion-Ready Store</h3>
                    <CompareList items={AFTER} good />
                </motion.div>
            </div>
        </div>
    </section>
);
