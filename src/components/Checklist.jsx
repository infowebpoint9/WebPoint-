import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useStoreModal } from "@/context/ModalContext";

const ITEMS = [
    "Professional Store Design",
    "40+ Winning Products",
    "High-Demand Product Selection",
    "Free Domain",
    "Custom Business Logo",
    "Complete Product Listing",
    "Product Images",
    "Product Descriptions",
    "Product Pricing",
    "Store Setup",
    "Mobile-Responsive Design",
    "A–Z Guidance",
];

export const Checklist = () => {
    const { openModal } = useStoreModal();

    return (
        <section className="relative overflow-hidden py-12 sm:py-16" data-testid="checklist-section">
            <div className="glow-red pointer-events-none absolute left-[-200px] top-1/4 h-[460px] w-[460px]" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
                <div className="lg:sticky lg:top-32 lg:self-start">
                    <Reveal>
                        <span className="eyebrow">The Service</span>
                        <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#FCF4E1] sm:text-3xl lg:text-4xl">
                            Complete Dropshipping <span className="font-serif-accent font-medium italic">Store Setup</span>
                        </h2>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-[#B5B0A4]">
                            Twelve deliverables, one fixed price. Everything below is included — nothing is an add-on,
                            nothing is extra.
                        </p>
                        <div className="glass-chip mt-7 inline-flex items-center gap-3 rounded-full px-5 py-2.5">
                            <span className="font-mono-brand text-[10px] uppercase tracking-[0.22em] text-[#B5B0A4]">All-inclusive</span>
                            <span className="text-sm font-bold text-[#FCF4E1]">₹1,999</span>
                        </div>
                        <div className="mt-7">
                            <button
                                type="button"
                                onClick={openModal}
                                data-testid="checklist-cta-btn"
                                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                            >
                                Start My Store <ArrowRight size={15} />
                            </button>
                        </div>
                    </Reveal>
                </div>
            <motion.ul
                className="grid gap-3 sm:grid-cols-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                data-testid="checklist-items"
            >
                {ITEMS.map((item) => (
                    <motion.li
                        key={item}
                        variants={{
                            hidden: { opacity: 0, y: 18 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        className="glass-card flex items-center gap-3.5 rounded-xl px-4 py-4"
                        data-testid={`checklist-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8242B] text-[#FCF4E1] shadow-[0_4px_14px_rgba(200,36,43,0.4)]">
                            <Check size={13} strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-[#FCF4E1]">{item}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    </section>
    );
};
